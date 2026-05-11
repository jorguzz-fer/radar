import { Injectable, Logger } from '@nestjs/common'
import { prisma } from '@radar/database'

// Quantas pautas no máximo geramos por tenant numa rodada. Mantém o
// dashboard "review-able" — 10-15 é o ponto onde um editor humano ainda
// consegue passar pauta por pauta.
const TOP_N_POR_TENANT = 10

// Score mínimo para uma ProcessedContent virar Pauta. Filtra ruído de
// itens que vieram com scores baixos (fora do escopo, repetidos).
const MIN_SCORE_FINAL = 0.35

export type GeneratorStats = {
  pautasGeradas: number
  porTenant: Array<{ tenantId: string; count: number }>
}

@Injectable()
export class PautasGeneratorService {
  private readonly logger = new Logger(PautasGeneratorService.name)

  async generateForWeek(filterTenantId?: string): Promise<GeneratorStats> {
    const semanaRef = isoWeekKey(new Date())
    const tenants = await prisma.tenant.findMany({
      where: filterTenantId ? { id: filterTenantId } : { status: 'ATIVO' },
      select: { id: true, nome: true },
    })

    const stats: GeneratorStats = { pautasGeradas: 0, porTenant: [] }

    for (const tenant of tenants) {
      const count = await this.generateForTenant(tenant.id, semanaRef)
      stats.porTenant.push({ tenantId: tenant.id, count })
      stats.pautasGeradas += count
      this.logger.log(`[${tenant.nome}] gerou ${count} pautas para ${semanaRef}`)
    }

    return stats
  }

  private async generateForTenant(tenantId: string, semanaRef: string): Promise<number> {
    // Candidatos: ProcessedContent do tenant que ainda não viraram Pauta.
    // O JOIN com pautas via processedId garante idempotência: rodar 2x não
    // duplica.
    const candidates = await prisma.$queryRaw<
      Array<{
        id: string
        rawId: string
        pilarSugerido: string
        resumoPt: string
        anguloSugerido: string
        novidadeScore: number
        relevanciaScore: number
        titulo: string
        fonteNome: string
      }>
    >`
      SELECT
        pc.id,
        pc."rawId",
        pc."pilarSugerido",
        pc."resumoPt",
        pc."anguloSugerido",
        pc."novidadeScore",
        pc."relevanciaScore",
        rc.titulo,
        s.nome AS "fonteNome"
      FROM processed_contents pc
      JOIN raw_contents rc ON rc.id = pc."rawId"
      JOIN sources s ON s.id = rc."sourceId"
      LEFT JOIN pautas p ON p."processedId" = pc.id
      WHERE pc."tenantId" = ${tenantId}
        AND p.id IS NULL
      ORDER BY (pc."novidadeScore" + pc."relevanciaScore") DESC
      LIMIT 200
    `

    const ranked = candidates
      .map((c) => ({
        ...c,
        scoreFinal: (c.novidadeScore + c.relevanciaScore) / 2,
      }))
      .filter((c) => c.scoreFinal >= MIN_SCORE_FINAL)
      .slice(0, TOP_N_POR_TENANT)

    if (ranked.length === 0) return 0

    await prisma.pauta.createMany({
      data: ranked.map((c) => ({
        tenantId,
        processedId: c.id,
        status: 'SUGERIDA' as const,
        titulo: c.titulo,
        resumo: c.resumoPt,
        anguloSugerido: c.anguloSugerido,
        pilarSugerido: c.pilarSugerido,
        fonteOriginal: c.fonteNome,
        scoreNovidade: c.novidadeScore,
        scoreRelevancia: c.relevanciaScore,
        scoreFinal: c.scoreFinal,
        semanaRef,
      })),
      skipDuplicates: true,
    })

    return ranked.length
  }
}

function isoWeekKey(date: Date): string {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
  const day = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`
}

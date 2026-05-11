import { Injectable, Logger } from '@nestjs/common'
import { prisma } from '@radar/database'
import { claudeCallWithRetry } from '@radar/claude-sdk'
import { getVocabPack } from '@radar/vocab-packs'

export type ProcessorStats = {
  processed: number
  failed: number
  custoUsdTotal: number
}

type ClassificationResult = {
  pilarSugerido: string
  resumoPt: string
  anguloSugerido: string
  novidadeScore: number
  relevanciaScore: number
}

// Limite de chars que mandamos pro Claude. Acima disso, custo e latência
// crescem sem ganho de qualidade — a maioria dos feeds RSS tem 1-3k chars
// no rawText. 8000 cobre 99%+ e mantém o token count razoável.
const MAX_RAW_TEXT_CHARS = 8000

// Cap de itens processados num único run. Evita uma rodada gigante depois
// de uma janela sem coleta esgotar tokens/orçamento. O resto fica para a
// próxima execução do pipeline.
const MAX_ITEMS_PER_RUN = 50

@Injectable()
export class ProcessorService {
  private readonly logger = new Logger(ProcessorService.name)

  async processPending(filterTenantId?: string): Promise<ProcessorStats> {
    const stats: ProcessorStats = { processed: 0, failed: 0, custoUsdTotal: 0 }

    // Cada (rawContent, tenant) com a source vinculada gera uma linha em
    // ProcessedContent. O unique [rawId, tenantId] na tabela garante que
    // não processamos a mesma combinação 2x, mesmo em runs concorrentes.
    const pairs = await this.findPendingPairs(filterTenantId)
    if (pairs.length === 0) {
      this.logger.log('Nada para processar.')
      return stats
    }

    this.logger.log(`Processando ${pairs.length} pares (raw, tenant)...`)

    for (const pair of pairs.slice(0, MAX_ITEMS_PER_RUN)) {
      try {
        const result = await this.processOne(pair.rawId, pair.tenantId)
        stats.processed++
        stats.custoUsdTotal += result.custoUsd
      } catch (err) {
        stats.failed++
        this.logger.warn(
          `Falha ao processar raw=${pair.rawId} tenant=${pair.tenantId}: ${(err as Error).message}`,
        )
      }
    }

    return stats
  }

  private async findPendingPairs(
    filterTenantId?: string,
  ): Promise<Array<{ rawId: string; tenantId: string }>> {
    // Query: para cada RawContent, listar tenants que assinam a source dele
    // e ainda não têm ProcessedContent para esse raw. Parametrizada via
    // Prisma.sql pra prevenir injection no filterTenantId.
    const rows = filterTenantId
      ? await prisma.$queryRaw<Array<{ rawId: string; tenantId: string }>>`
          SELECT rc.id AS "rawId", tf."tenantId" AS "tenantId"
          FROM raw_contents rc
          JOIN tenant_fontes tf ON tf."sourceId" = rc."sourceId"
          LEFT JOIN processed_contents pc
            ON pc."rawId" = rc.id AND pc."tenantId" = tf."tenantId"
          WHERE pc.id IS NULL
            AND tf."tenantId" = ${filterTenantId}
          ORDER BY rc."coletadoEm" DESC
          LIMIT 500
        `
      : await prisma.$queryRaw<Array<{ rawId: string; tenantId: string }>>`
          SELECT rc.id AS "rawId", tf."tenantId" AS "tenantId"
          FROM raw_contents rc
          JOIN tenant_fontes tf ON tf."sourceId" = rc."sourceId"
          LEFT JOIN processed_contents pc
            ON pc."rawId" = rc.id AND pc."tenantId" = tf."tenantId"
          WHERE pc.id IS NULL
          ORDER BY rc."coletadoEm" DESC
          LIMIT 500
        `
    return rows
  }

  private async processOne(
    rawId: string,
    tenantId: string,
  ): Promise<{ custoUsd: number }> {
    const [raw, tenant] = await Promise.all([
      prisma.rawContent.findUniqueOrThrow({ where: { id: rawId } }),
      prisma.tenant.findUniqueOrThrow({
        where: { id: tenantId },
        include: { pilares: { orderBy: { ordem: 'asc' } } },
      }),
    ])

    const pack = getVocabPack(tenant.vocabPackId)

    const pilaresList = tenant.pilares
      .map((p) => `- ${p.nome} (${p.pesoPct}%): ${p.descricao ?? ''}`)
      .join('\n')

    const systemPrompt = this.buildSystemPrompt(pack.nome, pilaresList)
    const userPrompt = this.buildUserPrompt(raw.titulo, raw.rawText, raw.idioma)

    const response = await claudeCallWithRetry(userPrompt, systemPrompt, {
      model: 'claude-haiku-4-5-20251001',
      maxTokens: 800,
      tenantId,
      acao: 'process_content',
    })

    const classification = this.parseResponse(response.content)

    await prisma.processedContent.create({
      data: {
        rawId,
        tenantId,
        resumoPt: classification.resumoPt,
        pilarSugerido: classification.pilarSugerido,
        anguloSugerido: classification.anguloSugerido,
        novidadeScore: classification.novidadeScore,
        relevanciaScore: classification.relevanciaScore,
        custoTokens: response.totalTokens,
      },
    })

    return { custoUsd: response.custoUsd }
  }

  private buildSystemPrompt(verticalNome: string, pilaresList: string): string {
    return `Você é um analista editorial especializado em ${verticalNome}. Sua tarefa é classificar conteúdo bruto coletado de fontes externas e produzir uma sugestão de pauta para o cliente.

Pilares editoriais do cliente (em ordem de peso):
${pilaresList}

Responda EXCLUSIVAMENTE com um objeto JSON válido (sem markdown, sem code fences, sem texto antes ou depois) no formato:
{
  "pilarSugerido": "<nome exato de um dos pilares acima>",
  "resumoPt": "<resumo em português do Brasil, 1-2 frases, máx 280 chars>",
  "anguloSugerido": "<ângulo editorial sugerido em pt-BR, 1-2 frases, máx 280 chars>",
  "novidadeScore": <decimal entre 0.0 e 1.0>,
  "relevanciaScore": <decimal entre 0.0 e 1.0>
}

Critérios:
- novidadeScore: o quão original/novo é o tema (0.0 = repetido, 1.0 = inédito)
- relevanciaScore: o quão alinhado está com os pilares de maior peso do cliente (0.0 = fora do escopo, 1.0 = encaixa no pilar dominante)`
  }

  private buildUserPrompt(titulo: string, rawText: string, idioma: string): string {
    const text = rawText.slice(0, MAX_RAW_TEXT_CHARS)
    return `Idioma original: ${idioma}\nTítulo: ${titulo}\n\nTexto bruto:\n${text}`
  }

  private parseResponse(raw: string): ClassificationResult {
    // O modelo pode às vezes envelopar em ```json. Tira fences se houver.
    const cleaned = raw
      .trim()
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/```\s*$/, '')
      .trim()

    let parsed: unknown
    try {
      parsed = JSON.parse(cleaned)
    } catch {
      throw new Error(`Resposta Claude não é JSON válido: ${cleaned.slice(0, 200)}`)
    }

    const obj = parsed as Record<string, unknown>
    const pilarSugerido = String(obj.pilarSugerido ?? '').trim()
    const resumoPt = String(obj.resumoPt ?? '').trim()
    const anguloSugerido = String(obj.anguloSugerido ?? '').trim()
    const novidadeScore = clamp01(Number(obj.novidadeScore))
    const relevanciaScore = clamp01(Number(obj.relevanciaScore))

    if (!pilarSugerido || !resumoPt || !anguloSugerido) {
      throw new Error('Campos obrigatórios ausentes na resposta Claude')
    }

    return { pilarSugerido, resumoPt, anguloSugerido, novidadeScore, relevanciaScore }
  }
}

function clamp01(n: number): number {
  if (!Number.isFinite(n)) return 0
  return Math.max(0, Math.min(1, n))
}

import { prisma } from '@radar/database'
import { tenantScope } from '@/lib/auth/requireSession'
import type { SessionPayload } from '@/lib/auth/session'

function isoWeekKey(date: Date): string {
  // Padrão ISO YYYY-Www. Mantém compatibilidade com como semanaRef
  // costuma ser persistida no pipeline de geração de pautas.
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
  const day = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`
}

export type DashboardKPIs = {
  pautasSemana: number
  pautasAprovadas: number
  clientesAtivos: number | null
  custoClaudeMes: string
}

export async function getDashboardKPIs(session: SessionPayload): Promise<DashboardKPIs> {
  const scope = tenantScope(session)
  const semanaAtual = isoWeekKey(new Date())

  const [pautasSemana, pautasAprovadas, clientesAtivos] = await Promise.all([
    prisma.pauta.count({ where: { ...scope, semanaRef: semanaAtual } }),
    prisma.pauta.count({ where: { ...scope, status: 'APROVADA' } }),
    session.role === 'ADMIN_PLATFORM'
      ? prisma.tenant.count({ where: { status: 'ATIVO' } })
      : Promise.resolve(null),
  ])

  return {
    pautasSemana,
    pautasAprovadas,
    clientesAtivos,
    custoClaudeMes: '—', // sem fonte de dados ainda; vem na Sprint 2 (Claude SDK telemetry)
  }
}

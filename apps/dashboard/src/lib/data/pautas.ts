import { prisma } from '@radar/database'
import { tenantScope } from '@/lib/auth/requireSession'
import type { SessionPayload } from '@/lib/auth/session'

export type PautaRow = {
  id: string
  titulo: string
  clienteNome: string
  fonteOriginal: string
  semanaRef: string
  status: 'SUGERIDA' | 'APROVADA' | 'REJEITADA' | 'EM_PRODUCAO' | 'PUBLICADA'
  criadoEm: Date
}

export async function listPautas(session: SessionPayload): Promise<PautaRow[]> {
  const rows = await prisma.pauta.findMany({
    where: tenantScope(session),
    orderBy: { criadoEm: 'desc' },
    take: 200,
    select: {
      id: true,
      titulo: true,
      fonteOriginal: true,
      semanaRef: true,
      status: true,
      criadoEm: true,
      tenant: { select: { nome: true } },
    },
  })

  return rows.map((r) => ({
    id: r.id,
    titulo: r.titulo,
    clienteNome: r.tenant.nome,
    fonteOriginal: r.fonteOriginal,
    semanaRef: r.semanaRef,
    status: r.status,
    criadoEm: r.criadoEm,
  }))
}

export async function getPautaById(session: SessionPayload, id: string) {
  // tenantScope() já garante isolamento: ADMIN_PLATFORM vê tudo, outros
  // só veem se for do próprio tenant. findFirst com where combinado
  // garante que não há vazamento de id de outros tenants.
  return prisma.pauta.findFirst({
    where: { id, ...tenantScope(session) },
    include: {
      tenant: { select: { id: true, nome: true, slug: true } },
    },
  })
}

export async function listRecentPautas(session: SessionPayload, limit = 5) {
  const rows = await prisma.pauta.findMany({
    where: tenantScope(session),
    orderBy: { criadoEm: 'desc' },
    take: limit,
    select: {
      id: true,
      titulo: true,
      fonteOriginal: true,
      status: true,
      tenant: { select: { nome: true } },
    },
  })
  return rows.map((r) => ({
    id: r.id,
    titulo: r.titulo,
    cliente: r.tenant.nome,
    fonte: r.fonteOriginal,
    status: r.status,
  }))
}

export async function getPautasPorSemana(session: SessionPayload, weeks = 12) {
  const rows = await prisma.pauta.groupBy({
    by: ['semanaRef'],
    where: tenantScope(session),
    _count: { _all: true },
    orderBy: { semanaRef: 'desc' },
    take: weeks,
  })
  return rows
    .map((r) => ({ semanaRef: r.semanaRef, count: r._count._all }))
    .sort((a, b) => a.semanaRef.localeCompare(b.semanaRef))
}

export async function getPautasPorStatus(session: SessionPayload) {
  const rows = await prisma.pauta.groupBy({
    by: ['status'],
    where: tenantScope(session),
    _count: { _all: true },
  })
  return rows.map((r) => ({ status: r.status, count: r._count._all }))
}

export async function listTopFontes(session: SessionPayload, limit = 5) {
  const grouped = await prisma.pauta.groupBy({
    by: ['fonteOriginal'],
    where: tenantScope(session),
    _count: { _all: true },
    _avg: { scoreFinal: true },
    orderBy: { _count: { fonteOriginal: 'desc' } },
    take: limit,
  })
  return grouped.map((g) => ({
    nome: g.fonteOriginal,
    pautas: g._count._all,
    qualidade: Math.round((g._avg.scoreFinal ?? 0) * 100),
  }))
}

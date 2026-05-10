'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@radar/database'
import { requireSession } from '@/lib/auth/requireSession'

type Result = { ok: true } | { ok: false; error: string }

const APPROVER_ROLES = new Set(['ADMIN_PLATFORM', 'ADMIN_TENANT', 'EDITOR'])

async function loadPautaForMutation(id: string) {
  const session = await requireSession()
  if (!APPROVER_ROLES.has(session.role)) {
    return { error: 'Você não tem permissão para alterar esta pauta.' as const, session: null, pauta: null }
  }
  // Tenant isolation: ADMIN_PLATFORM aceita qualquer pauta;
  // outros roles só conseguem mutar pautas do próprio tenant.
  const where =
    session.role === 'ADMIN_PLATFORM'
      ? { id }
      : { id, tenantId: session.tenantId ?? '__no_tenant__' }

  const pauta = await prisma.pauta.findFirst({ where, select: { id: true, status: true } })
  if (!pauta) {
    return { error: 'Pauta não encontrada.' as const, session: null, pauta: null }
  }
  return { error: null, session, pauta }
}

export async function aprovarPautaAction(id: string): Promise<Result> {
  const { error, session, pauta } = await loadPautaForMutation(id)
  if (error || !session || !pauta) return { ok: false, error: error ?? 'Erro inesperado.' }

  if (pauta.status === 'PUBLICADA' || pauta.status === 'REJEITADA') {
    return { ok: false, error: `Pauta já está em estado ${pauta.status}.` }
  }

  await prisma.pauta.update({
    where: { id: pauta.id },
    data: {
      status: 'APROVADA',
      aprovadoPor: session.email,
      aprovadoEm: new Date(),
      rejeitadoMotivo: null,
    },
  })

  revalidatePath(`/pautas/${pauta.id}`)
  revalidatePath('/pautas')
  revalidatePath('/')
  return { ok: true }
}

export async function rejeitarPautaAction(id: string, motivo: string): Promise<Result> {
  const trimmed = motivo.trim()
  if (trimmed.length < 5) {
    return { ok: false, error: 'Informe ao menos 5 caracteres no motivo.' }
  }
  if (trimmed.length > 500) {
    return { ok: false, error: 'O motivo não pode passar de 500 caracteres.' }
  }

  const { error, session, pauta } = await loadPautaForMutation(id)
  if (error || !session || !pauta) return { ok: false, error: error ?? 'Erro inesperado.' }

  if (pauta.status === 'PUBLICADA') {
    return { ok: false, error: 'Pauta já publicada não pode ser rejeitada.' }
  }

  await prisma.pauta.update({
    where: { id: pauta.id },
    data: {
      status: 'REJEITADA',
      rejeitadoMotivo: trimmed,
      aprovadoPor: null,
      aprovadoEm: null,
    },
  })

  revalidatePath(`/pautas/${pauta.id}`)
  revalidatePath('/pautas')
  revalidatePath('/')
  return { ok: true }
}

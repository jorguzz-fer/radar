import { prisma } from '@radar/database'
import type { SessionPayload } from '@/lib/auth/session'

export type ClienteRow = {
  id: string
  slug: string
  nome: string
  vertical: string
  plano: string
  status: 'ATIVO' | 'TRIAL' | 'INATIVO'
  criadoEm: Date
}

export async function listClientes(session: SessionPayload): Promise<ClienteRow[]> {
  // Defesa em profundidade: a página que chama isso já passou por
  // requirePlatformAdmin, mas validamos de novo aqui para qualquer
  // chamador futuro que esqueça de checar.
  if (session.role !== 'ADMIN_PLATFORM') {
    throw new Error('listClientes: chamada negada para role ' + session.role)
  }

  return prisma.tenant.findMany({
    orderBy: { criadoEm: 'desc' },
    select: {
      id: true,
      slug: true,
      nome: true,
      vertical: true,
      plano: true,
      status: true,
      criadoEm: true,
    },
  })
}

import { redirect } from 'next/navigation'
import { getSession } from './getSession'
import type { SessionPayload } from './session'

export async function requireSession(): Promise<SessionPayload> {
  const session = await getSession()
  if (!session) redirect('/login')
  return session
}

export async function requirePlatformAdmin(): Promise<SessionPayload> {
  const session = await requireSession()
  if (session.role !== 'ADMIN_PLATFORM') redirect('/')
  return session
}

/**
 * Retorna o filtro `where` para isolar queries por tenant.
 * - ADMIN_PLATFORM: enxerga tudo ({}).
 * - Demais roles: limitado ao seu tenantId. Se o usuário não tem tenantId,
 *   retorna um filtro impossível (`{ id: '__none__' }`) para garantir zero linhas.
 */
export function tenantScope(session: SessionPayload): { tenantId?: string; id?: string } {
  if (session.role === 'ADMIN_PLATFORM') return {}
  if (!session.tenantId) return { id: '__none__' }
  return { tenantId: session.tenantId }
}

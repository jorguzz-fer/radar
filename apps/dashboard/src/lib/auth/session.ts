import { SignJWT, jwtVerify } from 'jose'

const ALG = 'HS256'
const ISSUER = 'radar.tudomudou.com.br'
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7 // 7 dias

export type SessionPayload = {
  sub: string
  email: string
  nome: string
  role: 'ADMIN_PLATFORM' | 'ADMIN_TENANT' | 'EDITOR' | 'VIEWER'
  tenantId: string | null
}

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET
  if (!secret || secret.length < 32) {
    throw new Error('AUTH_SECRET ausente ou curto demais (mínimo 32 caracteres).')
  }
  return new TextEncoder().encode(secret)
}

export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setExpirationTime(`${MAX_AGE_SECONDS}s`)
    .setSubject(payload.sub)
    .sign(getSecret())
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret(), {
      algorithms: [ALG],
      issuer: ISSUER,
    })
    if (
      typeof payload.sub !== 'string' ||
      typeof payload.email !== 'string' ||
      typeof payload.nome !== 'string' ||
      typeof payload.role !== 'string'
    ) {
      return null
    }
    return {
      sub: payload.sub,
      email: payload.email as string,
      nome: payload.nome as string,
      role: payload.role as SessionPayload['role'],
      tenantId: (payload.tenantId as string | null) ?? null,
    }
  } catch {
    return null
  }
}

export const SESSION_MAX_AGE = MAX_AGE_SECONDS

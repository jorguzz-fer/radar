'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import * as bcrypt from 'bcryptjs'
import { prisma } from '@radar/database'
import { SESSION_COOKIE, sessionCookieOptions } from './cookie'
import { signSession } from './session'

// Hash de senha "dummy" para manter tempo de resposta constante quando
// o email não existe. Evita oracle de enumeração via timing attack.
const DUMMY_HASH = '$2a$12$C6UzMDM.H6dfI/f/IKxGhuI8gZbVu9KKQ9aaH3Q.X0aHGE3rN6dF.'

const GENERIC_ERROR = 'E-mail ou senha inválidos.'

export type LoginState = { error?: string }

export async function loginAction(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase()
  const password = String(formData.get('password') ?? '')

  if (!email || !password || password.length < 8) {
    return { error: GENERIC_ERROR }
  }
  if (email.length > 254 || password.length > 256) {
    return { error: GENERIC_ERROR }
  }

  const user = await prisma.usuario.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      nome: true,
      role: true,
      tenantId: true,
      passwordHash: true,
    },
  })

  const hashToCheck = user?.passwordHash ?? DUMMY_HASH
  const ok = await bcrypt.compare(password, hashToCheck)

  if (!user || !user.passwordHash || !ok) {
    return { error: GENERIC_ERROR }
  }

  await prisma.usuario.update({
    where: { id: user.id },
    data: { ultimoLogin: new Date() },
  })

  const token = await signSession({
    sub: user.id,
    email: user.email,
    nome: user.nome,
    role: user.role,
    tenantId: user.tenantId,
  })

  const store = await cookies()
  store.set(SESSION_COOKIE, token, sessionCookieOptions())

  redirect('/')
}

export async function logoutAction(): Promise<void> {
  const store = await cookies()
  store.delete(SESSION_COOKIE)
  redirect('/login')
}

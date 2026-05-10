import { SESSION_MAX_AGE } from './session'

export const SESSION_COOKIE = 'radar_session'

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/',
    maxAge: SESSION_MAX_AGE,
  }
}

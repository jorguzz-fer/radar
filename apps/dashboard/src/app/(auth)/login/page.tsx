'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react'

// PLACEHOLDER: este form ainda NÃO autentica.
// A submissão precisa ser ligada a uma server action ou endpoint da API
// (passar credenciais por POST com cookie httpOnly+secure+sameSite=strict
// na resposta, rate limit por IP/email, hash bcrypt/argon2 no banco).
// Não promover esta página em produção até que a auth real esteja conectada.

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('Autenticação ainda não implementada. Aguardando endpoint /auth/login.')
    setTimeout(() => setSubmitting(false), 600)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Entrar</h1>
        <p className="text-sm text-gray-500 mt-1">
          Acesse sua conta do RadarVet.
        </p>
      </div>

      {error && (
        <div className="mb-5 rounded-md bg-amber-50 ring-1 ring-amber-200 px-3 py-2.5 flex items-start gap-2 text-sm text-amber-800">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="voce@empresa.com.br"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <Link
              href="/recuperar-senha"
              className="text-xs text-brand-600 hover:text-brand-700 font-medium"
            >
              Esqueci minha senha
            </Link>
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              autoComplete="current-password"
              minLength={8}
              className="w-full px-3 py-2.5 pr-10 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <LogIn className="w-4 h-4" />
          {submitting ? 'Entrando...' : 'Entrar'}
        </button>
      </form>

      <p className="text-xs text-gray-400 text-center mt-6">
        Acesso restrito a clientes do RadarVet.
      </p>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

interface Props {
  personaId: string
  personaName: string
  /** Whether to ask for company-style fields (CNPJ, razão social) instead of CPF only. */
  isBusiness?: boolean
}

export function RegistrationForm({ personaId, personaName, isBusiness = false }: Props) {
  const [pending, setPending] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    // Placeholder: integrar com server action / API quando disponível.
    await new Promise((r) => setTimeout(r, 700))
    setPending(false)
    setDone(true)
  }

  if (done) {
    return (
      <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-orange-400" />
        <h3 className="mt-3 text-lg font-semibold text-white">
          Cadastro recebido!
        </h3>
        <p className="mt-1 text-sm text-zinc-300">
          Em breve nosso time entrará em contato para finalizar sua adesão como{' '}
          {personaName}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="persona" value={personaId} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome completo" name="nome" required autoComplete="name" />
        <Field
          label="E-mail"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Telefone / WhatsApp"
          name="telefone"
          type="tel"
          required
          placeholder="(11) 98000-0000"
          autoComplete="tel"
        />
        <Field
          label={isBusiness ? 'CNPJ' : 'CPF'}
          name={isBusiness ? 'cnpj' : 'cpf'}
          required
          placeholder={isBusiness ? '00.000.000/0000-00' : '000.000.000-00'}
        />
      </div>

      {isBusiness && (
        <Field
          label="Razão social / Nome fantasia"
          name="razaoSocial"
          required
        />
      )}

      <Field
        label="Cidade / Estado"
        name="cidadeEstado"
        required
        placeholder="Ex.: Carapicuíba / SP"
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-zinc-200">
          Conte um pouco sobre seu objetivo
        </label>
        <textarea
          name="objetivo"
          rows={3}
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          placeholder={`Por que você quer ser ${personaName} WOW+?`}
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-zinc-400">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-zinc-700 bg-zinc-900 accent-orange-500"
        />
        <span>
          Concordo com os termos de uso e a política de privacidade da WOW+.
        </span>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>Quero me cadastrar como {personaName}</>
        )}
      </button>
    </form>
  )
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

function Field({ label, name, ...rest }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-zinc-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...rest}
        className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
      />
    </div>
  )
}

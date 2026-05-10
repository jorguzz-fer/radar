'use client'

import { useState, useTransition } from 'react'
import { Check, X, AlertCircle } from 'lucide-react'
import { aprovarPautaAction, rejeitarPautaAction } from './actions'

interface ReviewActionsProps {
  pautaId: string
  status: 'SUGERIDA' | 'APROVADA' | 'REJEITADA' | 'EM_PRODUCAO' | 'PUBLICADA'
  canModerate: boolean
}

export function ReviewActions({ pautaId, status, canModerate }: ReviewActionsProps) {
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [motivoOpen, setMotivoOpen] = useState(false)
  const [motivo, setMotivo] = useState('')

  if (!canModerate) {
    return (
      <p className="text-sm text-gray-500">
        Você não tem permissão para aprovar ou rejeitar pautas.
      </p>
    )
  }

  const terminal = status === 'PUBLICADA' || status === 'REJEITADA'

  function aprovar() {
    setError(null)
    startTransition(async () => {
      const res = await aprovarPautaAction(pautaId)
      if (!res.ok) setError(res.error)
    })
  }

  function confirmRejeitar() {
    setError(null)
    startTransition(async () => {
      const res = await rejeitarPautaAction(pautaId, motivo)
      if (!res.ok) {
        setError(res.error)
      } else {
        setMotivoOpen(false)
        setMotivo('')
      }
    })
  }

  return (
    <div className="space-y-3">
      {error && (
        <div
          role="alert"
          className="rounded-md bg-rose-50 ring-1 ring-rose-200 px-3 py-2 flex items-start gap-2 text-sm text-rose-800"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {terminal ? (
        <p className="text-sm text-gray-500">
          Pauta em estado terminal ({status}). Nenhuma ação disponível.
        </p>
      ) : motivoOpen ? (
        <div className="space-y-2">
          <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">
            Motivo da rejeição
          </label>
          <textarea
            id="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            rows={3}
            minLength={5}
            maxLength={500}
            disabled={pending}
            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            placeholder="Explique por que esta pauta foi rejeitada..."
          />
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => {
                setMotivoOpen(false)
                setMotivo('')
                setError(null)
              }}
              disabled={pending}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={confirmRejeitar}
              disabled={pending || motivo.trim().length < 5}
              className="px-3 py-2 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-md disabled:opacity-50"
            >
              {pending ? 'Rejeitando...' : 'Confirmar rejeição'}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={aprovar}
            disabled={pending}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md disabled:opacity-50"
          >
            <Check className="w-4 h-4" />
            {pending ? 'Aprovando...' : 'Aprovar pauta'}
          </button>
          <button
            type="button"
            onClick={() => setMotivoOpen(true)}
            disabled={pending}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-rose-700 bg-white border border-rose-200 hover:bg-rose-50 rounded-md disabled:opacity-50"
          >
            <X className="w-4 h-4" />
            Rejeitar
          </button>
        </div>
      )}
    </div>
  )
}

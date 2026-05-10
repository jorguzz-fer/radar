'use client'

import { useActionState, useState } from 'react'
import Link from 'next/link'
import { AlertCircle, Plus, Trash2 } from 'lucide-react'
import { createTenantAction, type CreateTenantState } from './actions'

type Pilar = { nome: string; pesoPct: number; descricao: string }

const emptyPilar: Pilar = { nome: '', pesoPct: 0, descricao: '' }
const initialState: CreateTenantState = {}

function fieldError(state: CreateTenantState, key: string): string | undefined {
  return state.fieldErrors?.[key]
}

export function NovoClienteForm() {
  const [state, formAction, pending] = useActionState(createTenantAction, initialState)
  const [pilares, setPilares] = useState<Pilar[]>([{ ...emptyPilar }])

  const soma = pilares.reduce((acc, p) => acc + (Number.isFinite(p.pesoPct) ? p.pesoPct : 0), 0)
  const somaOk = soma === 100

  function updatePilar(i: number, patch: Partial<Pilar>) {
    setPilares((prev) => prev.map((p, idx) => (idx === i ? { ...p, ...patch } : p)))
  }
  function addPilar() {
    if (pilares.length < 20) setPilares((prev) => [...prev, { ...emptyPilar }])
  }
  function removePilar(i: number) {
    setPilares((prev) => (prev.length === 1 ? prev : prev.filter((_, idx) => idx !== i)))
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div
          role="alert"
          className="rounded-md bg-rose-50 ring-1 ring-rose-200 px-3 py-2.5 flex items-start gap-2 text-sm text-rose-800"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{state.error}</span>
        </div>
      )}

      <input type="hidden" name="pilares" value={JSON.stringify(pilares)} />

      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <h2 className="font-semibold text-gray-900">Dados do cliente</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1.5">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              maxLength={100}
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              placeholder="Alchemypet"
            />
            {fieldError(state, 'nome') && (
              <p className="text-xs text-rose-600 mt-1">{fieldError(state, 'nome')}</p>
            )}
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1.5">
              Slug
            </label>
            <input
              id="slug"
              name="slug"
              type="text"
              required
              maxLength={60}
              pattern="[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              placeholder="alchemypet"
            />
            {fieldError(state, 'slug') && (
              <p className="text-xs text-rose-600 mt-1">{fieldError(state, 'slug')}</p>
            )}
          </div>

          <div>
            <label htmlFor="vertical" className="block text-sm font-medium text-gray-700 mb-1.5">
              Vertical
            </label>
            <input
              id="vertical"
              name="vertical"
              type="text"
              required
              maxLength={30}
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              placeholder="vet"
            />
            {fieldError(state, 'vertical') && (
              <p className="text-xs text-rose-600 mt-1">{fieldError(state, 'vertical')}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="vocabPackId"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Vocab pack ID
            </label>
            <input
              id="vocabPackId"
              name="vocabPackId"
              type="text"
              required
              defaultValue="vet"
              maxLength={30}
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            {fieldError(state, 'vocabPackId') && (
              <p className="text-xs text-rose-600 mt-1">{fieldError(state, 'vocabPackId')}</p>
            )}
          </div>

          <div>
            <label htmlFor="plano" className="block text-sm font-medium text-gray-700 mb-1.5">
              Plano
            </label>
            <select
              id="plano"
              name="plano"
              defaultValue="piloto"
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            >
              <option value="piloto">Piloto</option>
              <option value="starter">Starter</option>
              <option value="pro">Pro</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1.5">
              Status
            </label>
            <select
              id="status"
              name="status"
              defaultValue="ATIVO"
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            >
              <option value="ATIVO">Ativo</option>
              <option value="TRIAL">Trial</option>
              <option value="INATIVO">Inativo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-semibold text-gray-900">Pilares editoriais</h2>
            <p className="text-sm text-gray-500 mt-0.5">Pesos devem somar 100%.</p>
          </div>
          <div
            className={`text-sm font-medium ${
              somaOk ? 'text-emerald-600' : 'text-rose-600'
            }`}
          >
            Soma: {soma}%
          </div>
        </div>

        {fieldError(state, 'pilares') && (
          <p className="text-sm text-rose-600">{fieldError(state, 'pilares')}</p>
        )}

        <div className="space-y-3">
          {pilares.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-3 items-start border border-gray-100 rounded-md p-3"
            >
              <div className="col-span-12 md:col-span-4">
                <label className="block text-xs text-gray-500 mb-1">Nome do pilar</label>
                <input
                  type="text"
                  value={p.nome}
                  onChange={(e) => updatePilar(i, { nome: e.target.value })}
                  maxLength={80}
                  className="w-full px-2.5 py-1.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="Educação Técnica"
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <label className="block text-xs text-gray-500 mb-1">Peso (%)</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  step={1}
                  value={p.pesoPct}
                  onChange={(e) =>
                    updatePilar(i, { pesoPct: Math.max(0, Math.min(100, Number(e.target.value))) })
                  }
                  className="w-full px-2.5 py-1.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
              <div className="col-span-7 md:col-span-5">
                <label className="block text-xs text-gray-500 mb-1">Descrição</label>
                <input
                  type="text"
                  value={p.descricao}
                  onChange={(e) => updatePilar(i, { descricao: e.target.value })}
                  maxLength={300}
                  className="w-full px-2.5 py-1.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="Conteúdo técnico-educativo..."
                />
              </div>
              <div className="col-span-1 flex items-end justify-end pt-5">
                <button
                  type="button"
                  onClick={() => removePilar(i)}
                  disabled={pilares.length === 1}
                  className="text-gray-400 hover:text-rose-600 p-1 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Remover pilar"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addPilar}
          disabled={pilares.length >= 20}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 disabled:opacity-50"
        >
          <Plus className="w-4 h-4" />
          Adicionar pilar
        </button>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Link
          href="/clientes"
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
        >
          Cancelar
        </Link>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? 'Criando...' : 'Criar cliente'}
        </button>
      </div>
    </form>
  )
}

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { requireSession } from '@/lib/auth/requireSession'
import { getPautaById } from '@/lib/data/pautas'
import { ReviewActions } from './ReviewActions'

const statusLabel = {
  SUGERIDA: 'Sugerida',
  APROVADA: 'Aprovada',
  REJEITADA: 'Rejeitada',
  EM_PRODUCAO: 'Em produção',
  PUBLICADA: 'Publicada',
} as const

const statusBadge = {
  SUGERIDA: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  APROVADA: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  REJEITADA: 'bg-rose-50 text-rose-700 ring-rose-600/20',
  EM_PRODUCAO: 'bg-brand-50 text-brand-700 ring-brand-600/20',
  PUBLICADA: 'bg-violet-50 text-violet-700 ring-violet-600/20',
} as const

const APPROVER_ROLES = new Set(['ADMIN_PLATFORM', 'ADMIN_TENANT', 'EDITOR'])

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function PautaDetailPage({ params }: PageProps) {
  const { id } = await params
  const session = await requireSession()
  const pauta = await getPautaById(session, id)

  // notFound (404) em vez de 403 para não vazar existência de pautas
  // de outros tenants para usuários não-admin.
  if (!pauta) notFound()

  const canModerate = APPROVER_ROLES.has(session.role)

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/pautas"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para pautas
        </Link>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{pauta.titulo}</h1>
            <p className="text-sm text-gray-500 mt-1">
              {pauta.tenant.nome} · Semana {pauta.semanaRef} ·{' '}
              {pauta.criadoEm.toLocaleDateString('pt-BR')}
            </p>
          </div>
          <span
            className={`inline-flex items-center rounded-md px-2.5 py-1 text-sm font-medium ring-1 ring-inset ${statusBadge[pauta.status]}`}
          >
            {statusLabel[pauta.status]}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-2">Resumo</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
              {pauta.resumo}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-2">Ângulo sugerido</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
              {pauta.anguloSugerido}
            </p>
          </div>

          {pauta.status === 'REJEITADA' && pauta.rejeitadoMotivo && (
            <div className="bg-rose-50 ring-1 ring-rose-200 rounded-xl p-5">
              <h2 className="font-semibold text-rose-900 mb-2">Motivo da rejeição</h2>
              <p className="text-sm text-rose-800 whitespace-pre-wrap leading-relaxed">
                {pauta.rejeitadoMotivo}
              </p>
            </div>
          )}

          {pauta.status === 'APROVADA' && pauta.aprovadoPor && (
            <div className="bg-emerald-50 ring-1 ring-emerald-200 rounded-xl p-5">
              <p className="text-sm text-emerald-900">
                Aprovada por <strong>{pauta.aprovadoPor}</strong>
                {pauta.aprovadoEm && (
                  <> em {pauta.aprovadoEm.toLocaleString('pt-BR')}</>
                )}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
            <h2 className="font-semibold text-gray-900">Metadados</h2>
            <dl className="text-sm space-y-2">
              <div>
                <dt className="text-gray-500">Pilar sugerido</dt>
                <dd className="text-gray-900">{pauta.pilarSugerido}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Fonte original</dt>
                <dd className="text-gray-900 break-all">{pauta.fonteOriginal}</dd>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100">
                <div>
                  <dt className="text-gray-500 text-xs">Novidade</dt>
                  <dd className="font-semibold text-gray-900">
                    {pauta.scoreNovidade.toFixed(2)}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs">Relevância</dt>
                  <dd className="font-semibold text-gray-900">
                    {pauta.scoreRelevancia.toFixed(2)}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs">Final</dt>
                  <dd className="font-semibold text-brand-700">
                    {pauta.scoreFinal.toFixed(2)}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-3">Ações</h2>
            <ReviewActions
              pautaId={pauta.id}
              status={pauta.status}
              canModerate={canModerate}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

type PautaStatus = 'SUGERIDA' | 'APROVADA' | 'REJEITADA' | 'EM_PRODUCAO' | 'PUBLICADA'

type Pauta = {
  id: string
  titulo: string
  cliente: string
  fonte: string
  status: PautaStatus
}

const statusLabel: Record<PautaStatus, string> = {
  SUGERIDA: 'Sugerida',
  APROVADA: 'Aprovada',
  REJEITADA: 'Rejeitada',
  EM_PRODUCAO: 'Em produção',
  PUBLICADA: 'Publicada',
}

const statusBadge: Record<PautaStatus, string> = {
  SUGERIDA: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  APROVADA: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  REJEITADA: 'bg-rose-50 text-rose-700 ring-rose-600/20',
  EM_PRODUCAO: 'bg-brand-50 text-brand-700 ring-brand-600/20',
  PUBLICADA: 'bg-violet-50 text-violet-700 ring-violet-600/20',
}

interface RecentPautasProps {
  pautas?: Pauta[]
}

export function RecentPautas({ pautas = [] }: RecentPautasProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Pautas recentes</h3>
        <Link href="/pautas" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
          Ver todas
        </Link>
      </div>

      {pautas.length === 0 ? (
        <div className="px-5 py-12 text-center text-gray-400">
          <p>Nenhuma pauta gerada ainda.</p>
          <p className="text-sm mt-1 text-gray-300">Aguardando Sprint 1 — Coleta MVP.</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {pautas.map((p) => (
            <li
              key={p.id}
              className="px-5 py-3 flex items-center justify-between gap-3 hover:bg-gray-50"
            >
              <div className="min-w-0">
                <p className="font-medium text-gray-900 truncate">{p.titulo}</p>
                <p className="text-sm text-gray-500 truncate">
                  {p.cliente} · {p.fonte}
                </p>
              </div>
              <span
                className={`shrink-0 inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${statusBadge[p.status]}`}
              >
                {statusLabel[p.status]}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

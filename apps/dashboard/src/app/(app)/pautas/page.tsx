'use client'

import { DataTable, type Column } from '@/components/dashboard/DataTable'

type PautaStatus = 'aprovada' | 'pendente' | 'em_revisao' | 'rejeitada'

type Pauta = {
  id: string
  titulo: string
  cliente: string
  fonte: string
  data: string
  status: PautaStatus
}

const statusLabel: Record<PautaStatus, string> = {
  aprovada: 'Aprovada',
  pendente: 'Pendente',
  em_revisao: 'Em revisão',
  rejeitada: 'Rejeitada',
}

const statusBadge: Record<PautaStatus, string> = {
  aprovada: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  pendente: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  em_revisao: 'bg-brand-50 text-brand-700 ring-brand-600/20',
  rejeitada: 'bg-rose-50 text-rose-700 ring-rose-600/20',
}

const mockPautas: Pauta[] = []

const columns: Column<Pauta>[] = [
  { key: 'titulo', header: 'Título', sortable: true },
  { key: 'cliente', header: 'Cliente', sortable: true },
  { key: 'fonte', header: 'Fonte', sortable: true },
  { key: 'data', header: 'Data', sortable: true },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: (row) => (
      <span
        className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${statusBadge[row.status]}`}
      >
        {statusLabel[row.status]}
      </span>
    ),
  },
]

export default function PautasPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pautas</h1>
        <p className="text-gray-500 text-sm mt-0.5">
          Revise e aprove as pautas geradas para cada cliente.
        </p>
      </div>

      <DataTable
        data={mockPautas}
        columns={columns}
        searchKeys={['titulo', 'cliente', 'fonte']}
        pageSize={10}
        emptyMessage="Nenhuma pauta disponível ainda. Aguardando Sprint 1 — Coleta MVP."
      />
    </div>
  )
}

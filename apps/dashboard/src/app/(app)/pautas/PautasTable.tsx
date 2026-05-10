'use client'

import { DataTable, type Column } from '@/components/dashboard/DataTable'
import type { PautaRow } from '@/lib/data/pautas'

const statusLabel: Record<PautaRow['status'], string> = {
  SUGERIDA: 'Sugerida',
  APROVADA: 'Aprovada',
  REJEITADA: 'Rejeitada',
  EM_PRODUCAO: 'Em produção',
  PUBLICADA: 'Publicada',
}

const statusBadge: Record<PautaRow['status'], string> = {
  SUGERIDA: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  APROVADA: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  REJEITADA: 'bg-rose-50 text-rose-700 ring-rose-600/20',
  EM_PRODUCAO: 'bg-brand-50 text-brand-700 ring-brand-600/20',
  PUBLICADA: 'bg-violet-50 text-violet-700 ring-violet-600/20',
}

type Row = {
  id: string
  titulo: string
  clienteNome: string
  fonteOriginal: string
  semanaRef: string
  status: PautaRow['status']
  data: string
}

const columns: Column<Row>[] = [
  { key: 'titulo', header: 'Título', sortable: true },
  { key: 'clienteNome', header: 'Cliente', sortable: true },
  { key: 'fonteOriginal', header: 'Fonte', sortable: true },
  { key: 'semanaRef', header: 'Semana', sortable: true },
  { key: 'data', header: 'Criada em', sortable: true },
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

interface PautasTableProps {
  pautas: PautaRow[]
}

export function PautasTable({ pautas }: PautasTableProps) {
  const rows: Row[] = pautas.map((p) => ({
    id: p.id,
    titulo: p.titulo,
    clienteNome: p.clienteNome,
    fonteOriginal: p.fonteOriginal,
    semanaRef: p.semanaRef,
    status: p.status,
    data: p.criadoEm.toLocaleDateString('pt-BR'),
  }))

  return (
    <DataTable
      data={rows}
      columns={columns}
      searchKeys={['titulo', 'clienteNome', 'fonteOriginal']}
      pageSize={20}
      emptyMessage="Nenhuma pauta gerada ainda. Aguardando Sprint 1 — Coleta MVP."
    />
  )
}

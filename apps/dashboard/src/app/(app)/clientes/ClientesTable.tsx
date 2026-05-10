'use client'

import { DataTable, type Column } from '@/components/dashboard/DataTable'
import type { ClienteRow } from '@/lib/data/clientes'

const statusLabel: Record<ClienteRow['status'], string> = {
  ATIVO: 'Ativo',
  TRIAL: 'Trial',
  INATIVO: 'Inativo',
}

const statusBadge: Record<ClienteRow['status'], string> = {
  ATIVO: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  TRIAL: 'bg-brand-50 text-brand-700 ring-brand-600/20',
  INATIVO: 'bg-gray-100 text-gray-600 ring-gray-500/20',
}

type Row = {
  id: string
  slug: string
  nome: string
  vertical: string
  plano: string
  status: ClienteRow['status']
  criadoEm: string
}

const columns: Column<Row>[] = [
  { key: 'nome', header: 'Nome', sortable: true },
  {
    key: 'slug',
    header: 'Slug',
    render: (row) => <code className="text-xs text-gray-500">{row.slug}</code>,
  },
  { key: 'vertical', header: 'Vertical', sortable: true },
  { key: 'plano', header: 'Plano', sortable: true },
  { key: 'criadoEm', header: 'Criado em', sortable: true },
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

interface ClientesTableProps {
  clientes: ClienteRow[]
}

export function ClientesTable({ clientes }: ClientesTableProps) {
  const rows: Row[] = clientes.map((c) => ({
    id: c.id,
    slug: c.slug,
    nome: c.nome,
    vertical: c.vertical,
    plano: c.plano,
    status: c.status,
    criadoEm: c.criadoEm.toLocaleDateString('pt-BR'),
  }))

  return (
    <DataTable
      data={rows}
      columns={columns}
      searchKeys={['nome', 'slug', 'vertical']}
      pageSize={20}
      emptyMessage="Nenhum cliente cadastrado. Rode pnpm db:seed para popular o Alchemypet."
    />
  )
}

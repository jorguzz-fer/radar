'use client'

import { DataTable, type Column } from '@/components/dashboard/DataTable'

type ClienteStatus = 'ATIVO' | 'TRIAL' | 'INATIVO'

type Cliente = {
  id: string
  slug: string
  nome: string
  vertical: string
  plano: string
  status: ClienteStatus
  criadoEm: string
}

const statusLabel: Record<ClienteStatus, string> = {
  ATIVO: 'Ativo',
  TRIAL: 'Trial',
  INATIVO: 'Inativo',
}

const statusBadge: Record<ClienteStatus, string> = {
  ATIVO: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  TRIAL: 'bg-brand-50 text-brand-700 ring-brand-600/20',
  INATIVO: 'bg-gray-100 text-gray-600 ring-gray-500/20',
}

const mockClientes: Cliente[] = []

const columns: Column<Cliente>[] = [
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

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
        <p className="text-gray-500 text-sm mt-0.5">Tenants ativos na plataforma.</p>
      </div>

      <DataTable
        data={mockClientes}
        columns={columns}
        searchKeys={['nome', 'slug', 'vertical']}
        pageSize={10}
        emptyMessage="Nenhum cliente cadastrado. Execute pnpm db:seed para popular o Alchemypet."
      />
    </div>
  )
}

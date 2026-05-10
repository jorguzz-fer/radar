import Link from 'next/link'
import { Plus } from 'lucide-react'
import { requirePlatformAdmin } from '@/lib/auth/requireSession'
import { listClientes } from '@/lib/data/clientes'
import { ClientesTable } from './ClientesTable'

export default async function ClientesPage() {
  const session = await requirePlatformAdmin()
  const clientes = await listClientes(session)

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
          <p className="text-gray-500 text-sm mt-0.5">Tenants ativos na plataforma.</p>
        </div>
        <Link
          href="/clientes/novo"
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Novo cliente
        </Link>
      </div>

      <ClientesTable clientes={clientes} />
    </div>
  )
}

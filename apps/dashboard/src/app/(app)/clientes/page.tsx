import { requirePlatformAdmin } from '@/lib/auth/requireSession'
import { listClientes } from '@/lib/data/clientes'
import { ClientesTable } from './ClientesTable'

export default async function ClientesPage() {
  const session = await requirePlatformAdmin()
  const clientes = await listClientes(session)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
        <p className="text-gray-500 text-sm mt-0.5">Tenants ativos na plataforma.</p>
      </div>

      <ClientesTable clientes={clientes} />
    </div>
  )
}

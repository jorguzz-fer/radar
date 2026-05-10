import { requireSession } from '@/lib/auth/requireSession'
import { listPautas } from '@/lib/data/pautas'
import { PautasTable } from './PautasTable'

export default async function PautasPage() {
  const session = await requireSession()
  const pautas = await listPautas(session)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pautas</h1>
        <p className="text-gray-500 text-sm mt-0.5">
          Revise e aprove as pautas geradas para cada cliente.
        </p>
      </div>

      <PautasTable pautas={pautas} />
    </div>
  )
}

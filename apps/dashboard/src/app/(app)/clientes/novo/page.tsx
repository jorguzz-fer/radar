import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { requirePlatformAdmin } from '@/lib/auth/requireSession'
import { NovoClienteForm } from './NovoClienteForm'

export default async function NovoClientePage() {
  await requirePlatformAdmin()

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/clientes"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para clientes
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Novo cliente</h1>
        <p className="text-gray-500 text-sm mt-0.5">
          Cadastre um tenant + seus pilares editoriais.
        </p>
      </div>

      <NovoClienteForm />
    </div>
  )
}

export default function ClientesPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Clientes</h2>
        <p className="text-gray-500 text-sm mt-1">Tenants ativos na plataforma.</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
        <p className="text-gray-400">Nenhum cliente cadastrado ainda.</p>
        <p className="text-gray-300 text-sm mt-2">
          Execute o seed: <code className="bg-gray-100 px-1 rounded">pnpm db:seed</code>
        </p>
      </div>
    </div>
  )
}

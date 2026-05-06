export default function PautasPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Pautas da Semana</h2>
        <p className="text-gray-500 text-sm mt-1">
          Revise e aprove as pautas geradas para cada cliente.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
        <p className="text-gray-400">Nenhuma pauta disponível ainda.</p>
        <p className="text-gray-300 text-sm mt-2">
          Aguardando Sprint 1 — Coleta MVP.
        </p>
      </div>
    </div>
  )
}

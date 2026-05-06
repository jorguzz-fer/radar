export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
      <div>
        <h1 className="text-4xl font-bold text-brand-900 mb-2">RadarVet</h1>
        <p className="text-gray-500 text-lg">
          Inteligência editorial para o setor veterinário
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 w-full max-w-2xl">
        <StatusCard label="Pautas esta semana" value="—" />
        <StatusCard label="Clientes ativos" value="—" />
        <StatusCard label="Fontes monitoradas" value="—" />
      </div>

      <p className="text-gray-400 text-sm mt-8">
        Sprint 0 — Setup concluído. Aguardando dados da coleta.
      </p>
    </div>
  )
}

function StatusCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
      <p className="text-3xl font-bold text-brand-600">{value}</p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </div>
  )
}

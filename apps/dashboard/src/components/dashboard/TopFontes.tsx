type Fonte = {
  nome: string
  pautas: number
  qualidade: number
}

interface TopFontesProps {
  fontes?: Fonte[]
}

export function TopFontes({ fontes = [] }: TopFontesProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="px-5 py-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Top fontes monitoradas</h3>
        <p className="text-sm text-gray-500 mt-0.5">Por volume + qualidade</p>
      </div>

      {fontes.length === 0 ? (
        <div className="px-5 py-12 text-center text-gray-400">
          <p>Nenhuma fonte ativa ainda.</p>
          <p className="text-sm mt-1 text-gray-300">Configure no onboarding do tenant.</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {fontes.map((f) => (
            <li key={f.nome} className="px-5 py-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-gray-900 text-sm">{f.nome}</span>
                <span className="text-sm text-gray-500">{f.pautas} pautas</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-500 rounded-full"
                  style={{ width: `${Math.min(100, Math.max(0, f.qualidade))}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

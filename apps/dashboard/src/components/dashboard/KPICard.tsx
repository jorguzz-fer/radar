import type { LucideIcon } from 'lucide-react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

interface KPICardProps {
  label: string
  value: string | number
  icon: LucideIcon
  iconBg?: string
  iconColor?: string
  delta?: { value: string; positive: boolean }
  hint?: string
}

export function KPICard({
  label,
  value,
  icon: Icon,
  iconBg = 'bg-brand-100',
  iconColor = 'text-brand-700',
  delta,
  hint,
}: KPICardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-500 text-sm">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${iconBg}`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      </div>
      {delta && (
        <div className="flex items-center gap-1.5 text-sm">
          <span
            className={`inline-flex items-center gap-0.5 font-medium ${
              delta.positive ? 'text-emerald-600' : 'text-rose-600'
            }`}
          >
            {delta.positive ? (
              <ArrowUpRight className="w-3.5 h-3.5" />
            ) : (
              <ArrowDownRight className="w-3.5 h-3.5" />
            )}
            {delta.value}
          </span>
          {hint && <span className="text-gray-400">{hint}</span>}
        </div>
      )}
      {!delta && hint && <p className="text-gray-400 text-sm">{hint}</p>}
    </div>
  )
}

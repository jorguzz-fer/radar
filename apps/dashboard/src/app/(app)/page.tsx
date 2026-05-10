import { Newspaper, CheckCircle2, Users, DollarSign } from 'lucide-react'
import { KPICard } from '@/components/dashboard/KPICard'
import { RecentPautas } from '@/components/dashboard/RecentPautas'
import { TopFontes } from '@/components/dashboard/TopFontes'

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-0.5">
          Visão geral da operação editorial — Sprint 0 (placeholder).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Pautas esta semana"
          value="—"
          icon={Newspaper}
          hint="Aguardando Sprint 1"
        />
        <KPICard
          label="Pautas aprovadas"
          value="—"
          icon={CheckCircle2}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-700"
          hint="Aguardando Sprint 4"
        />
        <KPICard
          label="Clientes ativos"
          value="—"
          icon={Users}
          iconBg="bg-amber-100"
          iconColor="text-amber-700"
          hint="Rode pnpm db:seed"
        />
        <KPICard
          label="Custo Claude (mês)"
          value="—"
          icon={DollarSign}
          iconBg="bg-rose-100"
          iconColor="text-rose-700"
          hint="Aguardando Sprint 2"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentPautas />
        </div>
        <div>
          <TopFontes />
        </div>
      </div>
    </div>
  )
}

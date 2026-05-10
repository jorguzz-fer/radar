import { Newspaper, CheckCircle2, Users, DollarSign } from 'lucide-react'
import { KPICard } from '@/components/dashboard/KPICard'
import { RecentPautas } from '@/components/dashboard/RecentPautas'
import { TopFontes } from '@/components/dashboard/TopFontes'
import { PautasSemanalChart } from '@/components/dashboard/PautasSemanalChart'
import { PautasStatusChart } from '@/components/dashboard/PautasStatusChart'
import { requireSession } from '@/lib/auth/requireSession'
import { getDashboardKPIs } from '@/lib/data/dashboard'
import {
  listRecentPautas,
  listTopFontes,
  getPautasPorSemana,
  getPautasPorStatus,
} from '@/lib/data/pautas'

export default async function HomePage() {
  const session = await requireSession()
  const [kpis, recentes, topFontes, porSemana, porStatus] = await Promise.all([
    getDashboardKPIs(session),
    listRecentPautas(session),
    listTopFontes(session),
    getPautasPorSemana(session),
    getPautasPorStatus(session),
  ])

  const isPlatformAdmin = session.role === 'ADMIN_PLATFORM'

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-0.5">
          Bem-vindo, {session.nome.split(' ')[0]}. Visão geral da operação editorial.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Pautas esta semana"
          value={kpis.pautasSemana}
          icon={Newspaper}
          hint={kpis.pautasSemana === 0 ? 'Aguardando coleta' : 'Semana corrente'}
        />
        <KPICard
          label="Pautas aprovadas"
          value={kpis.pautasAprovadas}
          icon={CheckCircle2}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-700"
          hint="Total acumulado"
        />
        {isPlatformAdmin && (
          <KPICard
            label="Clientes ativos"
            value={kpis.clientesAtivos ?? '—'}
            icon={Users}
            iconBg="bg-amber-100"
            iconColor="text-amber-700"
            hint="Tenants com status ATIVO"
          />
        )}
        <KPICard
          label="Custo Claude (mês)"
          value={kpis.custoClaudeMes}
          icon={DollarSign}
          iconBg="bg-rose-100"
          iconColor="text-rose-700"
          hint="Aguardando Sprint 2"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PautasSemanalChart data={porSemana} />
        </div>
        <div>
          <PautasStatusChart data={porStatus} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentPautas pautas={recentes} />
        </div>
        <div>
          <TopFontes fontes={topFontes} />
        </div>
      </div>
    </div>
  )
}

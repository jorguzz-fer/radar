'use client'

import type { ApexOptions } from 'apexcharts'
import { Chart } from './Chart'

type StatusKey = 'SUGERIDA' | 'APROVADA' | 'REJEITADA' | 'EM_PRODUCAO' | 'PUBLICADA'

const ORDER: StatusKey[] = ['SUGERIDA', 'APROVADA', 'EM_PRODUCAO', 'PUBLICADA', 'REJEITADA']

const LABEL: Record<StatusKey, string> = {
  SUGERIDA: 'Sugerida',
  APROVADA: 'Aprovada',
  REJEITADA: 'Rejeitada',
  EM_PRODUCAO: 'Em produção',
  PUBLICADA: 'Publicada',
}

// Cores alinhadas aos badges (amber/emerald/brand/violet/rose)
const COLOR: Record<StatusKey, string> = {
  SUGERIDA: '#f59e0b',
  APROVADA: '#10b981',
  REJEITADA: '#f43f5e',
  EM_PRODUCAO: '#0284c7',
  PUBLICADA: '#8b5cf6',
}

interface PautasStatusChartProps {
  data: { status: StatusKey; count: number }[]
}

export function PautasStatusChart({ data }: PautasStatusChartProps) {
  const byStatus = new Map(data.map((d) => [d.status, d.count]))
  const labels = ORDER.map((s) => LABEL[s])
  const series = ORDER.map((s) => byStatus.get(s) ?? 0)
  const colors = ORDER.map((s) => COLOR[s])
  const total = series.reduce((a, b) => a + b, 0)

  const options: ApexOptions = {
    chart: { fontFamily: 'inherit' },
    labels,
    colors,
    legend: {
      position: 'bottom',
      fontSize: '12px',
      itemMargin: { horizontal: 6, vertical: 2 },
    },
    dataLabels: { enabled: false },
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              color: '#6b7280',
              formatter: () => String(total),
            },
            value: { color: '#111827', fontSize: '24px', fontWeight: 700 },
          },
        },
      },
    },
    tooltip: { y: { formatter: (v) => `${v} pautas` } },
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="mb-3">
        <h3 className="font-semibold text-gray-900">Distribuição por status</h3>
        <p className="text-sm text-gray-500 mt-0.5">Pautas no funil</p>
      </div>
      {total === 0 ? (
        <div className="h-[280px] flex items-center justify-center text-gray-400 text-sm">
          Sem pautas registradas.
        </div>
      ) : (
        <Chart type="donut" series={series} options={options} height={280} />
      )}
    </div>
  )
}

'use client'

import type { ApexOptions } from 'apexcharts'
import { Chart } from './Chart'

interface PautasSemanalChartProps {
  data: { semanaRef: string; count: number }[]
}

export function PautasSemanalChart({ data }: PautasSemanalChartProps) {
  const series: ApexOptions['series'] = [
    {
      name: 'Pautas',
      data: data.map((d) => d.count),
    },
  ]

  const options: ApexOptions = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'inherit',
    },
    colors: ['#0284c7'],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    fill: {
      type: 'gradient',
      gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0, stops: [0, 90, 100] },
    },
    xaxis: {
      categories: data.map((d) => d.semanaRef),
      labels: { style: { colors: '#6b7280', fontSize: '11px' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: '#6b7280', fontSize: '11px' } },
      min: 0,
      forceNiceScale: true,
    },
    grid: { borderColor: '#f3f4f6', strokeDashArray: 4 },
    tooltip: { theme: 'light' },
  }

  const isEmpty = data.every((d) => d.count === 0)

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="mb-3">
        <h3 className="font-semibold text-gray-900">Pautas por semana</h3>
        <p className="text-sm text-gray-500 mt-0.5">Últimas 12 semanas</p>
      </div>
      {isEmpty ? (
        <div className="h-[280px] flex items-center justify-center text-gray-400 text-sm">
          Sem pautas no período.
        </div>
      ) : (
        <Chart type="area" series={series} options={options} height={280} />
      )}
    </div>
  )
}

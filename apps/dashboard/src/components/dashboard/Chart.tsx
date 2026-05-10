'use client'

import dynamic from 'next/dynamic'
import type { ApexOptions } from 'apexcharts'

// ApexCharts depende de window — só carrega no cliente.
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface ChartProps {
  type: 'line' | 'area' | 'bar' | 'donut'
  series: ApexOptions['series']
  options: ApexOptions
  height?: number | string
}

export function Chart({ type, series, options, height = 280 }: ChartProps) {
  return <ReactApexChart type={type} series={series} options={options} height={height} />
}

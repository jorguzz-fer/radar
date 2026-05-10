import type { Metadata } from 'next'
import { AppShell } from '@/components/layout/AppShell'
import './globals.css'

export const metadata: Metadata = {
  title: 'RadarVet — Inteligência Editorial',
  description: 'Plataforma de inteligência editorial para o setor veterinário',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="text-gray-900 antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}

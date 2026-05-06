import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RadarVet — Inteligência Editorial',
  description: 'Plataforma de inteligência editorial para o setor veterinário',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="bg-brand-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-tight">RadarVet</span>
              <span className="text-brand-100 text-sm font-medium">Inteligência Editorial</span>
            </div>
            <span className="text-brand-200 text-sm">Tudo Mudou</span>
          </header>

          <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full">{children}</main>

          <footer className="text-center text-gray-400 text-xs py-4">
            RadarVet · radar.tudomudou.com.br
          </footer>
        </div>
      </body>
    </html>
  )
}

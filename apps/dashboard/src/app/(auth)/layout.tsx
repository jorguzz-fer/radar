import Link from 'next/link'
import { Radar } from 'lucide-react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="px-6 py-5">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-900">
          <Radar className="w-6 h-6 text-brand-600" />
          <span className="font-bold text-lg tracking-tight">RadarVet</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">{children}</div>
      </main>

      <footer className="text-center text-gray-400 text-xs py-4">
        radar.tudomudou.com.br
      </footer>
    </div>
  )
}

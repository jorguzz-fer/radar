import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/cadastro" className="flex items-center gap-2 text-white">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-orange-500/15">
              <Heart className="h-4 w-4 fill-orange-500 text-orange-500" />
              <span className="absolute -right-1 -top-1 rounded-sm bg-orange-500 px-1 text-[10px] font-bold leading-none text-zinc-950">
                +
              </span>
            </span>
            <span className="text-lg font-bold tracking-tight">WOW+</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
            <Link href="/cadastro" className="hover:text-white">
              Personas
            </Link>
            <Link href="/cadastro/cliente" className="hover:text-white">
              Cliente
            </Link>
            <Link href="/cadastro/consultor" className="hover:text-white">
              Consultor
            </Link>
            <Link href="/cadastro/especialista" className="hover:text-white">
              Especialista
            </Link>
            <Link href="/cadastro/pdv" className="hover:text-white">
              PDV
            </Link>
          </nav>

          <Link
            href="/login"
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-200 transition-colors hover:border-orange-500 hover:text-orange-400"
          >
            Entrar
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-zinc-800/80 bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-zinc-500 sm:flex-row">
          <span>© WOW+ · Ecossistema de crescimento</span>
          <div className="flex gap-4">
            <Link href="/cadastro" className="hover:text-zinc-300">
              Cadastre-se
            </Link>
            <Link href="/login" className="hover:text-zinc-300">
              Já tenho conta
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

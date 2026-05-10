'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Radar, LayoutDashboard, Newspaper, Users, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/pautas', label: 'Pautas', icon: Newspaper },
  { href: '/clientes', label: 'Clientes', icon: Users },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-30 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-brand-900 text-white flex flex-col transition-transform lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-16 px-6 flex items-center justify-between border-b border-brand-700">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <Radar className="w-6 h-6 text-brand-200" />
            <span className="font-bold text-lg tracking-tight">RadarVet</span>
          </Link>
          <button
            type="button"
            className="lg:hidden text-brand-200 hover:text-white"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? 'bg-brand-700 text-white'
                        : 'text-brand-100 hover:bg-brand-700/60 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span>{label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="px-6 py-4 border-t border-brand-700 text-brand-200 text-xs">
          Tudo Mudou · v0.0.1
        </div>
      </aside>
    </>
  )
}

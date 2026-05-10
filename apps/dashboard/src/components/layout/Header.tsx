'use client'

import { useState, useRef, useEffect } from 'react'
import { Menu, LogOut, ChevronDown } from 'lucide-react'
import { logoutAction } from '@/lib/auth/actions'

export type HeaderUser = {
  nome: string
  email: string
  role: 'ADMIN_PLATFORM' | 'ADMIN_TENANT' | 'EDITOR' | 'VIEWER'
}

const roleLabel: Record<HeaderUser['role'], string> = {
  ADMIN_PLATFORM: 'Admin plataforma',
  ADMIN_TENANT: 'Admin do cliente',
  EDITOR: 'Editor',
  VIEWER: 'Leitor',
}

interface HeaderProps {
  onMenuClick: () => void
  user: HeaderUser
}

function initials(nome: string): string {
  const parts = nome.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function Header({ onMenuClick, user }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-4 lg:px-6 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="lg:hidden text-gray-500 hover:text-gray-700"
          onClick={onMenuClick}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        <span className="text-sm font-medium text-gray-500 hidden sm:inline">
          Inteligência Editorial Veterinária
        </span>
      </div>

      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 hover:bg-gray-50 rounded-md px-2 py-1.5 transition-colors"
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-sm font-semibold">
            {initials(user.nome)}
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-gray-900 leading-tight">{user.nome}</p>
            <p className="text-xs text-gray-500 leading-tight">{roleLabel[user.role]}</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
        </button>

        {open && (
          <div
            role="menu"
            className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black/5 py-1 z-30"
          >
            <div className="px-3 py-2 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900 truncate">{user.nome}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
            <form action={logoutAction}>
              <button
                type="submit"
                role="menuitem"
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-rose-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}

'use client'

import { Menu } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
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

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-sm font-semibold">
          FJ
        </div>
      </div>
    </header>
  )
}

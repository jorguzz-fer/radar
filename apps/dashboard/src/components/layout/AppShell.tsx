'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Header, type HeaderUser } from './Header'

interface AppShellProps {
  children: React.ReactNode
  user: HeaderUser
}

export function AppShell({ children, user }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <Header user={user} onMenuClick={() => setSidebarOpen(true)} />
        <main className="px-4 lg:px-8 py-6 max-w-7xl mx-auto w-full">{children}</main>
        <footer className="px-4 lg:px-8 py-4 text-center text-gray-400 text-xs">
          RadarVet · radar.tudomudou.com.br
        </footer>
      </div>
    </div>
  )
}

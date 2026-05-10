import { redirect } from 'next/navigation'
import { AppShell } from '@/components/layout/AppShell'
import { getSession } from '@/lib/auth/getSession'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  // Defesa em profundidade: o middleware já protege, mas se algum dia o matcher
  // for ajustado e deixar passar, o layout ainda redireciona.
  const session = await getSession()
  if (!session) redirect('/login')

  return (
    <AppShell user={{ nome: session.nome, email: session.email, role: session.role }}>
      {children}
    </AppShell>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { personas } from './personas'

export const metadata = {
  title: 'Cadastro WOW+ · Escolha sua persona',
  description:
    'Cadastre-se na WOW+ como Cliente, Consultor, Especialista ou PDV e participe do ecossistema.',
}

export default function CadastroHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
          Como a WOW+ cresce
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Escolha como você quer participar do{' '}
          <span className="text-orange-500">ecossistema WOW+</span>
        </h1>
        <p className="mt-5 text-base text-zinc-400 sm:text-lg">
          Nosso crescimento acontece através de personas estratégicas, cada uma com um
          papel claro e complementar. Selecione abaixo o seu perfil para iniciar o
          cadastro.
        </p>
      </section>

      <section className="mt-14 grid gap-5 sm:grid-cols-2">
        {personas.map((persona) => {
          const Icon = persona.icon
          return (
            <Link
              key={persona.id}
              href={`/cadastro/${persona.id}`}
              className="group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all hover:border-orange-500/60 hover:bg-zinc-900"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 transition-colors group-hover:bg-orange-500 group-hover:text-zinc-950">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-white">{persona.name}</h2>
                  <p className="mt-1 text-sm text-orange-400/90">{persona.role}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                {persona.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-orange-400 group-hover:text-orange-300">
                Quero ser {persona.name}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          )
        })}
      </section>

      <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center">
        <h2 className="text-lg font-semibold text-white">
          Parceiro Estratégico
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-400">
          Empresas e instituições que queiram operar em escala com a WOW+ devem entrar em
          contato com o time comercial para estruturar a parceria.
        </p>
        <Link
          href="mailto:parcerias@wowmais.com"
          className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 hover:border-orange-500 hover:text-orange-400"
        >
          Falar com o time comercial
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}

import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Sparkles,
  Users,
} from 'lucide-react'
import { getPersona, personas } from '../personas'
import { RegistrationForm } from './RegistrationForm'

interface PageProps {
  params: Promise<{ persona: string }>
}

export function generateStaticParams() {
  return personas.map((p) => ({ persona: p.id }))
}

export async function generateMetadata({ params }: PageProps) {
  const { persona: id } = await params
  const persona = getPersona(id)
  if (!persona) return {}
  return {
    title: `Seja ${persona.name} WOW+`,
    description: persona.description,
  }
}

export default async function PersonaLandingPage({ params }: PageProps) {
  const { persona: id } = await params
  const persona = getPersona(id)
  if (!persona) notFound()

  const Icon = persona.icon
  const isBusiness = persona.id === 'pdv'

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <Link
        href="/cadastro"
        className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-orange-400"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar para todas as personas
      </Link>

      {/* HERO */}
      <section className="mt-8 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
            <Icon className="h-3.5 w-3.5" />
            Persona {persona.name}
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {persona.headline}
          </h1>
          <p className="mt-5 text-base text-zinc-400 sm:text-lg">{persona.tagline}</p>
          <p className="mt-3 text-sm text-zinc-500">{persona.description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#cadastro"
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-orange-400"
            >
              Quero me cadastrar
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-orange-500 hover:text-orange-400"
            >
              Como funciona
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-0 rounded-3xl bg-orange-500/10 blur-2xl" />
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Papel no ecossistema
                </p>
                <p className="text-sm font-semibold text-white">{persona.role}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {persona.benefits.slice(0, 3).map((b) => (
                <li key={b.title} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                  <span className="text-zinc-300">
                    <strong className="font-medium text-white">{b.title}.</strong>{' '}
                    {b.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="mt-20">
        <SectionHeader
          eyebrow="Benefícios"
          title={`Por que ser ${persona.name} WOW+`}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {persona.benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5"
            >
              <Sparkles className="h-5 w-5 text-orange-400" />
              <h3 className="mt-3 text-sm font-semibold text-white">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="mt-20">
        <SectionHeader
          eyebrow="Como funciona"
          title={`Comece em ${persona.steps.length} passos`}
        />
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {persona.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-xl border border-zinc-800 bg-zinc-900/60 p-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-zinc-950">
                {i + 1}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-white">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* PARA QUEM É */}
      <section className="mt-20">
        <SectionHeader eyebrow="Para quem é" title={`O perfil ${persona.name}`} />
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <div className="flex items-center gap-3 text-orange-400">
            <Users className="h-5 w-5" />
            <p className="text-sm font-semibold">Indicado para</p>
          </div>
          <ul className="mt-4 space-y-2.5">
            {persona.audience.map((line) => (
              <li key={line} className="flex items-start gap-2 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CADASTRO */}
      <section id="cadastro" className="mt-20">
        <SectionHeader
          eyebrow="Cadastro"
          title={`Cadastre-se como ${persona.name}`}
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <RegistrationForm
              personaId={persona.id}
              personaName={persona.name}
              isBusiness={isBusiness}
            />
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
            <h3 className="text-base font-semibold text-white">
              O que acontece depois?
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex gap-2">
                <span className="font-semibold text-orange-400">1.</span>
                Recebemos seu cadastro e validamos as informações.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-orange-400">2.</span>
                Nosso time entra em contato pelo canal informado.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-orange-400">3.</span>
                Você recebe o acesso ao painel e o onboarding como {persona.name}.
              </li>
            </ol>
            <p className="mt-6 text-xs text-zinc-500">
              Dúvidas?{' '}
              <a
                className="text-orange-400 hover:text-orange-300"
                href="mailto:contato@wowmais.com"
              >
                contato@wowmais.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <SectionHeader eyebrow="Dúvidas frequentes" title="Perguntas comuns" />
        <div className="mt-8 divide-y divide-zinc-800 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
          {persona.faq.map((item) => (
            <details key={item.question} className="group p-5 open:bg-zinc-900">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                {item.question}
                <span className="text-orange-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* OUTRAS PERSONAS */}
      <section className="mt-20">
        <SectionHeader
          eyebrow="Outras personas"
          title="Talvez você se identifique com outro perfil"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {personas
            .filter((p) => p.id !== persona.id)
            .map((p) => {
              const POIcon = p.icon
              return (
                <Link
                  key={p.id}
                  href={`/cadastro/${p.id}`}
                  className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 hover:border-orange-500/60"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400 group-hover:bg-orange-500 group-hover:text-zinc-950">
                    <POIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{p.name}</p>
                    <p className="text-xs text-zinc-400">{p.role}</p>
                  </div>
                </Link>
              )
            })}
        </div>
      </section>
    </div>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
    </div>
  )
}


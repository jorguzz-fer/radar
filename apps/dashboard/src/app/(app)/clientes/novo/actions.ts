'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Prisma, prisma } from '@radar/database'
import { requirePlatformAdmin } from '@/lib/auth/requireSession'

export type PilarInput = {
  nome: string
  pesoPct: number
  descricao: string
}

export type CreateTenantState = {
  error?: string
  fieldErrors?: Record<string, string>
}

const SLUG_REGEX = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
const ALLOWED_PLANOS = new Set(['piloto', 'starter', 'pro', 'custom'])
const ALLOWED_STATUS = new Set(['ATIVO', 'TRIAL', 'INATIVO'])

export async function createTenantAction(
  _prev: CreateTenantState,
  formData: FormData
): Promise<CreateTenantState> {
  await requirePlatformAdmin()

  const nome = String(formData.get('nome') ?? '').trim()
  const slug = String(formData.get('slug') ?? '').trim().toLowerCase()
  const vertical = String(formData.get('vertical') ?? '').trim().toLowerCase()
  const vocabPackId = String(formData.get('vocabPackId') ?? '').trim().toLowerCase()
  const plano = String(formData.get('plano') ?? 'piloto').trim().toLowerCase()
  const status = String(formData.get('status') ?? 'ATIVO').trim().toUpperCase()
  const pilaresRaw = String(formData.get('pilares') ?? '[]')

  const fieldErrors: Record<string, string> = {}

  if (!nome || nome.length < 2 || nome.length > 100) {
    fieldErrors.nome = 'Nome entre 2 e 100 caracteres.'
  }
  if (!SLUG_REGEX.test(slug) || slug.length > 60) {
    fieldErrors.slug = 'Slug deve conter apenas letras minúsculas, números e hífen (sem hífen no início/fim).'
  }
  if (!vertical || vertical.length > 30) {
    fieldErrors.vertical = 'Vertical obrigatória (ex: vet, odonto, agro).'
  }
  if (!vocabPackId || vocabPackId.length > 30) {
    fieldErrors.vocabPackId = 'Vocab pack ID obrigatório.'
  }
  if (!ALLOWED_PLANOS.has(plano)) {
    fieldErrors.plano = 'Plano inválido.'
  }
  if (!ALLOWED_STATUS.has(status)) {
    fieldErrors.status = 'Status inválido.'
  }

  let pilares: PilarInput[] = []
  try {
    const parsed = JSON.parse(pilaresRaw)
    if (!Array.isArray(parsed)) throw new Error('not array')
    pilares = parsed
      .filter((p): p is PilarInput => typeof p === 'object' && p !== null)
      .map((p) => ({
        nome: String(p.nome ?? '').trim(),
        pesoPct: Number(p.pesoPct ?? 0),
        descricao: String(p.descricao ?? '').trim(),
      }))
      .filter((p) => p.nome.length > 0)
  } catch {
    fieldErrors.pilares = 'Formato dos pilares inválido.'
  }

  if (pilares.length === 0) {
    fieldErrors.pilares = 'Cadastre ao menos um pilar editorial.'
  } else if (pilares.length > 20) {
    fieldErrors.pilares = 'Máximo de 20 pilares.'
  } else {
    for (const p of pilares) {
      if (p.nome.length > 80) {
        fieldErrors.pilares = `Pilar "${p.nome.slice(0, 20)}…" excede 80 caracteres.`
        break
      }
      if (p.descricao.length > 300) {
        fieldErrors.pilares = `Descrição de "${p.nome}" excede 300 caracteres.`
        break
      }
      if (!Number.isInteger(p.pesoPct) || p.pesoPct < 0 || p.pesoPct > 100) {
        fieldErrors.pilares = `Peso de "${p.nome}" deve ser inteiro entre 0 e 100.`
        break
      }
    }
    if (!fieldErrors.pilares) {
      const soma = pilares.reduce((acc, p) => acc + p.pesoPct, 0)
      if (soma !== 100) {
        fieldErrors.pilares = `Pesos dos pilares devem somar 100 (atual: ${soma}).`
      }
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { error: 'Corrija os campos abaixo.', fieldErrors }
  }

  try {
    await prisma.tenant.create({
      data: {
        nome,
        slug,
        vertical,
        vocabPackId,
        plano,
        status: status as 'ATIVO' | 'TRIAL' | 'INATIVO',
        pilares: {
          create: pilares.map((p, i) => ({
            nome: p.nome,
            pesoPct: p.pesoPct,
            descricao: p.descricao || null,
            ordem: i + 1,
          })),
        },
      },
    })
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === 'P2002'
    ) {
      return { error: 'Slug já cadastrado.', fieldErrors: { slug: 'Esse slug já existe.' } }
    }
    return { error: 'Falha ao criar tenant. Tente novamente.' }
  }

  revalidatePath('/clientes')
  revalidatePath('/')
  redirect('/clientes')
}

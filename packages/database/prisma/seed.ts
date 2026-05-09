import { PrismaClient, SourceType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const alchemypet = await prisma.tenant.upsert({
    where: { slug: 'alchemypet' },
    update: {},
    create: {
      slug: 'alchemypet',
      nome: 'Alchemypet',
      vertical: 'vet',
      vocabPackId: 'vet',
      plano: 'piloto',
      pilares: {
        create: [
          { nome: 'Educação Técnica', pesoPct: 35, ordem: 1, descricao: 'Conteúdo técnico-educativo para MV e tutores' },
          { nome: 'Diferencial', pesoPct: 25, ordem: 2, descricao: 'Tecnologia e diferenciais do laboratório' },
          { nome: 'Autoridade Científica', pesoPct: 20, ordem: 3, descricao: 'Estudos, pesquisas e evidências' },
          { nome: 'Datas e Campanhas', pesoPct: 12, ordem: 4, descricao: 'Calendário pet e sazonalidade' },
          { nome: 'Parceria Comercial', pesoPct: 8, ordem: 5, descricao: 'Conteúdo de parceiros e comarketing' },
        ],
      },
    },
  })

  await prisma.usuario.upsert({
    where: { email: 'fernando@tudomudou.com.br' },
    update: {},
    create: {
      email: 'fernando@tudomudou.com.br',
      nome: 'Fernando Jorge',
      role: 'ADMIN_PLATFORM',
    },
  })

  const sources = await Promise.all([
    prisma.source.upsert({
      where: { id: 'src-pubmed-vet' },
      update: {},
      create: {
        id: 'src-pubmed-vet',
        tipo: SourceType.PUBMED,
        nome: 'PubMed Veterinary',
        url: 'https://pubmed.ncbi.nlm.nih.gov/rss/search/',
        idioma: 'en',
        frequencia: 'semanal',
        config: { query: 'veterinary OR canine OR feline diagnosis treatment' },
      },
    }),
    prisma.source.upsert({
      where: { id: 'src-agenciapet-rss' },
      update: {},
      create: {
        id: 'src-agenciapet-rss',
        tipo: SourceType.RSS,
        nome: 'Agência Pet',
        url: 'https://noticias.agencia.pet/feed',
        idioma: 'pt-BR',
        frequencia: 'diaria',
      },
    }),
    prisma.source.upsert({
      where: { id: 'src-dvm360-rss' },
      update: {},
      create: {
        id: 'src-dvm360-rss',
        tipo: SourceType.RSS,
        nome: 'dvm360',
        url: 'https://www.dvm360.com/rss',
        idioma: 'en',
        frequencia: 'diaria',
      },
    }),
    prisma.source.upsert({
      where: { id: 'src-idexx-blog' },
      update: {},
      create: {
        id: 'src-idexx-blog',
        tipo: SourceType.RSS,
        nome: 'IDEXX Blog',
        url: 'https://www.idexx.com/blog/feed',
        idioma: 'en',
        frequencia: 'semanal',
      },
    }),
    prisma.source.upsert({
      where: { id: 'src-vetmed-today' },
      update: {},
      create: {
        id: 'src-vetmed-today',
        tipo: SourceType.RSS,
        nome: 'VetMed Today',
        url: 'https://vetmedtoday.com/feed',
        idioma: 'en',
        frequencia: 'diaria',
      },
    }),
  ])

  for (const [i, source] of sources.entries()) {
    await prisma.tenantFonte.upsert({
      where: { tenantId_sourceId: { tenantId: alchemypet.id, sourceId: source.id } },
      update: {},
      create: {
        tenantId: alchemypet.id,
        sourceId: source.id,
        prioridade: i + 1,
      },
    })
  }

  console.log('Seed concluído: tenant Alchemypet + 5 fontes vet criados.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

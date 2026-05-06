import { Pinecone } from '@pinecone-database/pinecone'
import { prisma } from '@radar/database'

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
})

const INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? 'radar'

// Cada tenant usa um namespace isolado: "vet-{tenantSlug}"
function tenantNamespace(tenantId: string): string {
  return `tenant-${tenantId}`
}

export interface UpsertVectorOptions {
  id: string
  values: number[]
  metadata: {
    tenantId: string
    tipo: 'raw_content' | 'post_publicado'
    pilar?: string
    titulo?: string
    publishedAt?: string
  }
}

export async function upsertVector(options: UpsertVectorOptions): Promise<void> {
  const index = pinecone.index(INDEX_NAME)
  const ns = index.namespace(tenantNamespace(options.metadata.tenantId))

  await ns.upsert([
    {
      id: options.id,
      values: options.values,
      metadata: options.metadata as Record<string, string>,
    },
  ])

  await prisma.usageLog.create({
    data: {
      tenantId: options.metadata.tenantId,
      acao: 'pinecone_upsert',
      metadata: { id: options.id, tipo: options.metadata.tipo },
    },
  })
}

export interface QuerySimilarOptions {
  tenantId: string
  queryVector: number[]
  topK?: number
  filter?: Record<string, string>
}

export interface SimilarResult {
  id: string
  score: number
  metadata: Record<string, string>
}

export async function querySimilar(options: QuerySimilarOptions): Promise<SimilarResult[]> {
  const index = pinecone.index(INDEX_NAME)
  const ns = index.namespace(tenantNamespace(options.tenantId))

  const result = await ns.query({
    vector: options.queryVector,
    topK: options.topK ?? 10,
    filter: options.filter,
    includeMetadata: true,
  })

  await prisma.usageLog.create({
    data: {
      tenantId: options.tenantId,
      acao: 'pinecone_query',
      metadata: { topK: options.topK ?? 10 },
    },
  })

  return (result.matches ?? []).map((m) => ({
    id: m.id,
    score: m.score ?? 0,
    metadata: (m.metadata as Record<string, string>) ?? {},
  }))
}

export { pinecone }

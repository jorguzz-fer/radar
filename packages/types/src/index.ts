// Re-export Prisma types via database package for convenience
export type {
  Tenant,
  TenantPilar,
  TenantFonte,
  Usuario,
  Source,
  RawContent,
  ProcessedContent,
  PostPublicado,
  Pauta,
  UsageLog,
  TenantStatus,
  Role,
  SourceType,
  PostFonte,
  PautaStatus,
} from '@radar/database'

// ============ VOCAB PACK TYPES ============

export interface PilarDefault {
  nome: string
  pesoPct: number
  descricao: string
}

export interface FonteDefault {
  tipo: SourceType
  nome: string
  url?: string
  config?: Record<string, unknown>
}

export interface DataComemorativa {
  dia?: number
  mes: string
  nome: string
  tema: string
}

export interface VocabPackPrompts {
  classificacao: string
  scoreNovidade: string
  scoreRelevancia: string
}

export interface VocabPack {
  vertical: string
  nome: string
  termosCore: string[]
  pilaresPadrao: PilarDefault[]
  fontesPadrao: FonteDefault[]
  datasComemorativas: DataComemorativa[]
  promptInstructions: VocabPackPrompts
}

// ============ API TYPES ============

export interface IngestPayload {
  sourceId: string
  externalUrl: string
  titulo: string
  rawText: string
  publishedAt?: string
  idioma: string
}

export interface IngestResult {
  id: string
  status: 'created' | 'duplicate'
}

export interface ProcessingResult {
  processedId: string
  tenantId: string
  pilarSugerido: string
  novidadeScore: number
  relevanciaScore: number
  scoreFinal: number
  custoTokens: number
}

export interface PautaWeeklyReport {
  tenantId: string
  semanaRef: string
  totalSugeridas: number
  pautas: PautaSummary[]
}

export interface PautaSummary {
  id: string
  titulo: string
  resumo: string
  anguloSugerido: string
  pilarSugerido: string
  fonteOriginal: string
  scoreFinal: number
}

// Importado para uso no SourceType acima
import type { SourceType } from '@radar/database'

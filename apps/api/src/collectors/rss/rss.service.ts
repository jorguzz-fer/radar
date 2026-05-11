import { Injectable, Logger } from '@nestjs/common'
import Parser from 'rss-parser'
import { prisma } from '@radar/database'
import { IngestService } from '../../ingest/ingest.service'

type RssSourceConfig = {
  id: string
  nome: string
  url: string
  idioma: string
  frequencia: string
  // Vertical (= vocabPackId do tenant) que essa source serve. O collector
  // usa pra auto-vincular a source em tenant_fontes de tenants ativos
  // dessa vertical, evitando seed manual.
  vertical: string
}

// Lista canônica de RSS sources que o pipeline coleta. IDs estáveis pra
// permitir upsert idempotente — se a source não existe ainda, é criada
// no primeiro run; se existe, só atualiza ultimaColeta.
const RSS_SOURCES: RssSourceConfig[] = [
  {
    id: 'src-agenciapet-rss',
    nome: 'Agência Pet',
    url: 'https://noticias.agencia.pet/feed',
    idioma: 'pt-BR',
    frequencia: 'diaria',
    vertical: 'vet',
  },
  {
    id: 'src-dvm360-rss',
    nome: 'dvm360',
    url: 'https://www.dvm360.com/rss',
    idioma: 'en',
    frequencia: 'diaria',
    vertical: 'vet',
  },
]

export type RssCollectStats = {
  source: string
  fetched: number
  created: number
  duplicates: number
  errors: number
}

@Injectable()
export class RssCollectorService {
  private readonly logger = new Logger(RssCollectorService.name)
  private readonly parser = new Parser({ timeout: 15_000 })

  constructor(private readonly ingestService: IngestService) {}

  async collectAll(): Promise<RssCollectStats[]> {
    const stats: RssCollectStats[] = []
    for (const cfg of RSS_SOURCES) {
      stats.push(await this.collectOne(cfg))
    }
    return stats
  }

  private async collectOne(cfg: RssSourceConfig): Promise<RssCollectStats> {
    await this.ensureSource(cfg)

    const stat: RssCollectStats = {
      source: cfg.nome,
      fetched: 0,
      created: 0,
      duplicates: 0,
      errors: 0,
    }

    let feed
    try {
      feed = await this.parser.parseURL(cfg.url)
    } catch (err) {
      this.logger.error(`Falha ao buscar feed ${cfg.nome}: ${(err as Error).message}`)
      stat.errors = 1
      return stat
    }

    stat.fetched = feed.items.length

    for (const item of feed.items) {
      try {
        const titulo = item.title?.trim()
        const externalUrl = item.link?.trim()
        const rawText = (item.contentSnippet || item.content || item.summary || '').trim()
        if (!titulo || !externalUrl || !rawText) continue

        const result = await this.ingestService.ingest({
          sourceId: cfg.id,
          externalUrl,
          titulo,
          rawText,
          publishedAt: item.isoDate || item.pubDate,
          idioma: cfg.idioma,
        })
        if (result.status === 'created') stat.created++
        else stat.duplicates++
      } catch (err) {
        this.logger.warn(`Erro ingerindo item de ${cfg.nome}: ${(err as Error).message}`)
        stat.errors++
      }
    }

    this.logger.log(
      `[${cfg.nome}] fetched=${stat.fetched} created=${stat.created} duplicates=${stat.duplicates} errors=${stat.errors}`,
    )
    return stat
  }

  private async ensureSource(cfg: RssSourceConfig): Promise<void> {
    await prisma.source.upsert({
      where: { id: cfg.id },
      update: {},
      create: {
        id: cfg.id,
        tipo: 'RSS',
        nome: cfg.nome,
        url: cfg.url,
        idioma: cfg.idioma,
        frequencia: cfg.frequencia,
      },
    })

    // Auto-vincula a source aos tenants ativos da mesma vertical. Sem
    // isso, o processor não acha ninguém pra processar o RawContent.
    const tenants = await prisma.tenant.findMany({
      where: { vocabPackId: cfg.vertical, status: 'ATIVO' },
      select: { id: true },
    })
    for (const t of tenants) {
      await prisma.tenantFonte.upsert({
        where: { tenantId_sourceId: { tenantId: t.id, sourceId: cfg.id } },
        update: {},
        create: { tenantId: t.id, sourceId: cfg.id, prioridade: 1 },
      })
    }
  }
}

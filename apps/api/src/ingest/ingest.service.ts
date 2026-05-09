import { Injectable, Logger } from '@nestjs/common'
import { createHash } from 'crypto'
import { prisma } from '@radar/database'
import type { IngestPayload, IngestResult } from '@radar/types'

@Injectable()
export class IngestService {
  private readonly logger = new Logger(IngestService.name)

  async ingest(payload: IngestPayload): Promise<IngestResult> {
    const hash = createHash('sha256')
      .update(payload.externalUrl + payload.rawText.slice(0, 500))
      .digest('hex')

    const existing = await prisma.rawContent.findUnique({ where: { hash } })
    if (existing) {
      this.logger.debug(`Duplicata ignorada: ${payload.externalUrl}`)
      return { id: existing.id, status: 'duplicate' }
    }

    const source = await prisma.source.findUnique({ where: { id: payload.sourceId } })
    if (!source) throw new Error(`Source não encontrada: ${payload.sourceId}`)

    const rawContent = await prisma.rawContent.create({
      data: {
        sourceId: payload.sourceId,
        externalUrl: payload.externalUrl,
        titulo: payload.titulo,
        rawText: payload.rawText,
        publishedAt: payload.publishedAt ? new Date(payload.publishedAt) : null,
        idioma: payload.idioma,
        hash,
      },
    })

    await prisma.source.update({
      where: { id: payload.sourceId },
      data: { ultimaColeta: new Date() },
    })

    this.logger.log(`Conteúdo ingerido: ${rawContent.id} — ${payload.titulo.slice(0, 60)}`)
    return { id: rawContent.id, status: 'created' }
  }
}

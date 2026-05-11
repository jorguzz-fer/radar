import {
  Body,
  Controller,
  Headers,
  Logger,
  Post,
  UnauthorizedException,
} from '@nestjs/common'
import { RssCollectorService, type RssCollectStats } from '../collectors/rss/rss.service'
import { ProcessorService, type ProcessorStats } from '../processor/processor.service'
import {
  PautasGeneratorService,
  type GeneratorStats,
} from '../pautas-generator/pautas-generator.service'

type PipelineBody = {
  tenantId?: string
  // Permite rodar etapas isoladas em troubleshooting. Default: as 3.
  steps?: Array<'collect' | 'process' | 'generate'>
}

export type PipelineResult = {
  ok: true
  durationMs: number
  collect?: RssCollectStats[]
  process?: ProcessorStats
  generate?: GeneratorStats
}

@Controller('internal/pipeline')
export class PipelineController {
  private readonly logger = new Logger(PipelineController.name)

  constructor(
    private readonly rss: RssCollectorService,
    private readonly processor: ProcessorService,
    private readonly generator: PautasGeneratorService,
  ) {}

  @Post('run')
  async run(
    @Body() body: PipelineBody,
    @Headers('x-ingest-token') token: string,
  ): Promise<PipelineResult> {
    if (!process.env.RADARVET_API_INGEST_TOKEN || token !== process.env.RADARVET_API_INGEST_TOKEN) {
      throw new UnauthorizedException('Token inválido')
    }

    const steps = new Set(body?.steps ?? ['collect', 'process', 'generate'])
    const tenantId = body?.tenantId
    const t0 = Date.now()
    const result: PipelineResult = { ok: true, durationMs: 0 }

    if (steps.has('collect')) {
      this.logger.log('Pipeline: collect')
      result.collect = await this.rss.collectAll()
    }
    if (steps.has('process')) {
      this.logger.log(`Pipeline: process (tenant=${tenantId ?? 'todos'})`)
      result.process = await this.processor.processPending(tenantId)
    }
    if (steps.has('generate')) {
      this.logger.log(`Pipeline: generate (tenant=${tenantId ?? 'todos ativos'})`)
      result.generate = await this.generator.generateForWeek(tenantId)
    }

    result.durationMs = Date.now() - t0
    return result
  }
}

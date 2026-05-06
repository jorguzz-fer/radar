import { Body, Controller, Headers, Post, UnauthorizedException } from '@nestjs/common'
import { IngestService } from './ingest.service'
import type { IngestPayload, IngestResult } from '@radar/types'

@Controller('internal/ingest')
export class IngestController {
  constructor(private ingestService: IngestService) {}

  @Post()
  async ingest(
    @Body() payload: IngestPayload,
    @Headers('x-ingest-token') token: string,
  ): Promise<IngestResult> {
    if (token !== process.env.RADARVET_API_INGEST_TOKEN) {
      throw new UnauthorizedException('Token inválido')
    }
    return this.ingestService.ingest(payload)
  }
}

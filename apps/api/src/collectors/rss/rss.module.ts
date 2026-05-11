import { Module } from '@nestjs/common'
import { IngestModule } from '../../ingest/ingest.module'
import { RssCollectorService } from './rss.service'

@Module({
  imports: [IngestModule],
  providers: [RssCollectorService],
  exports: [RssCollectorService],
})
export class RssCollectorModule {}

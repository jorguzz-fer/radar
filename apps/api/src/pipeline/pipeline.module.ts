import { Module } from '@nestjs/common'
import { RssCollectorModule } from '../collectors/rss/rss.module'
import { ProcessorModule } from '../processor/processor.module'
import { PautasGeneratorModule } from '../pautas-generator/pautas-generator.module'
import { PipelineController } from './pipeline.controller'

@Module({
  imports: [RssCollectorModule, ProcessorModule, PautasGeneratorModule],
  controllers: [PipelineController],
})
export class PipelineModule {}

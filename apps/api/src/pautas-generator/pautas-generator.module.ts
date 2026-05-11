import { Module } from '@nestjs/common'
import { PautasGeneratorService } from './pautas-generator.service'

@Module({
  providers: [PautasGeneratorService],
  exports: [PautasGeneratorService],
})
export class PautasGeneratorModule {}

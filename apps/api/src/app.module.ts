import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HealthModule } from './health/health.module'
import { IngestModule } from './ingest/ingest.module'
import { TenantsModule } from './tenants/tenants.module'
import { PipelineModule } from './pipeline/pipeline.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    IngestModule,
    TenantsModule,
    PipelineModule,
  ],
})
export class AppModule {}

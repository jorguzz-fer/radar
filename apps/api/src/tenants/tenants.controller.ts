import { Controller, Get, Param } from '@nestjs/common'
import { TenantsService } from './tenants.service'

@Controller('tenants')
export class TenantsController {
  constructor(private tenantsService: TenantsService) {}

  @Get()
  findAll() {
    return this.tenantsService.findAll()
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.tenantsService.findBySlug(slug)
  }
}

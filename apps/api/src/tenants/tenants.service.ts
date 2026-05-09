import { Injectable, NotFoundException } from '@nestjs/common'
import { prisma } from '@radar/database'

@Injectable()
export class TenantsService {
  findAll() {
    return prisma.tenant.findMany({
      where: { status: 'ATIVO' },
      include: { pilares: { orderBy: { ordem: 'asc' } } },
    })
  }

  async findBySlug(slug: string) {
    const tenant = await prisma.tenant.findUnique({
      where: { slug },
      include: {
        pilares: { orderBy: { ordem: 'asc' } },
        fontes: { include: { source: true } },
      },
    })
    if (!tenant) throw new NotFoundException(`Tenant "${slug}" não encontrado`)
    return tenant
  }
}

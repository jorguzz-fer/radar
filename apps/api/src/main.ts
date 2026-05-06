import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  )

  app.enableCors()
  app.setGlobalPrefix('api')

  const port = process.env.PORT ?? 3001
  await app.listen(port, '0.0.0.0')

  Logger.log(`API rodando em http://0.0.0.0:${port}/api`, 'Bootstrap')
}

bootstrap()

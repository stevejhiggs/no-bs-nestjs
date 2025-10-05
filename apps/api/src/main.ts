import { cleanupOpenApiDoc, ZodValidationPipe } from 'nestjs-zod';
import compression from '@fastify/compress';
import cookie from '@fastify/cookie';
import helmet from '@fastify/helmet';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: false,
    }),
  );

  app.enableShutdownHooks();

  // setup zod validation
  app.useGlobalPipes(new ZodValidationPipe());

  // setup logger
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  // setup swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('No Bs NestJS')
    .setVersion('1.0')
    .setOpenAPIVersion('3.1.0')
    .build();
  const documentFactory = () =>
    cleanupOpenApiDoc(SwaggerModule.createDocument(app, swaggerConfig));
  SwaggerModule.setup('docs', app, documentFactory);

  await app.register(compression);
  await app.register(cookie);
  await app.register(helmet);

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

await bootstrap();

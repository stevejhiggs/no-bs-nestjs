import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';
import { ZodSerializerInterceptor } from 'nestjs-zod';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { loggerOptions } from './config/logger.js';
import { ClassValidationModule } from './modules/class-validation/module.js';
import { HealthModule } from './modules/health/module.js';
import { ZodValidationModule } from './modules/zod-validation/module.js';
import { HttpZodExceptionFilter } from './validation/zod-exception-filter.js';

@Module({
  imports: [
    LoggerModule.forRoot(loggerOptions),
    HealthModule,
    ClassValidationModule,
    ZodValidationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpZodExceptionFilter,
    },
  ],
})
export class AppModule {}

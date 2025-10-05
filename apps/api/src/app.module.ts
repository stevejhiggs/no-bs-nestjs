import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { loggerOptions } from './config/logger.js';
import { HealthModule } from './modules/health/module.js';
import { ClassValidationModule } from './modules/class-validation/module.js';

@Module({
  imports: [
    LoggerModule.forRoot(loggerOptions),
    HealthModule,
    ClassValidationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

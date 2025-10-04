import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { loggerOptions } from './config/logger.js';

import { HealthModule } from './modules/health/module.js';

@Module({
  imports: [LoggerModule.forRoot(loggerOptions), HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

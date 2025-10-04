import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    Logger.log('getHello');
    return this.appService.getHello();
  }
}

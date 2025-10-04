import { Controller, Get, Logger } from '@nestjs/common';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get()
  public healthcheck(): string {
    Logger.log('called healthcheck');
    return 'OK';
  }
}

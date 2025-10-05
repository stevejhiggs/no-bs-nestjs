import { Module } from '@nestjs/common';

import { ZodValidationController } from './http/controller.js';

@Module({
  controllers: [ZodValidationController],
})
export class ZodValidationModule {}

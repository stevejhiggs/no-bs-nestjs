import { Module } from '@nestjs/common';

import { ClassValidationController } from './http/controller.js';

@Module({
  controllers: [ClassValidationController],
})
export class ClassValidationModule {}

import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequestZodDto } from './dtos/create-user.js';

@Controller('zod-validation')
export class ZodValidationController {
  constructor() {}

  @Post()
  create(@Body() createUserDto: CreateUserRequestZodDto) {
    return `This action adds a new user ${createUserDto.email}`;
  }
}

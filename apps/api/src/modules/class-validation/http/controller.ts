import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequestDto } from './dtos/create-user.js';

@Controller('class-validation')
export class ClassValidationController {
  constructor() {}

  @Post()
  create(@Body() createUserDto: CreateUserRequestDto) {
    return `This action adds a new user ${createUserDto.email}`;
  }
}

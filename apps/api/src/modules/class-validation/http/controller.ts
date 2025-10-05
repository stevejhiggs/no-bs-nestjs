import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserRequestDto } from './dtos/create-user.dto.js';

// although we default to zod validation, we can still use class validation if we want
@Controller('class-validation')
@UsePipes(new ValidationPipe())
export class ClassValidationController {
  constructor() {}

  @Post()
  create(@Body() createUserDto: CreateUserRequestDto) {
    return `This action adds a new user ${createUserDto.email}`;
  }
}

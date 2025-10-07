import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  CreateUserRequestDto,
  CreateUserResponseDto,
} from './dtos/create-user.dto.js';
import { ApiResponse } from '@nestjs/swagger';

// although we default to zod validation, we can still use class validation if we want
@Controller('class-validation')
@ApiResponse({ type: CreateUserResponseDto })
@UsePipes(new ValidationPipe())
export class ClassValidationController {
  constructor() {}

  @Post()
  create(@Body() createUserDto: CreateUserRequestDto): CreateUserResponseDto {
    return {
      users: [{ username: createUserDto.username, email: createUserDto.email }],
    };
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import {
  CreateUserRequestDescriminatedUnionZodDto,
  CreateUserRequestZodDto,
  CreateUserResponseZodDto,
} from './dtos/create-user.js';
import { ZodResponse } from 'nestjs-zod';

@Controller('zod-validation')
export class ZodValidationController {
  constructor() {}

  @Post()
  // strongly typed response
  @ZodResponse({ type: CreateUserResponseZodDto })
  create(@Body() createUserDto: CreateUserRequestZodDto) {
    return {
      users: [
        {
          username: createUserDto.username,
          email: createUserDto.email,
        },
      ],
    };
  }

  @Post('descriminated-union')
  createDescriminatedUnion(
    @Body() createUserDto: CreateUserRequestDescriminatedUnionZodDto,
  ) {
    return `This action adds a new user ${createUserDto.user.type}`;
  }
}

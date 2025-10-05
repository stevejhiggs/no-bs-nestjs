import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

/**
 * In order for the class validator properties to be picked up by the swagger plugin,
 * we need to be in a file with the .dto.ts or the .dto.js extension.
 *
 * Sigh, magical bullshit
 *
 * Instead we are just going to manually mark up the properties with the ApiProperty decorator.
 * The zod validation plugin does not need this crap and class validator should be avoided in general.
 */

export class CreateUserRequestDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

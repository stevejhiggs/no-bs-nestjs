import { IsEmail, IsNotEmpty } from 'class-validator';

/**
 * In order for the class validator properties to be picked up by the swagger plugin,
 * we need to be in a file with the .dto.ts or the .dto.js extension.
 *
 * Sigh, magical bullshit
 */

export class CreateUserRequestDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

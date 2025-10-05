import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserRequestDto {
  @ApiProperty({ description: 'The email address of the user' })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ApiProperty() // if this is not provided, it will not be included in the swagger documentation, which is really stupid
  password: string;
}

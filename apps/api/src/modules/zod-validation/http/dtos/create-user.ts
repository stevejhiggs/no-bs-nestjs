import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CredentialsSchema = z.object({
  username: z.string(),
  email: z.email(),
});

// class is required for using DTO as a type
export class CreateUserRequestZodDto extends createZodDto(CredentialsSchema) {}

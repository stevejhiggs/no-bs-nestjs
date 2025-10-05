import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const credentialsSchema = z.object({
  username: z.string(),
  email: z.email(),
});

const descriminatedUnionSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('credentials'),
    username: z.string(),
    email: z.email(),
  }),
  z.object({
    type: z.literal('username'),
    name: z.string(),
  }),
]);

// zod nest cant deal with top level descriminated unions, so we need to wrap it in an object
const wrappedUnionSchema = z.object({
  user: descriminatedUnionSchema,
});

// class is required for using DTO as a type
export class CreateUserRequestZodDto extends createZodDto(credentialsSchema) {}

export class CreateUserRequestDescriminatedUnionZodDto extends createZodDto(
  wrappedUnionSchema,
) {}

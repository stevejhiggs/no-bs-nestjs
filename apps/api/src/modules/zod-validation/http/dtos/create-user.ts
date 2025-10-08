import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const credentialsRequestSchema = z.strictObject({
  username: z.string(),
  email: z.email(),
});

const credentialsResponseSchema = z.strictObject({
  users: z.array(
    z.strictObject({
      username: z.string(),
      email: z.email(),
    }),
  ),
});

const descriminatedUnionSchema = z.discriminatedUnion('type', [
  z.strictObject({
    type: z.literal('credentials'),
    username: z.string(),
    email: z.email(),
  }),
  z.strictObject({
    type: z.literal('username'),
    name: z.string(),
  }),
]);

// zod nest cant deal with top level descriminated unions, so we need to wrap it in an object
const descriminatedUnionRequestSchema = z.strictObject({
  user: descriminatedUnionSchema,
});

// class is required for using DTO as a type
export class CreateUserRequestZodDto extends createZodDto(
  credentialsRequestSchema,
) {}

export class CreateUserResponseZodDto extends createZodDto(
  credentialsResponseSchema,
) {}

export class CreateUserRequestDescriminatedUnionZodDto extends createZodDto(
  descriminatedUnionRequestSchema,
) {}

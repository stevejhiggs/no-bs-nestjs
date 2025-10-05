import { ZodSerializationException } from 'nestjs-zod';
import { BaseExceptionFilter } from '@nestjs/core';
import { ZodError } from 'zod';
import { HttpException, ArgumentsHost, Logger, Catch } from '@nestjs/common';

@Catch(HttpException)
export class HttpZodExceptionFilter extends BaseExceptionFilter {
  private logger = new Logger(HttpZodExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    if (exception instanceof ZodSerializationException) {
      const zodError = exception.getZodError();

      if (zodError instanceof ZodError) {
        this.logger.error(`ZodSerializationException: ${zodError.message}`);
      }
    }

    super.catch(exception, host);
  }
}

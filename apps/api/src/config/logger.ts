import type { Params } from 'nestjs-pino';
import { createGcpLoggingPinoConfig } from '@google-cloud/pino-logging-gcp-config';

export const loggerOptions = <Params>{
  pinoHttp: [
    {
      quietReqLogger: true,
      ...(process.env.NODE_ENV === 'production'
        ? createGcpLoggingPinoConfig() // output in gcp logging format
        : {
            transport: {
              target: 'pino-pretty',
              options: { sync: true },
            },
          }),
    },
  ],
};

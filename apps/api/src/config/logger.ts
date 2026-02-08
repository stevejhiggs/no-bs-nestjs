import { createGcpLoggingPinoConfig } from '@google-cloud/pino-logging-gcp-config';
import type { Params } from 'nestjs-pino';

import { isLocalDevelopment } from '@/environment.js';

export const loggerOptions = <Params>{
  pinoHttp: [
    {
      quietReqLogger: true,
      ...(isLocalDevelopment()
        ? {
            transport: {
              target: 'pino-pretty',
              options: { sync: true },
            },
          }
        : createGcpLoggingPinoConfig()), // output in gcp logging format
    },
  ],
};

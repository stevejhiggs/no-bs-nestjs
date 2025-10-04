import type { Params } from 'nestjs-pino';

export const loggerOptions = <Params>{
  pinoHttp: [
    {
      quietReqLogger: true,
      ...(process.env.NODE_ENV === 'production'
        ? {}
        : {
            transport: {
              target: 'pino-pretty',
              options: { sync: true, singleLine: true },
            },
          }),
    },
  ],
};

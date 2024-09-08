import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    console.log(`Incoming Request: ${req.method} ${req.originalUrl}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Body: ${JSON.stringify(req.body)}`);
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(
        `Response: ${res.statusCode} ${res.statusMessage} - ${duration}ms`,
      );
    });
    next();
  }
}

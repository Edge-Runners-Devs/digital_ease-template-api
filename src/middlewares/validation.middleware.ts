import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler, Response } from 'express';
import HttpException from '../exceptions/Http.exception';

const validationMiddleware = (
  type: any,
  value: string | 'body' | 'query' | 'params' = 'body',
  skipMissingProperties = false,
  whitelist = true,
  forbidNonWhitelisted = true,
): RequestHandler => {
  return (req: Record<string, any>, res: Response, next) => {
    validate(plainToInstance(type, req[value]), {
      skipMissingProperties,
      whitelist,
      forbidNonWhitelisted,
    }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const message = errors
          .map((error: ValidationError) =>
            Object.values(error?.constraints as Record<string, any>),
          )
          .join(', ');
        next(new HttpException(400, message));
      } else {
        next();
      }
    });
  };
};

export default validationMiddleware;

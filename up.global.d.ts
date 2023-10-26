import type { NextFunction, Request, Response } from 'express';
import { br } from './src/resources/i18n/br';

export declare global {
  type EmptySuccessStatus = void;
  interface Req<T = null> extends Request {
    body: T;
  }
  interface Res extends Response {
    locals: {
      strings?: typeof br;
    };
  }
  type Next = NextFunction;
  interface KeyToString {
    [key: string]: string;
  }

  type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
}

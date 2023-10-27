import type { NextFunction, Request, Response } from 'express';
import { br } from './src/resources/i18n/br';
import { AuthService } from './src/services/AuthService';

export declare global {
  type EmptySuccessStatus = void;
  interface Req<T = null> extends Request {
    body: T;
  }
  interface Res extends Response {
    locals: {
      strings?: typeof br;
      unlockedDevice?: boolean;
      unlockedDeviceBy?: string;
    };
  }
  type Next = NextFunction;
  interface KeyToString {
    [key: string]: string;
  }

  interface AuthGlobal extends AuthService {}

  type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
}

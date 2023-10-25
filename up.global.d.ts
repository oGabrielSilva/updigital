import type { NextFunction, Request, Response } from 'express';

export declare global {
  type EmptySuccessStatus = void;
  interface Req<T = null> extends Request {
    body: T;
  }
  interface Res extends Response {}
  type Next = NextFunction;
  interface KeyToString {
    [key: string]: string;
  }

  type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
}

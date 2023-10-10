import type { Request, Response } from 'express';

export declare global {
  type EmptySuccessStatus = void;
  interface Req<T = null> extends Request {
    body: T;
  }
  interface Res extends Response {}

  interface Controller {
    boot: () => void;
  }
}

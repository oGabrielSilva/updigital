export abstract class Middleware {
  public abstract resolve(req: Req, res: Res, next: Next): void;
}

import { API_HEADER_KEY_LANG_NAME } from '../resources/constants/constants';

export class AppStringMiddleware {
  public static resolve(req: Req, res: Res, next: Next): void {
    const string = req.headers[API_HEADER_KEY_LANG_NAME];
    console.log(string);
    next();
  }
}

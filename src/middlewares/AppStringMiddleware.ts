import { API_HEADER_KEY_LANG_NAME } from '../resources/constants/constants';
import { br } from '../resources/i18n/br';

export class AppStringMiddleware {
  public static resolve(req: Req, res: Res, next: Next): void {
    const stringCode = req.headers[API_HEADER_KEY_LANG_NAME];
    res.locals.strings = stringCode === 'pt' ? br : br;
    next();
  }
}

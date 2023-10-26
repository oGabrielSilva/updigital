import { API_HEADER_KEY_LANG_NAME } from '../resources/constants/constants';
import { getStringByCode } from '../resources/i18n/extra/getStringByCode';

export class AppStringMiddleware {
  public static resolve(req: Req, res: Res, next: Next): void {
    const stringCode = req.headers[API_HEADER_KEY_LANG_NAME] as string;
    res.locals.strings = getStringByCode(stringCode);
    next();
  }
}

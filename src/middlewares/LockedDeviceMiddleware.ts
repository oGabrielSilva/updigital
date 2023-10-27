import {
  APP_COOKIE_KEY_LOCKED_DEVICE,
  APP_GLOBAL_AUTH_SERVICE,
} from '../resources/constants/constants';

export class LockedDeviceMiddleware {
  public static resolve(req: Req, res: Res, next: Next) {
    if (req.method !== 'GET' && req.path.includes('/api')) return next();
    try {
      const token = req.cookies[APP_COOKIE_KEY_LOCKED_DEVICE];
      if (!token || typeof token !== 'string') throw new Error('Token undefined');
      const enc = (req.app.get(APP_GLOBAL_AUTH_SERVICE) as AuthGlobal).verifyAuthToken(token);
      if (!enc) throw new Error('Enc undefined');
      if (!enc.keepUnlocked) throw new Error('keep unlocked false');
      res.locals.unlockedDevice = true;
      res.locals.unlockedDeviceBy = enc.register;
      next();
    } catch (e) {
      console.log((e as KeyToString)['message']);
      res.locals.unlockedDevice = false;
      res.clearCookie(APP_COOKIE_KEY_LOCKED_DEVICE);
      res.render('lock');
    }
  }
}

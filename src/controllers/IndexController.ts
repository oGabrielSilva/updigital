import { BadRequestException } from '../exceptions/BadRequestException';
import { APP_COOKIE_KEY_LOCKED_DEVICE } from '../resources/constants/constants';
import { AuthService } from '../services/AuthService';

interface LockInterface {
  register: string;
  password: string;
  keepUnlocked: boolean;
}

export class IndexController {
  private static readonly auth = new AuthService();

  public static index(req: Req, res: Res) {
    res.render('index');
  }

  public static lock(req: Req<LockInterface>, res: Res) {
    const { keepUnlocked, password, register } = req.body;
    if (
      typeof keepUnlocked !== 'boolean' ||
      !password ||
      typeof password !== 'string' ||
      !register ||
      typeof register !== 'string'
    )
      throw new BadRequestException('oie');
    const { token } = IndexController.auth.generateToken(register, keepUnlocked);
    return res.cookie(APP_COOKIE_KEY_LOCKED_DEVICE, token).status(204).end();
  }
}

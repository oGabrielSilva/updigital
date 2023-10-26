import { BadRequestException } from '../exceptions/BadRequestException';
import { AuthService } from '../services/AuthService';

interface LockInterface {
  register: string;
  password: string;
  keepUnlocked: boolean;
}

export class IndexController {
  private static readonly auth = new AuthService();

  public static index(req: Req, res: Res) {
    //res.render('index', { title: 'Sim' });
    return res.render('lock');
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
    const token = IndexController.auth.generateToken(register, keepUnlocked);
    const u = IndexController.auth.decryptData(token.token.split('.')[0]);
    console.log(u);
    console.log(token);
    return res.status(204).end();
  }
}

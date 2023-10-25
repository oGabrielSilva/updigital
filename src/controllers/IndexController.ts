import { BadRequestException } from '../exceptions/BadRequestException';

interface LockInterface {
  register: string;
  password: string;
  keepUnlocked: boolean;
}

export class IndexController {
  public static index(req: Req, res: Res) {
    //res.render('index', { title: 'Sim' });
    res.render('lock');
  }

  public static lock(req: Req<LockInterface>, res: Res) {
    const { keepUnlocked, password, register } = req.body;
    if (
      typeof keepUnlocked === 'boolean' ||
      !password ||
      typeof password !== 'string' ||
      !register ||
      typeof register !== 'string'
    )
      throw new BadRequestException();
    res.status(204).end();
  }
}

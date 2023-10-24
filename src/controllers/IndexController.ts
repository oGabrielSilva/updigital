interface lockInterface {
  register: string;
  password: string;
  keepUnlocked: boolean;
}

export class IndexController {
  public static index(req: Req, res: Res) {
    //res.render('index', { title: 'Sim' });
    res.render('lock');
  }
  public static lock(req: Req<lockInterface>, res: Res) {
    console.log(req.body);
    res.status(204).end();
  }
}

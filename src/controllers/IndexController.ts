export class IndexController {
  public static index(req: Req, res: Res) {
    res.render('index', { title: 'Sim' });
  }

  public static test(req: Req<{ getting: string }>, res: Res) {
    const { getting } = req.body;
    console.log(getting);
    res.status(200).json({ success: true });
  }
}

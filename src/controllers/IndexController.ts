export class IndexController {
  public static index(req: Req, res: Res) {
    res.render('index', { title: 'Sim' });
  }
}

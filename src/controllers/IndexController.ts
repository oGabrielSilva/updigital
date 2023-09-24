export class IndexController {
  public static index(_: Req, res: Res) {
    res.status(200).send('Hello World!');
  }
}

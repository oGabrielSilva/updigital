import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import e from 'express';

require('dotenv').config();

export class Server {
  private readonly app = e();
  private readonly port = process.env.PORT ?? 3000;

  private constructor() {}

  public boot() {
    this.app.listen(this.port, () => console.log(`App listening on http://127.0.0.1:${this.port}`));
  }

  public useMiddlewares() {
    this.app.use(cookieParser());
    this.app.use(bodyParser.json());
  }

  public static create() {
    return new Server();
  }
}

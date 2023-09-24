import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import { resolve } from 'path';
import router from '../routes/routes';

require('dotenv').config();

export class Server {
  private readonly app = express();
  private readonly port = process.env.PORT ?? 3000;

  private constructor() {}

  private useStaticFiles() {
    this.app.use('/public', express.static(resolve(__dirname, '..', '..', 'public')));
  }

  private useMiddlewares() {
    this.app.use(cookieParser());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  private useRoutes() {
    this.app.use(router);
  }

  public boot() {
    this.useMiddlewares();
    this.useStaticFiles();
    this.useRoutes();
    this.app.listen(this.port, () => console.log(`App listening on http://127.0.0.1:${this.port}`));
  }

  public static create() {
    return new Server();
  }
}

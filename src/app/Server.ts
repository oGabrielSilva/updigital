import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import { resolve } from 'path';
import nunjucks from 'nunjucks';
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

  private configureHTMLViewEngine() {
    this.app.set('view engine', 'html');
    nunjucks.configure(resolve(__dirname, '..', 'browser', 'templates'), {
      autoescape: true,
      express: this.app,
      watch: true,
    });
  }

  public boot() {
    this.configureHTMLViewEngine();
    this.useMiddlewares();
    this.useStaticFiles();
    this.useRoutes();
    this.app.listen(this.port, () => console.log(`App listening on http://127.0.0.1:${this.port}`));
  }

  public static create() {
    return new Server();
  }
}

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import { resolve } from 'path';
import nunjucks from 'nunjucks';
import router from '../routes/routes';
import { AppStringMiddleware } from '../middlewares/AppStringMiddleware';
import { ExceptionMiddleware } from '../middlewares/ExceptionMiddleware';
import { LockedDeviceMiddleware } from '../middlewares/LockedDeviceMiddleware';
import { AuthService } from '../services/AuthService';
import { APP_GLOBAL_AUTH_SERVICE } from '../resources/constants/constants';

require('dotenv').config();

export class Server {
  private readonly app = express();
  private readonly port = process.env.PORT ?? 3000;

  private readonly authService = new AuthService();

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

  private useCustomMiddlewares() {
    this.app.use(AppStringMiddleware.resolve);
    this.app.use(LockedDeviceMiddleware.resolve);
  }

  private useExceptionMiddleware() {
    this.app.use(ExceptionMiddleware.resolve);
  }

  private setServices() {
    this.app.set(APP_GLOBAL_AUTH_SERVICE, this.authService);
  }

  public boot() {
    this.configureHTMLViewEngine();
    this.useMiddlewares();
    this.useStaticFiles();
    this.useCustomMiddlewares();
    this.useRoutes();
    this.useExceptionMiddleware();
    this.setServices();
    this.app.listen(this.port, () => console.log(`App listening on http://127.0.0.1:${this.port}`));
  }

  public static create() {
    return new Server();
  }
}

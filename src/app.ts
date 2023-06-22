import express, { Application } from 'express';
import morgan from 'morgan';

import Database from './database';
import { PORT } from './config';
import { IRoute } from './interfaces';
import errorMiddleware from './middlewares/error.middleware';

export class App {
  private _server: Application;
  public port = PORT || '8080';
  constructor(routes: IRoute[] = []) {
    this._server = express();
    this.initDatabase();
    this.initMiddlewares();
    this.initRoutes(routes);
    this.initErrorHandler();
  }
  public listen(): void {
    this._server.listen(this.port, () => {
      console.log(`http://localhost:${this.port}`);
    });
  }
  get server(): Application {
    return this._server;
  }
  private initDatabase(): void {
    try {
      console.log('DB process starting...');

      Database.sync().then(() => {
        console.log('DB connected');
      });
    } catch (error) {
      console.log('DB not connected');
    }
  }
  private initRoutes(routes: IRoute[]): void {
    routes.forEach((route: IRoute) => {
      console.log(`[ INIT ROUTES ]: ${route.path}`);
      this._server.use('/', route.router);
    });
  }
  private initMiddlewares(): void {
    this._server.use(
      express.urlencoded({
        extended: true,
      }),
    );
    this._server.use(express.json());
    this._server.use(morgan('dev'));
  }
  private initErrorHandler() {
    this.server.use(errorMiddleware);
  }
}

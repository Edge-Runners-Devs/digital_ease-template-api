import { Request, Response, Router } from 'express';
import { IRoute } from '../interfaces';

export class IndexRoutes implements IRoute {
  router: Router = Router();
  path: string = '/';
  constructor() {
    this.initRouter();
  }
  initRouter(): void {
    this.router.get(
      `${this.path}healthcheck`,
      (req: Request, res: Response) => {
        res.sendStatus(200);
      },
    );
  }
}

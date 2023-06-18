import { Router } from 'express';
import { Model, Sequelize } from 'sequelize';

export interface IController {
  service: IService;
}

export interface IRoute {
  path: string;
  router: Router;
  controller?: IController;
  initRouter(): void;
}

export abstract class IModel {
  abstract initModel(sequelize: Sequelize): void;
  abstract associateModels(): void;
}

export interface IService {}

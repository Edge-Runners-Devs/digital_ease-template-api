import { Sequelize } from 'sequelize';
import { development, docker, test } from './config/config';
import { NODE_ENV } from '../config';
import { IModel } from '../interfaces';

let config = {
  username: 'root',
  password: 'password',
  database: 'database',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
};

if (!NODE_ENV || NODE_ENV == 'development') config = { ...development };
if (NODE_ENV == 'docker') config = { ...docker };
if (NODE_ENV == 'test') config = { ...test };

const sequelize = new Sequelize({
  host: config?.host,
  port: parseInt(config.port!),
  database: config.database!,
  username: config.username!,
  password: config.password!,
  dialect: 'postgres',
  logging: false,
  dialectOptions: development.dialectOptions!,
});

// Initialize models
[].forEach((model: IModel) => {
  model.initModel(sequelize);
  model.associateModels();
});

export default sequelize;

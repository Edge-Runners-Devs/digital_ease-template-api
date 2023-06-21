const dotenv = require('dotenv');
const docker = dotenv.config({
  path: '.env.docker',
});

const development = dotenv.config({
  path: '.env.development',
});

const test = dotenv.config({
  path: '.env.test',
});

module.exports = {
  development: {
    username: development.parsed.DB_USER,
    password: development.parsed.DB_PASSWORD,
    database: development.parsed.DB_NAME,
    host: development.parsed.DB_HOST,
    port: development.parsed.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: development.parsed.DB_USER,
    password: development.parsed.DB_PASSWORD,
    database: development.parsed.DB_NAME,
    host: development.parsed.DB_HOST,
    port: development.parsed.DB_PORT,
    dialect: 'postgres',
  },
  // production: {
  //   username: 'root',
  //   password: null,
  //   database: 'database_production',
  //   host: '127.0.0.1',
  //   dialect: 'mysql',
  // },
  docker: {
    username: development.parsed.DB_USER,
    password: development.parsed.DB_PASSWORD,
    database: development.parsed.DB_NAME,
    host: development.parsed.DB_HOST,
    port: development.parsed.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

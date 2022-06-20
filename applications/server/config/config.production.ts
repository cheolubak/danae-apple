import { Dialect } from 'sequelize/types';

export const config = {
  database: {
    dialect: 'mariadb' as Dialect,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false,
  },
};
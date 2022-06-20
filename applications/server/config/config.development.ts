import { Dialect } from 'sequelize/types';

export const config = {
  database: {
    dialect: 'mariadb' as Dialect,
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'danae',
    logging: true,
  },
};

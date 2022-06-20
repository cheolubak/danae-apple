import { Injectable } from '@nestjs/common';
import { Dialect } from 'sequelize/types';
import config from '../../config';

@Injectable()
export class ConfigService {
  get sequelizeOrmConfig(): {
    dialect: Dialect;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    logging: boolean;
  } {
    return config.database;
  }
}

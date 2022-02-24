import { IEnvironment } from '~/environments/environment.interface';

export const environment = (): IEnvironment => ({
  secretKey: 'm=?7NPs@Y3yw6ShY',
  database: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: true,
  },
});

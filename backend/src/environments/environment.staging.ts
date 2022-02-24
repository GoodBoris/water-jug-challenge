export const environment = {
  secretKey: 'RWgN*=xK@Nkdz=3*',
  database: {
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    synchronize: true,
    logging: false,
  },
};

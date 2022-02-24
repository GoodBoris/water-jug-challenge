export const environment = {
  secretKey: 'fdKyKE=Nk*Gb2s=$',
  database: {
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    synchronize: false,
    logging: false,
  },
};

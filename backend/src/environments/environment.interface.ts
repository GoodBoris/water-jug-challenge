export interface IEnvironment {
  secretKey: string;
  database: {
    host?: string;
    port?: string;
    username?: string;
    password?: string;
    database?: string;
    synchronize: boolean;
    logging: boolean;
  };
}

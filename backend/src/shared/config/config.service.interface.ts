import { IEnvironment } from '~/environments/environment.interface';

export interface IConfigService {
  environment: IEnvironment;
}

import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { environment as environmentDev } from '../../environments/environment.dev';
import { environment as environmentStaging } from '../../environments/environment.staging';
import { environment as environmentProd } from '../../environments/environment.prod';
import { IEnvironment } from '~/environments/environment.interface';
import { IConfigService } from '~/shared/config/config.service.interface';

@Injectable()
export class ConfigService implements IConfigService {
  constructor() {
    Logger.log(`Configuration : ${process.env.ENV || 'DEV'}`);

    switch (process.env.ENV) {
      case 'PROD':
        this._environment = environmentProd;
        break;
      case 'STAGING':
        this._environment = environmentStaging;
        break;
      default:
        this._environment = environmentDev();
        break;
    }
  }

  get environment(): IEnvironment {
    return this._environment;
  }
  private readonly _environment: IEnvironment;
}

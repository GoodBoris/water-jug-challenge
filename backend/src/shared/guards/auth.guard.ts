import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '../config/config.service';
import { Logger } from '@nestjs/common';
import { JwtPayload } from 'jsonwebtoken';
import { UserRole } from '~/api/users/enums/user-role';
import { IConfigService } from '~/shared/config/config.service.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @Inject(ConfigService) private config: IConfigService
  ) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles: UserRole[] = this.reflector.get<UserRole[]>(
      'roles',
      context.getHandler()
    );
    const request = context.switchToHttp().getRequest();

    if (!roles) {
      Logger.log(`${request.route['stack'][0].method} ${request.originalUrl}`);
      return true;
    }

    const token: string = request.headers['authorization'];

    if (Boolean(token)) {
      try {
        const user = <JwtPayload>(
          jwt.verify(token, this.config.environment.secretKey)
        );
        const role: UserRole = user.role;
        if (roles.includes(role)) {
          Logger.log(
            `${request.route['stack'][0].method} ${request.originalUrl} authorized`
          );
          request.user = user;
          return true;
        }
      } catch (err) {
        Logger.log(
          `${request.route['stack'][0].method} ${request.originalUrl} unauthorized bad token`
        );
        throw new HttpException(
          {
            status: HttpStatus.UNAUTHORIZED,
            error: err,
          },
          401
        );
      }
    }
    Logger.log(
      `${request.route['stack'][0].method} ${request.originalUrl} unauthorized no token`
    );
    return false;
  }
}

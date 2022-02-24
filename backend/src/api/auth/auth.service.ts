import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '~/shared/config/config.service';
import { User } from '../users/interfaces/user.interface';
import { UserService } from '../users/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { CreateUserDto } from '~/api/auth/dto/create-user.dto';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SigninUserDto } from '~/api/auth/dto/signin-user.dto';
import { IUserService } from '~/api/users/interfaces/user.serive.interface';
import { IAuthService } from '~/api/auth/interfaces/auth.service.interface';
import { IConfigService } from '~/shared/config/config.service.interface';

@Injectable()
export class AuthService implements IAuthService {
  private readonly saltRounds: number = 11;
  private readonly tokenLifeTime: string | number = '30d';

  constructor(
    @Inject(UserService) private userService: IUserService,
    @Inject(ConfigService) private config: IConfigService
  ) {}

  public async signUp(user: CreateUserDto): Promise<User> {
    user.password = await hash(user.password, this.saltRounds);
    return await this.userService.create(user);
  }

  public async signIn({
    email,
    password,
  }: SigninUserDto): Promise<User | null> {
    const user = await this.userService.findForAuth(email);
    if (!user) {
      return null;
    }
    const match = await compare(password, user.hashPassword);
    if (!match) {
      return null;
    }
    return user;
  }

  public async createToken(jwtPayload: JwtPayload): Promise<string> {
    return sign(jwtPayload, this.config.environment.secretKey, {
      expiresIn: this.tokenLifeTime,
    });
  }
}

import { CreateUserDto } from '~/api/auth/dto/create-user.dto';
import { User } from '~/api/users/interfaces/user.interface';
import { SigninUserDto } from '~/api/auth/dto/signin-user.dto';
import { JwtPayload } from '~/api/auth/interfaces/jwt-payload.interface';

export interface IAuthService {
  signUp(user: CreateUserDto): Promise<User>;
  signIn({ email, password }: SigninUserDto): Promise<User | null>;
  createToken(jwtPayload: JwtPayload): Promise<string>;
}

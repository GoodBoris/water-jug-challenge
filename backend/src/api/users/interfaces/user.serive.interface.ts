import { CreateUserDto } from '~/api/auth/dto/create-user.dto';
import { User } from '~/api/users/interfaces/user.interface';

export interface IUserService {
  create({ pseudo, password, email }: CreateUserDto): Promise<User>;

  findForAuth(email: string): Promise<User | undefined>;

  findByEmail(email: string): Promise<User | undefined>;

  findMe(userId: number): Promise<Omit<User, 'hashPassword'> | undefined>;
}

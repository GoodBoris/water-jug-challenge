import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';
import { UserRole } from '~/api/users/enums/user-role';
import { CreateUserDto } from '~/api/auth/dto/create-user.dto';
import { IUserService } from '~/api/users/interfaces/user.serive.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  public async create({
    pseudo,
    password,
    email,
  }: CreateUserDto): Promise<User> {
    const userEntity = new UserEntity();

    userEntity.pseudo = pseudo;
    userEntity.hashPassword = password;
    userEntity.email = email;
    userEntity.role = UserRole.User;

    return await this.userRepository.save(userEntity);
  }

  public async findForAuth(email: string): Promise<User | undefined> {
    return await this.userRepository
      .createQueryBuilder('user')
      .select([
        'user.password',
        'user.email',
        'user.id',
        'user.role',
        'user.pseudo',
      ])
      .where('user.email = :email', { email: email })
      .getOne();
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  public async findMe(
    userId: number
  ): Promise<Omit<User, 'hashPassword'> | undefined> {
    return await this.userRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.email', 'user.role', 'user.pseudo'])
      .where('user.id = :userId', { userId })
      .getOne();
  }
}

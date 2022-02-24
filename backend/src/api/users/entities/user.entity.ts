import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  BaseEntity,
} from 'typeorm';
import { User } from '../interfaces/user.interface';
import { UserRole } from '~/api/users/enums/user-role';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity('user')
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  @IsNotEmpty()
  @IsString()
  pseudo: string;

  @Column({ length: 256 })
  @Index({ unique: true })
  @IsNotEmpty()
  @IsString()
  email: string;

  @Column({ select: false, length: 512 })
  @IsNotEmpty()
  @IsString()
  hashPassword: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.User })
  role: UserRole;

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;
}

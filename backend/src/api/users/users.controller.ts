import { Controller, Get, Inject } from '@nestjs/common';
import { AuthUser } from '~/shared/decorators/auth-user.decorator';
import { Roles } from '~/shared/decorators/roles.decorators';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';
import { availableUserRoles } from '~/shared/utils/user-roles';
import { IUserService } from '~/api/users/interfaces/user.serive.interface';

@Controller('users')
export class UsersController {
  constructor(@Inject(UserService) private userService: IUserService) {}

  @Get('me')
  @Roles(availableUserRoles)
  async getMe(
    @AuthUser() user: JwtPayload
  ): Promise<Omit<User, 'hashPassword'> | undefined> {
    return await this.userService.findMe(user.id);
  }
}

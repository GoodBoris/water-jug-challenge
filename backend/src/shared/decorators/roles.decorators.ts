import { SetMetadata } from '@nestjs/common';
import { UserRole } from '~/api/users/enums/user-role';

export const Roles = (roles: UserRole[]) => SetMetadata('roles', roles);

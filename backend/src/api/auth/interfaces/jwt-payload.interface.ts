import { UserRole } from '~/api/users/enums/user-role';

export interface JwtPayload {
  id: number;
  email: string;
  role: UserRole;
}

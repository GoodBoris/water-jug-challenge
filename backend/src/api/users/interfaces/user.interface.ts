import { UserRole } from '~/api/users/enums/user-role';

export interface User {
  id: number;
  pseudo: string;
  email: string;
  hashPassword: string;
  role: UserRole;
}

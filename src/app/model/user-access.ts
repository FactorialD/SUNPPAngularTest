import {User} from './user';
import {Role} from './role';
import {Service} from './service';
import {Department} from './department';

export class UserAccess {
  id: string;
  user: User;
  role: Role;
  service: Service;
  department: Department | null;
}

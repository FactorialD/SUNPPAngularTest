import {User} from './user';
import {Role} from './role';

export class Service {
  id: string;
  name: string;
  ownerUser: User;
  avaliableRoles: Role[];
}

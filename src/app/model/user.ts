import {UserAccess} from './user-access';

export class User {
  id: string;
  login: string;
  roles: UserAccess[];
}

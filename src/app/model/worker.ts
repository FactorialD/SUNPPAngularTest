import {Department} from './department';
import {User} from './user';
import {Position} from './position';

export class Worker {
  id: string;
  fullname: string;
  department: Department;
  position: Position;
  users: User[];
}

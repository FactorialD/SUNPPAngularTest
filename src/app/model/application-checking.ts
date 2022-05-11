import {Role} from './role';
import {User} from './user';
import {CheckType} from './check-type';

export class ApplicationChecking {
  id: string;
  checkYesNoNull: boolean | null;
  checkingDate: Date | null;
  note: string | null;
  checkType: CheckType;
  role: Role;
  user: User | null;
}

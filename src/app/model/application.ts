import {User} from './user';
import {Service} from './service';
import {Department} from './department';
import {ApplicationChecking} from './application-checking';

export class Application {
  id: string;
  applicant: User;
  service: Service;
  department: Department | null;
  creationDate: Date;
  checkings: ApplicationChecking[];
}

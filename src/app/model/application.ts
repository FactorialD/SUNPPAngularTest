import {User} from './user';
import {Service} from './service';
import {Department} from './department';
import {ApplicationChecking} from './application-checking';

/**
 * Клас за зберігання даних заявок
 */
export class Application {
  /**
   * Ідентифікатор заявки
   */
  id: string;

  /**
   * Користувач-заявляч
   */
  applicant: User;

  /**
   * Сервіс, доступ до якого потрібен
   */
  service: Service;

  /**
   * Підрозділ для доступу (опціонально)
   */
  department: Department | null;

  /**
   * Дата створення
   */
  creationDate: Date;

  /**
   * Список перевірок заявки
   * Див. {@link ApplicationChecking}
   */
  checkings: ApplicationChecking[];
}

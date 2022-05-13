import {User} from './user';
import {Role} from './role';
import {Service} from './service';
import {Department} from './department';

/**
 * Зберігає записи ролей користувача
 */
export class UserAccess {

  /**
   * Ідентифікатор запису доступу
   */
  id: string;

  /**
   * Користувач, що має доступ
   */
  user: User;

  /**
   * Роль, яку має користувач
   */
  role: Role;

  /**
   * Сервіс, доступ до якого має користувач
   */
  service: Service;

  /**
   * Підрозділ (опціонально), в межах якого отриманий доступ
   */
  department: Department | null;
}

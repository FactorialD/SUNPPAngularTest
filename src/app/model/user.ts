import {UserAccess} from './user-access';

/**
 * Клас відповідає за дані користувача
 */
export class User {

  /**
   * Ідентифікатор користувача
   */
  id: string;

  /**
   * Логін користувача
   */
  login: string;

  /**
   * Записи доступу користувача
   * Див. {@link UserAccess}
   */
  roles: UserAccess[];
}

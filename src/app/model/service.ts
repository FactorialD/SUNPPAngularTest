import {User} from './user';
import {Role} from './role';

/**
 * Клас зберігає сервіс
 */
export class Service {

  /**
   * Ідентифікатор сервісу
   */
  id: string;

  /**
   * Назва сервісу
   */
  name: string;

  /**
   * Власник сервісу
   */
  ownerUser: User;

  /**
   * Доступні ролі для цього сервісу
   */
  avaliableRoles: Role[];
}

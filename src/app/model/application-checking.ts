import {Role} from './role';
import {User} from './user';
import {CheckType} from './check-type';

/**
 * Клас зберігає дані записів перевірок для заявок
 */
export class ApplicationChecking {
  /**
   * Ідентифікатор запису заявки
   */
  id: string;

  /**
   * Зберігає факт перевірки заявки
   * якщо null то заявка ще не перевірялась, true - то заявка прийнята, false - то заявка відхилена
   */
  checkYesNoNull: boolean | null;

  /**
   * Дата перевірки
   */
  checkingDate: Date | null;

  /**
   * Коментар (опціонально)
   */
  note: string | null;

  /**
   * Тип перевірки
   * Див. {@link CheckType}
   */
  checkType: CheckType;

  /**
   * Роль користувача @user
   * Див. {@link Role}
   */
  role: Role;

  /**
   * Якщо @checkType це запис користувача, то це заявляч, якщо @checkType це запис перевірки, то це користувач, що перевіряє
   */
  user: User | null;
}

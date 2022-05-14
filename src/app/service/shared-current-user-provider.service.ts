import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})

/**
 * Сервіс, що працює з даними теперішнього користувача
 */
export class SharedCurrentUserProviderService {

  /**
   * Зберігає дані про теперішнього користувача
   * Нижче - аналог для обсервування
   */
  private currentUserData = new BehaviorSubject<User>(null);
  currentUser = this.currentUserData.asObservable();

  constructor() {  }

  /**
   * Змінює теперішнього користувача на нового
   * @param user новий користувач
   */
  chooseCurrentUser(user: User) {
    this.currentUserData.next(user);
  }

  /**
   * Повертає теперішнього користувача
   * Якщо теперішнього користувача немає, повертає null
   */
  getCurrentUser(): User | null {
    return this.currentUserData.getValue();
  }

  /**
   * Повертає список ролей (що не повторюються), для теперішнього користувача
   */
  getUniqueRoles(): string[] {
    const uniqueRoles: string[] = [];
    for (const role of this.currentUserData.getValue().roles) {
      if (!uniqueRoles.includes(role.role.name)) {
        uniqueRoles.push(role.role.name);
      }
    }
    return uniqueRoles;
  }

}

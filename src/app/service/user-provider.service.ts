import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

/**
 * Сервіс, що працює з даними користувачів
 */
@Injectable()
export class UserProviderService {

  /**
   * Url для отримання всіх користувачів
   */
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/admin/user/all';
  }

  /**
   * Повертає всіх користувачів
   */
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  /**
   * Повертає істину, якщо користувач має роль власника
   * @param user користувач
   */
  isUserOwner(user: User) {
    for (const role of user.roles) {
      if (role.role.name === 'Власник') {
        return true;
      }
    }
    return false;
  }

  /**
   * Повертає істину, якщо користувач має роль адміна
   * @param user користувач
   */
  isUserAdmin(user: User) {
    for (const role of user.roles) {
      if (role.role.name === 'Адміністратор') {
        return true;
      }
    }
    return false;
  }
}

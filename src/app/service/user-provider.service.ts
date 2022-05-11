import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserProviderService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/admin/user/all';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  isUserOwner(user: User){
    for (const role of user.roles) {
      if (role.role.name === 'Власник') {
        return true;
      }
    }
    return false;
  }

  isUserAdmin(user: User){
    for (const role of user.roles) {
      if (role.role.name === 'Адміністратор') {
        return true;
      }
    }
    return false;
  }
}

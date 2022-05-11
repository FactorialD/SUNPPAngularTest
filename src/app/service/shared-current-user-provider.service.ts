import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from '../model/user';
import {Application} from '../model/application';

@Injectable({
  providedIn: 'root'
})
export class SharedCurrentUserProviderService {

  private currentUserData = new BehaviorSubject<User>(null);
  currentUser = this.currentUserData.asObservable();

  private lastApplicationData = new BehaviorSubject<Application>(null);
  lastApplication = this.lastApplicationData.asObservable();

  constructor() {  }

  chooseCurrentUser(user: User) {
    this.currentUserData.next(user);

  }

  setLastApplication(application: Application) {
    this.lastApplicationData.next(application);

  }


  getCurrentUser(): User | null {
    return this.currentUserData.getValue();
  }

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

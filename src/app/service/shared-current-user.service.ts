import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SharedCurrentUserService {

  private currentUserData = new BehaviorSubject<User>(null);
  currentUser = this.currentUserData.asObservable();

  constructor() {  }

  chooseCurrentUser(user: User) {
    this.currentUserData.next(user);

  }

}

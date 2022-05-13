import {Component, OnInit} from '@angular/core';
import { User } from '../../model/user';
import {UserProviderService} from '../../service/user-provider.service';
import {SharedCurrentUserProviderService} from '../../service/shared-current-user-provider.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})

/**
 * Клас відповідає за компонент зі списком користувачів
 */
export class UserListComponent implements OnInit {

  /**
   * Список усіх користувачів
   */
  users: User[];
  /**
   * Вибраний теперішній користувач
   */
  currentUser: User;

  constructor(private userService: UserProviderService,
              private sharedCurrentUserService: SharedCurrentUserProviderService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.sharedCurrentUserService.currentUser.subscribe(data => {
      this.currentUser = data;
    });

  }

  /**
   * Викликає метод сервісу для зміни вибраного користувача
   * @param event подія
   * @param user користувач, який має бути вибраний
   */
  chooseCurrentUser(event, user: User) {
    this.sharedCurrentUserService.chooseCurrentUser(user);
  }



}


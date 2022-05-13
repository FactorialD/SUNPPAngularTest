import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../model/user';
import {UserProviderService} from '../../service/user-provider.service';
import {SharedCurrentUserProviderService} from '../../service/shared-current-user-provider.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html'
})

/**
 * Клас відповідає за компонент з теперішнім користувачем
 */
export class CurrentUserComponent implements OnInit {

  /**
   * Зберігає теперішнього користувача в системі
   */
  currentUser: User;

  constructor(private userService: UserProviderService,
              private sharedCurrentUserService: SharedCurrentUserProviderService) { }

  ngOnInit() {
    this.sharedCurrentUserService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }
}

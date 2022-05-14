import {AfterViewInit, Component, ViewChild } from '@angular/core';
import {UserListComponent} from './component/user-list/user-list.component';
import {User} from './model/user';
import {SharedCurrentUserProviderService} from './service/shared-current-user-provider.service';
import {UserProviderService} from './service/user-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Клас відповідає за головний компонент
 */
export class AppComponent implements AfterViewInit {

  /**
   * Заголовок сайту
   */
  title = 'SUNPP Test Site';

  /**
   * Теперішній користувач, копія обсервуємої змінної з {@link SharedCurrentUserProviderService}
   */
  currentUser: User;

  constructor(private currentUserService: SharedCurrentUserProviderService,
              private userService: UserProviderService) {
  }

  @ViewChild(UserListComponent, {static: false}) userListComponent: UserListComponent;

  ngAfterViewInit(): void {
    this.currentUserService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

}

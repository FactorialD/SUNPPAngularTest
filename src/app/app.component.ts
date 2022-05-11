import {AfterViewInit, Component, ViewChild, ViewChildren} from '@angular/core';
import {UserListComponent} from './component/user-list/user-list.component';
import {CurrentUserComponent} from './component/current-user/current-user.component';
import {User} from './model/user';
import {SharedCurrentUserProviderService} from './service/shared-current-user-provider.service';
import {UserProviderService} from './service/user-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'SUNPP Test Site';

  currentUser: User;

  constructor(private currentUserService: SharedCurrentUserProviderService,
              private userService: UserProviderService) {
  }

  @ViewChild(UserListComponent, {static: false}) userListComponent: UserListComponent;
  // @ViewChildren(CurrentUserComponent) currentUserComponent: CurrentUserComponent;

  ngAfterViewInit(): void {
    this.currentUserService.currentUser.subscribe(data => {
      this.currentUser = data;
      // console.log('now current user is ', this.currentUser);
    });
  }

}

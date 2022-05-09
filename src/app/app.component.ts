import {Component, ViewChild} from '@angular/core';
import {UserListComponent} from './user-list/user-list.component';
import {CurrentUserComponent} from './current-user/current-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SUNPP Test Site';

  @ViewChild(UserListComponent, {static: false}) userListComponent: UserListComponent;
  @ViewChild(CurrentUserComponent, {static: false}) currentUserComponent: CurrentUserComponent;

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../model/user';
import {UserProviderService} from '../../service/user-provider.service';
import {SharedCurrentUserProviderService} from '../../service/shared-current-user-provider.service';
import {Application} from '../../model/application';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

  currentUser: User;
  constructor(private userService: UserProviderService,
              private sharedCurrentUserService: SharedCurrentUserProviderService) { }

  ngOnInit() {
    this.sharedCurrentUserService.currentUser.subscribe(data => {
      this.currentUser = data;
      console.log('now current user is ', this.currentUser);
    });

  }
}

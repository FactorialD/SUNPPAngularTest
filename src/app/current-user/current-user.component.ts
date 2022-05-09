import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../model/user';
import {UserServiceService} from '../service/user-service.service';
import {SharedCurrentUserService} from '../service/shared-current-user.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

  currentUser: User;
  constructor(private userService: UserServiceService, private sharedCurrentUserService: SharedCurrentUserService) { }

  ngOnInit() {
    this.sharedCurrentUserService.currentUser.subscribe(data => {
      this.currentUser = data;
      console.log('now current user is ', this.currentUser);
    });
  }



}

import {Component, OnInit, ViewChild} from '@angular/core';
import { User } from '../model/user';
import {UserServiceService} from '../service/user-service.service';
import {SharedCurrentUserService} from '../service/shared-current-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  currentUser: User;

  constructor(private userService: UserServiceService, private sharedCurrentUserService: SharedCurrentUserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.sharedCurrentUserService.currentUser.subscribe(data => {
      this.currentUser = data;
    });

  }

  chooseCurrentUser(event, user: User) {
    this.sharedCurrentUserService.chooseCurrentUser(user);
  }



}


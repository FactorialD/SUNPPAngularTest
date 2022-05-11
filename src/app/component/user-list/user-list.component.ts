import {Component, OnInit, ViewChild} from '@angular/core';
import { User } from '../../model/user';
import {UserProviderService} from '../../service/user-provider.service';
import {SharedCurrentUserProviderService} from '../../service/shared-current-user-provider.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  currentUser: User;

  constructor(private userService: UserProviderService, private sharedCurrentUserService: SharedCurrentUserProviderService) {
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


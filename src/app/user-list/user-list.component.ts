import {Component, OnInit, ViewChild} from '@angular/core';
import { User } from '../model/user';
import {UserServiceService} from '../service/user-service.service';
import {CurrentUserComponent} from '../current-user/current-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  @ViewChild(CurrentUserComponent, {static: false}) currentUserComponent: CurrentUserComponent;

  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }



}


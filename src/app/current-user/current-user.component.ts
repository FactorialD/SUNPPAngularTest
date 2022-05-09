import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../model/user';
import {UserServiceService} from '../service/user-service.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

  currentUser: User;
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.currentUser = null;
  }

  chooseCurrentUser(event, user: User) {
    this.currentUser = user;
  }

  // @Output() currentUserEmitter = new EventEmitter<User>();
  // getCurrentUser() {
  //   this.currentUserEmitter.emit(this.currentUser);
  // }

}

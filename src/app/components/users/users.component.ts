import {Component, OnInit} from '@angular/core';
import {User} from "../../model/models";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUser();
  }
  isValid: boolean = false;
  check(valid: boolean){
    this.isValid = valid;
  }
  isStored(user: User) {
    const changeUsers = localStorage.getItem('changeUsers');
    let changeUsersArr = [];
    if (changeUsers) {
      changeUsersArr = JSON.parse(changeUsers);
    }
    return changeUsersArr.some((el: User) => el.name === user.name);
  }

  getUser() {
    this.usersService.getUsers().subscribe((data) => {
      // console.log(data);
      this.users = data;
    });
  }

  storeUser(user: User) {
    const changeUsers = localStorage.getItem('changeUsers');
    let changeUsersArr = [];
    if (changeUsers) {
      changeUsersArr = JSON.parse(changeUsers);
    }
    const found = changeUsersArr.some((el: User) => el.name === user.name)
    if (!found) {
      changeUsersArr.push(user);
    }
    localStorage.setItem('changeUsers', JSON.stringify(changeUsersArr))
    this.check(true);
  }

  removeUser(user: User) {
    if (user !== undefined) {

      const changeUsers = JSON.parse(<string>localStorage.getItem('changeUsers')) || [];
      changeUsers.forEach((value: User, index: number) => {
        if (value.name == user.name) {
          changeUsers.splice(index, 1);
        }
      });
      localStorage.setItem('changeUsers', JSON.stringify(changeUsers));
    }
    this.check(false);
  }
}

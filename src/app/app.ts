import { Component } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy.user';
import { Task } from "./task/task";
@Component({
  selector: 'app-root',
  imports: [Header, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  Users=DUMMY_USERS;
  selectUserId='';

  get selectedUser(){
    return this.Users.find((user)=>user.id===this.selectUserId);
  }
  onSelectEvent(id:string){
    this.selectUserId=id;
  }
}

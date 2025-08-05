import { Component, EventEmitter, input, Input, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User {
  @Input() id!:string;
   @Input() name!:String;
   @Output() select=new EventEmitter();
  onSelectUser(){
    this.select.emit(this.id);
  }
}

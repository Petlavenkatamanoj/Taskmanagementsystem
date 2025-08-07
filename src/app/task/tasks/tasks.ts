import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Task{
   id:string;
   userId:string;
   title:string;
   summary:string;
   dueDate:string;
}
@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
 @Input({required:true})  taskUser?:Task;
 @Output() complete =new EventEmitter<string>();

  onSelectedUserTask(){
     this.complete.emit(this.taskUser!.id);
 }
}

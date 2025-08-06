import { Component, Input } from '@angular/core';

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
 @Input({required:true})  taskUser!:Task;
}

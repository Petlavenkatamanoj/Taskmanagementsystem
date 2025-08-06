import { Component ,Input} from '@angular/core';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-task',
  imports: [Tasks],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
 @Input() name!:string;
 @Input({required:true}) userId!:string;
tasks = [
  {
    id: 't1',
    userId: 'ul',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31' 
  },
  {
    id: 't2',
    userId: 'u1',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31'
  },
  {
    id: 't3',
    userId: 'u2',
    title: 'done by manoj',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2025-08-06'
  }
];

   get selectedUserTasks(){
    return this.tasks.filter((task)=>task.userId===this.userId);
   }
}
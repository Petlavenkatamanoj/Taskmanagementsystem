import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addTaskType } from '../tasks.model';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
 enteredTitle='';
 enteredSummary='';
 entereddate='';
   @Output() add=new EventEmitter<addTaskType>();
   @Output() cancel=new EventEmitter<void>()
  onCancel(){
    this.cancel.emit()
  }
  onSubmit(){
    this.add.emit({title:this.enteredTitle,summary:this.enteredSummary,data:this.entereddate});
  }
}

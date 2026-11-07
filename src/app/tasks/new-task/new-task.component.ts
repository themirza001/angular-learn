import { Component, EventEmitter, NgModule, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { DUMMY_TASKS } from '../../dummy-tasks';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() closeNewTaskDialog = new EventEmitter();
  @Output() newTask = new EventEmitter<NewTask>();

  enteredTitle: string = "";
  enteredSummary: string = "";
  enteredDate: string = "";

  handleNewTaskDialogClose() {
    this.closeNewTaskDialog.emit()
  }
  handleNewTaskAddition() {
    this.newTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    })
  }

}

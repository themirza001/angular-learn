import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string
  users = DUMMY_USERS;
  tasks: Task[] = DUMMY_TASKS;
  isAddingTask: boolean = false;

  get selectedUserName(): string | undefined {
    const user = this.users.find((u) => u.id === this.selectedUserId);
    return user ? user.name : undefined;
  }

  get currUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.selectedUserId);
  }

  onTaskCompletion(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
  }

  handleTaskCreation() {
    this.isAddingTask = true
  }

  handleNewTaskDialogClose() {
    this.isAddingTask = false
  }
}

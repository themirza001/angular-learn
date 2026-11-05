import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string
  users = DUMMY_USERS;
  tasks: Task[] = DUMMY_TASKS;

  get selectedUserName(): string | undefined {
    const user = this.users.find((u) => u.id === this.selectedUserId);
    return user ? user.name : undefined;
  }

  get currUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.selectedUserId);
  }

}

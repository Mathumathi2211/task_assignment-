
import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  task: Task = { id: Date.now(), title: '', description: '', status: 'To Do' };

  constructor(private taskService: TaskService) { }

  addTask() {
    this.taskService.addTask({ ...this.task, id: Date.now() });
    this.task = { id: Date.now(), title: '', description: '', status: 'To Do' };
  }
}

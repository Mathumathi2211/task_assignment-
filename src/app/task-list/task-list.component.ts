
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(t => this.tasks = t);
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
}

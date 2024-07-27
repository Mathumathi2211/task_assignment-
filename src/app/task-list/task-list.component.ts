import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';

// interface Task {
//   id: number;
//   title: string;
//   description: string;
//   status: string;
// }

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  updateStatus(task: any) {
    this.taskService.updateTask(task).subscribe(() => this.loadTasks());
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => this.loadTasks());
  }
}
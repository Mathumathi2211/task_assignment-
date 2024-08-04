
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {

  constructor(private taskService: TaskService) { }

  filterTasks(event: any) {
    // status = 'All' | 'To Do' | 'In Progress' | 'Done'
    if (event && event.target && event.target.value)
      this.taskService.filterTasks(event.target.value);
  }
}

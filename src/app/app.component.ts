import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'To Do' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'In Progress' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'Done' },    
    { id: 4, title: 'Task 4', description: 'Description for Task 4', status: 'Done' }
  ];
  filteredTasks: Task[] = this.tasks;

  onFilterChanged(status: string) {
    if (status === 'All') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(task => task.status === status);
    }
  }
}
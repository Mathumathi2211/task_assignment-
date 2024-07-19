import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';

interface Task {
  title: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-task-form',
  templateUrl: '/task-form.component.html',
  styleUrls: ['/task-form.component.scss']
})
export class TaskFormComponent {

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl('To Do')
  });

  constructor(private taskService: TaskService) {}

  onSubmit() {
    if (!this.taskForm) {
      alert('Title is required!');
      return;
    }
    const newTask = { title: this.taskForm.controls.title, description: this.taskForm.controls.description, status: this.taskForm.controls.status };
    this.taskService.addTask(newTask).subscribe(() => {
      this.taskForm.controls.title.setValue('');
      this.taskForm.controls.description.setValue('');
      this.taskForm.controls.status.setValue('To Do');
    });
  }
}
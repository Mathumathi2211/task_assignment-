// src/app/task.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  getTasks() {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  updateTask(updatedTask: Task) {
    this.tasks = this.tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.tasksSubject.next(this.tasks);
  }

  filterTasks(status: 'All' | 'To Do' | 'In Progress' | 'Done') {
    if (status === 'All') {
      this.tasksSubject.next(this.tasks);
    } else {
      this.tasksSubject.next(this.tasks.filter(task => task.status === status));
    }
  }
}

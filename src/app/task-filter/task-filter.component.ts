import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss']
})
export class TaskFilterComponent {
  
  @Output() filterChanged = new EventEmitter<string>();
  selectedStatus: string = 'All';

  onSelectFilter() {
    this.filterChanged.emit(this.selectedStatus);
  }
}
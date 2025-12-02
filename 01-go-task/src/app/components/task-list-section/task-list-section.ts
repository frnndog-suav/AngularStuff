import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TTask } from '../../type/task';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list-section',
  imports: [TaskCard, CdkDropList, CdkDrag, AsyncPipe],
  templateUrl: './task-list-section.html',
  styleUrl: './task-list-section.css',
})
export class TaskListSection {
  private readonly _taskService = inject(TaskService);
  readonly todoTasks$ = this._taskService.todoTasks;
  readonly doneTasks$ = this._taskService.doneTasks;
  readonly doingTasks$ = this._taskService.doingTasks;

  drop(event: CdkDragDrop<TTask[] | null>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data ?? [], event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data ?? [],
        event.container.data ?? [],
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

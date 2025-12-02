import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TASK_STATUS, TTaskStatus } from '../../enums/task-status';
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
  readonly _taskService = inject(TaskService);

  onCardDrop(event: CdkDragDrop<TTask[]>) {
    this.moveCardToColumn(event);

    const taskId = event.item.data.id;
    const taskCurrentStatus = event.item.data.status;
    const droppedColumn = event.container.id;

    this.updateTaskStatus(taskId, taskCurrentStatus, droppedColumn);
  }

  private updateTaskStatus(taskId: string, taskCurrentStatus: TTaskStatus, droppedColumn: string) {
    let taskNextStatus: TTaskStatus;

    switch (droppedColumn) {
      case 'to-do-column':
        taskNextStatus = TASK_STATUS.TODO;
        break;
      case 'doing-column':
        taskNextStatus = TASK_STATUS.DOING;
        break;
      case 'done-column':
        taskNextStatus = TASK_STATUS.DONE;
        break;
      default:
        throw new Error('Coluna desconhecida');
    }

    this._taskService.updateTaskStatus(taskId, taskCurrentStatus, taskNextStatus);
  }

  private moveCardToColumn(event: CdkDragDrop<TTask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

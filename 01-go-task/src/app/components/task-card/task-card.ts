import { Component, inject, Input } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';
import { TaskService } from '../../services/task.service';
import { TTask } from '../../type/task';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input({ required: true }) task!: TTask;

  private readonly _taskService = inject(TaskService);

  readonly _modalControllerService = inject(ModalControllerService);

  openModal() {
    const dialogRef = this._modalControllerService.openEditTaskModal({
      name: this.task.name,
      description: this.task.description,
    });

    dialogRef.closed.subscribe((taskForm) => {
      if (taskForm) {
        this._taskService.updateTaskNameAndDescription(
          this.task.id,
          this.task.status,
          taskForm.name,
          taskForm.description,
        );
      }
    });
  }

  openTaskCommentsModal() {
    this.task.comments = [
      {
        id: '1',
        description: '1111111111111111111111',
      },
      {
        id: '2',
        description: '2222222222222222222222',
      },
    ];
    this._modalControllerService.openTaskCommentsModal(this.task);
  }
}

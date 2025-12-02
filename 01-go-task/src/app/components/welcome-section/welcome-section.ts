import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.html',
  styleUrl: './welcome-section.css',
})
export class WelcomeSection {
  private readonly _taskService = inject(TaskService);
  private readonly _modalControllerService = inject(ModalControllerService);

  openModal() {
    const dialogRef = this._modalControllerService.openNewTaskModal();

    dialogRef.closed.subscribe((taskForm) => {
      if (taskForm) {
        this._taskService.addTask(taskForm);
      }
    });
  }
}

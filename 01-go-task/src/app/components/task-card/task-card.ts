import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  readonly _modalControllerService = inject(ModalControllerService);

  openModal() {
    const dialogRef = this._modalControllerService.openEditTaskModal({
      name: 'Nome da tarefa',
      description: 'Descrição da tarefa',
    });

    dialogRef.closed.subscribe((taskForm) => {
      console.log('edição taskForm', taskForm);
    });
  }
}

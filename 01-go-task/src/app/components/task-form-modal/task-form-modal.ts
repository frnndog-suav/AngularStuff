import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { MODAL_MODE, TTaskFormModalData } from '../../type/task-form-modal';

@Component({
  selector: 'app-task-form-modal',
  imports: [],
  templateUrl: './task-form-modal.html',
  styleUrl: './task-form-modal.css',
})
export class TaskFormModal {
  readonly _data: TTaskFormModalData = inject(DIALOG_DATA);
  readonly modalTitle = this._data.mode === MODAL_MODE.CREATE ? 'Criar tarefa' : 'Editar tarefa';
  readonly buttonLabel =
    this._data.mode === MODAL_MODE.CREATE ? 'Criar tarefa' : 'Salvar alterações';
}

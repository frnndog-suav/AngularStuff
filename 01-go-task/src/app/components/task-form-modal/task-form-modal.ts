import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MODAL_MODE, TTaskFormModalData } from '../../type/task-form-modal';

@Component({
  selector: 'app-task-form-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-modal.html',
  styleUrl: './task-form-modal.css',
})
export class TaskFormModal {
  readonly _data: TTaskFormModalData = inject(DIALOG_DATA);
  readonly modalTitle = this._data.mode === MODAL_MODE.CREATE ? 'Criar tarefa' : 'Editar tarefa';
  readonly buttonLabel =
    this._data.mode === MODAL_MODE.CREATE ? 'Criar tarefa' : 'Salvar alterações';

  taskForm: FormGroup = new FormGroup({
    name: new FormControl(this._data.formValues.name, [
      Validators.required,
      Validators.minLength(10),
    ]),
    description: new FormControl(this._data.formValues.description),
  });

  onFormSubmit() {}
}

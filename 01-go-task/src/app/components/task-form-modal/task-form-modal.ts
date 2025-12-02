import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MODAL_MODE } from '../../enums/modal-mode';
import { TTaskFormControls } from '../../type/task-form-controls';
import { TTaskFormModalData } from '../../type/task-form-modal';

@Component({
  selector: 'app-task-form-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-modal.html',
  styleUrl: './task-form-modal.css',
})
export class TaskFormModal {
  readonly _dialogRef = inject(DialogRef);
  readonly _data: TTaskFormModalData = inject(DIALOG_DATA);
  readonly modalTitle = this._data.mode === MODAL_MODE.CREATE ? 'Criar tarefa' : 'Editar tarefa';
  readonly buttonLabel =
    this._data.mode === MODAL_MODE.CREATE ? 'Criar tarefa' : 'Salvar alterações';

  taskForm: FormGroup = new FormGroup({
    description: new FormControl(this._data.formValues.description),
    name: new FormControl(this._data.formValues.name, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  onFormSubmit() {
    this.closeModal(this.taskForm.value);
  }

  closeModal(formValues: TTaskFormControls | undefined = undefined) {
    this._dialogRef.close(formValues);
  }
}

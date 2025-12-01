import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import { TaskCommentsModal } from '../components/task-comments-modal/task-comments-modal';
import { TaskFormModal } from '../components/task-form-modal/task-form-modal';
import { TTaskFormControls } from '../type/task-form-controls';
import { MODAL_MODE } from '../type/task-form-modal';

@Injectable({
  providedIn: 'root',
})
export class ModalControllerService {
  private readonly _dialog = inject(Dialog);
  private readonly _modalSizeOptions = {
    maxWidth: '620px',
    width: '95%',
  };

  openNewTaskModal() {
    return this._dialog.open<TTaskFormControls>(TaskFormModal, {
      ...this._modalSizeOptions,
      disableClose: true,
      data: {
        mode: MODAL_MODE.CREATE,
        formValues: { name: '', description: '' } satisfies TTaskFormControls,
      },
    });
  }

  openEditTaskModal(formValues: TTaskFormControls) {
    return this._dialog.open<TTaskFormControls>(TaskFormModal, {
      ...this._modalSizeOptions,
      disableClose: true,
      data: {
        formValues,
        mode: MODAL_MODE.EDIT,
      },
    });
  }

  openTaskCommentsModal() {
    return this._dialog.open(TaskCommentsModal, { ...this._modalSizeOptions });
  }
}

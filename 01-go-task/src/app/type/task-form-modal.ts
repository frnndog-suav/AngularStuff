import { MODAL_MODE } from '../enums/modal-mode';
import { TTaskFormControls } from './task-form-controls';

export type TTaskFormModalData = {
  formValues: TTaskFormControls;
  mode: keyof typeof MODAL_MODE;
};

import { TTaskFormControls } from './task-form-controls';

export const MODAL_MODE = {
  EDIT: 'edit',
  CREATE: 'create',
} as const;

export type TTaskFormModalData = {
  formValues: TTaskFormControls;
  mode: (typeof MODAL_MODE)[keyof typeof MODAL_MODE];
};

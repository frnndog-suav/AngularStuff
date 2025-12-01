export const MODAL_MODE = {
  CREATE: 'create',
  EDIT: 'edit',
} as const;

export type TTaskFormModalData = {
  mode: (typeof MODAL_MODE)[keyof typeof MODAL_MODE];
};
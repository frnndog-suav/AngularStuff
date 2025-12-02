export const TASK_STATUS = {
  TODO: 'to-do',
  DOING: 'doing',
  DONE: 'done',
} as const;

export type TTaskStatus = typeof TASK_STATUS[keyof typeof TASK_STATUS]
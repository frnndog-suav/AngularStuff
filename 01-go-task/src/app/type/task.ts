import { TASK_STATUS } from '../enums/task-status';
import { TComment } from './comment';

export type TTask = {
  id: string;
  name: string;
  description: string;
  comments: TComment[];
  status: keyof typeof TASK_STATUS;
};

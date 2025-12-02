import { TTaskStatus } from '../enums/task-status';
import { TComment } from './comment';

export type TTask = {
  id: string;
  name: string;
  description: string;
  comments: TComment[];
  status: TTaskStatus;
};

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TASK_STATUS } from '../enums/task-status';
import { TTask } from '../type/task';
import { TTaskFormControls } from '../type/task-form-controls';
import { generateUniqueIdWithTimestamp } from '../utils/generate-unique-id-with-timestamp';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private todoTasks$ = new BehaviorSubject<TTask[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable();
  private doingTasks$ = new BehaviorSubject<TTask[]>([]);
  readonly doingTasks = this.doingTasks$.asObservable();
  private doneTasks$ = new BehaviorSubject<TTask[]>([]);
  readonly doneTasks = this.doneTasks$.asObservable();

  addTask(task: TTaskFormControls): void {
    const newTask: TTask = {
      ...task,
      status: TASK_STATUS.TODO,
      id: generateUniqueIdWithTimestamp(),
      comments: [],
    };

    const currentList = this.todoTasks$.getValue();

    this.todoTasks$.next([...currentList, newTask]);
  }
}

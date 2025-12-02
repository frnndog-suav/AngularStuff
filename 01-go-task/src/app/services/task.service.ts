import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { TASK_STATUS, TTaskStatus } from '../enums/task-status';
import { TTask } from '../type/task';
import { TTaskFormControls } from '../type/task-form-controls';
import { generateUniqueIdWithTimestamp } from '../utils/generate-unique-id-with-timestamp';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private todoTasks$ = new BehaviorSubject<TTask[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable().pipe(map((tasks) => structuredClone(tasks)));
  private doingTasks$ = new BehaviorSubject<TTask[]>([]);
  readonly doingTasks = this.doingTasks$
    .asObservable()
    .pipe(map((tasks) => structuredClone(tasks)));
  private doneTasks$ = new BehaviorSubject<TTask[]>([]);
  readonly doneTasks = this.doneTasks$.asObservable().pipe(map((tasks) => structuredClone(tasks)));

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

  updateTaskStatus(
    taskId: string,
    taskCurrentStatus: TTaskStatus,
    taskNextStatus: TTaskStatus,
  ): void {
    const currentTaskList = this.getTaskListByStatus(taskCurrentStatus);
    const nextTaskList = this.getTaskListByStatus(taskNextStatus);
    const currentTask = currentTaskList.getValue().find((task) => task.id === taskId);

    if (currentTask) {
      currentTask.status = taskNextStatus;

      const currentTaskListWithoutTask = currentTaskList
        .value
        .filter((task) => task.id !== taskId);

      currentTaskList.next([...currentTaskListWithoutTask]);

      nextTaskList.next([...nextTaskList.value, currentTask]);
    }
  }

  private getTaskListByStatus(status: TTaskStatus) {
    const taskListObj = {
      [TASK_STATUS.TODO]: this.todoTasks$,
      [TASK_STATUS.DOING]: this.doingTasks$,
      [TASK_STATUS.DONE]: this.doneTasks$,
    };

    return taskListObj[status];
  }
}

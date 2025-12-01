import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TTask } from '../type/task';

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
}

import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { TTask } from '../../type/task';

@Component({
  selector: 'app-task-comments-modal',
  imports: [],
  templateUrl: './task-comments-modal.html',
  styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
  readonly _task: TTask = inject(DIALOG_DATA);
}

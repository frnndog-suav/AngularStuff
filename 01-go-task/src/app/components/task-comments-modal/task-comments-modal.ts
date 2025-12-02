import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TTask } from '../../type/task';

@Component({
  selector: 'app-task-comments-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments-modal.html',
  styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
  commentControl = new FormControl('', [Validators.required]);

  readonly _task: TTask = inject(DIALOG_DATA);

  onAddComment() {
    console.log('Comentário:', this.commentControl.value);
  }
}

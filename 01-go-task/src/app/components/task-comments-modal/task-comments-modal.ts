import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TComment } from '../../type/comment';
import { TTask } from '../../type/task';
import { generateUniqueIdWithTimestamp } from '../../utils/generate-unique-id-with-timestamp';

@Component({
  selector: 'app-task-comments-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments-modal.html',
  styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
  taskCommentsChanged = false;
  commentControl = new FormControl('', [Validators.required]);

  readonly _task: TTask = inject(DIALOG_DATA);
  readonly _dialogRef: DialogRef<boolean> = inject(DialogRef);

  @ViewChild('commentInput') commentInputRef!: ElementRef<HTMLInputElement>;

  onAddComment() {
    const newComment: TComment = {
      id: generateUniqueIdWithTimestamp(),
      description: this.commentControl.value ?? '',
    };

    this._task.comments.unshift(newComment);

    this.commentControl.reset();

    this.taskCommentsChanged = true;

    this.commentInputRef.nativeElement.focus();
  }

  onCloseModal() {
    this._dialogRef.close(this.taskCommentsChanged);
  }

  onRemoveModal(commentId: string) {
    this._task.comments = this._task.comments.filter((comment) => comment.id !== commentId);
    this.taskCommentsChanged = true;
  }
}

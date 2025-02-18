import { DueDate } from "./DueDate";
import { TaskStatus } from "./TaskStatus";
import { TaskTitle } from "./TaskTitle";

export class Task {
  private readonly id: string;
  private title: TaskTitle;
  private dueDate: DueDate;
  private status: TaskStatus;

  // taskの完了
  complete(): void {
    this.status = TaskStatus.DONE;
  }

  // 戻す
  reopen(): void {
    this.status = TaskStatus.TODO;
  }

  // titleの変更をしたい
  updateTitles(newTitle: TaskTitle): void {
    this.title = newTitle;
  }

  // 期限の変更をしたい
  updateDueDate(newDueDate: DueDate): void {
    this.dueDate = newDueDate;
  }

  isOverdue(): boolean {
    return this.status === TaskStatus.TODO && this.dueDate.isOverDue();
  }
}

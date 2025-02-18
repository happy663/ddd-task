import { DueDate, Task, TaskStatus, TaskTitle } from "./domain/model/task";

const task = new Task(
  "1",
  new TaskTitle("引越し作業"),
  new DueDate(new Date()),
  TaskStatus.TODO,
);

task.complete();

task.updateTitles(new TaskTitle("引越しの手伝い"));

import { Task } from "../../../domain/model/task";
import { TaskRepository } from "../../../domain/repository/task/TaskRepository";

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Map<string, Task> = new Map();

  findById(id: string): Promise<Task | null> {
    const task = this.tasks.get(id);

    return Promise.resolve(task || null);
  }

  save(task: Task): Promise<void> {
    console.log("hoge");
    this.tasks.set(task.getId(), task);
    return Promise.resolve();
  }
}

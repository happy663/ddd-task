import { Task } from "../../model/task/Task";

export interface TaskRepository {
  // 検索
  findById(id: string): Promise<Task | null>;

  // 保存
  save(task: Task): Promise<void>;
}

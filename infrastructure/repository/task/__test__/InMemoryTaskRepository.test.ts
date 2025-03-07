import { Task } from "../../../../domain/model/task/Task";
import { TaskTitle } from "../../../../domain/model/task/TaskTitle";
import { DueDate } from "../../../../domain/model/task/DueDate";
import { InMemoryTaskRepository } from "../InMemoryTaskRepository";
import { TaskStatus } from "../../../../domain/model/task";

describe("InMemoryTaskRepository", () => {
  let repository: InMemoryTaskRepository;

  // 各テストの前に実行
  beforeEach(() => {
    repository = new InMemoryTaskRepository();
  });

  describe("save and findById", () => {
    it("should save and find a task", async () => {
      // テスト用のタスクを作成
      const task = new Task(
        "task-1",
        new TaskTitle("テストタスク"),
        new DueDate(new Date("2025-12-31")),
        TaskStatus.TODO,
      );

      // タスクを保存
      await repository.save(task);

      // 保存したタスクを検索
      const found = await repository.findById("task-1");

      // 検索結果の検証
      expect(found).not.toBeNull();
      expect(found?.getId()).toBe("task-1");
    });

    it("should return null when task not found", async () => {
      // 存在しないIDで検索
      const found = await repository.findById("non-existent");

      // null が返ることを確認
      expect(found).toBeNull();
    });
  });
});

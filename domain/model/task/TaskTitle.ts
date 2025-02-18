// 値オブジェクト(不変)

class TaskTitle {
  private readonly value: string;

  constructor(value: string) {
    // タイトルが存在しないのは不正な値

    if (value.trim().length === 0) {
      throw Error("タスクタイトルは必須です");
    }

    // タイトルは100文字以内です
    if (value.trim().length > 100) {
      throw Error("タスクタイトルは100文字以内にする必要があります。");
    }

    this.value = value;
  }

  equals(other: TaskTitle) {
    return this.value === other.value;
  }

  toString(): string {
    return this.value.toString();
  }
}

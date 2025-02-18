export class DueDate {
  private readonly value: Date;

  // constructorでは値の正当性を確認する
  constructor(value: Date) {
    // 期限日を現在より前に設定できない
    if (value < new Date()) {
      throw Error("期限日は現在より前には設定できません");
    }
  }

  // 等価性を確認
  equals(other: Date): boolean {
    return this.value === other;
  }

  // 文字列に変換する関数
  toString(): string {
    return this.value.toISOString();
  }

  // 期限切れがどうかをチェックする機能
  isOverDue(): boolean {
    return this.value < new Date();
  }
}

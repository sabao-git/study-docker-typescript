# Day2：TypeScript 型チェック / union / typeof / オーバーロード

## 今日やったこと
- TypeScriptの型チェックの考え方を学習
- union型（string | number）の意味を理解
- typeof を使って値の種類ごとに処理を分ける方法を確認
- 関数オーバーロードの役割を理解
- 動作確認用に double.ts を作成した

---

## 作成したファイル

### double.ts
文字列・数値のどちらでも呼び出せる関数を作成し、
console.log で結果を確認した。

```ts
// オーバーロード（型の宣言）
function double(value: number): number;
function double(value: string): string;

// 実装（実際に動く処理）
function double(value: string | number) {
  if (typeof value === "number") {
    return value * 2;
  }
  return value.repeat(2);
}

// 動作確認
const numResult = double(5);
console.log("number:", numResult);

const strResult = double("hi");
console.log("string:", strResult);

console.log("number toFixed:", numResult.toFixed(1));
console.log("string repeat:", strResult.repeat(2));

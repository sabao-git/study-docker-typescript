// double.ts

// オーバーロード（型の説明）
function double(value: number): number;
function double(value: string): string;

// 実装（実際に動く処理）
function double(value: string | number) {
    if (typeof value === "number") {
        return value * 2;
    }

    return value.repeat(2);
}

// ===== 動作確認 =====

// 数値で呼び出し
const numResult = double(5);
console.log("number:", numResult);

// 文字列で呼び出し
const strResult = double("hi");
console.log("string:", strResult);

// 型ごとの操作も確認
console.log("number toFixed:", numResult.toFixed(1));
console.log("string repeat:", strResult.repeat(2));
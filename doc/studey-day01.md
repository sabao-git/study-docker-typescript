# Day1：Docker + TypeScript 学習ログ

## 1. Dockerでの環境構築

- Dockerfile と docker-compose.yml を使って Node.js 環境を構築
- ローカルに Node.js をインストールせず、コンテナ内で完結することを理解
- tsx watch により、ファイル保存時に自動で再実行されることを確認

---

## 2. TypeScriptの基本

- 関数の引数に型を書く意味を学習  
  例：`count: number`
- 戻り値の型は「この関数が何を返すかの約束」であることを理解
- 型が合わない場合はコンパイルエラーになることを確認

```ts
function repeatHello(count: number): string {
  return ("hello\n").repeat(count);
}
3. JavaScript / TypeScriptの基礎理解
"文字列".repeat(number) は String が持つメソッドであること

ドット（.）は「その値が持っている機能を使う」という意味

console.log の出力は Docker コンテナのターミナルに表示される

4. Git / GitHub の基礎
git init → add → commit → push の基本的な流れを理解

README を GitHub に反映するには commit + push が必要

GitHub のブラウザで編集した場合、ローカルでは git pull が必要

学習内容は README と docs/ にまとめる方針にした
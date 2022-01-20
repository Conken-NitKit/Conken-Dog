## URLs
- Production URL: https://conken-dog.netlify.app/
- Hosing Service: https://app.netlify.com/sites/conken-dog/overview

## プロジェクトのクローン
```
$ git clone git@github.com:Conken-NitKit/Conken-Dog.git
$ npm i
```

## 実行
以下コマンドを実行後に [http://localhost:3000/](http://localhost:3000/) を開いて下さい。
```
$ npm run dev
```

## リント
以下コマンドを実行すると、該当ファイル（`.js`, `.jsx`, `.ts`, `.tsx`）に対してlintを行います。<br>
また、`git commit` 時にも自動でlintが実行されます。
```
$ npm run lint
```

## フォーマット
以下コマンドを実行すると、該当ファイル（`.js`, `.jsx`, `.ts`, `.tsx`）に対してformatを行います。<br>
また、`git commit` 時にも自動でformatが実行されます。
```
$ npm run format
```

## コミット時のプレフィックス（接頭辞）

| type     | description |
| -------- | --- |
| feat     | 新機能 |
| fix      | バグ修正 |
| refactor | リファクタリングのための変更（機能追加やバグ修正を含まない） |
| perf     | パフォーマンスの改善のための変更 |
| test     | 不足テストの追加や既存テストの修正 |
| style    | フォーマットの変更（コードの動作に影響しないスペース、フォーマット、セミコロンなど） |
| chore    | 雑事（コメントアウトの修正など）|
| docs     | ドキュメントのみの変更 |
| revert   | コミット取り消し（git revert） |

## アーキテクチャ

### コンポーネントのフォルダの構成

```
.
├- apis // 汎用的なコンポーネントを管理するディレクトリ
|    ├- gateways // 実際にAPI経由でデータの入出力を行う処理の実装を定義
|    |    └- gateway-sample.ts
|    └- infrastructures // APIを呼び出すために必要な前処理（ex.firebase用のクライアントの用意など）
|         └- client-sample.ts
|
├- components // 汎用的なコンポーネントを管理するディレクトリ
|    └- ComponentSample
|        ├- index.ts
|        ├- hooks.tsx
|        └- ComponentSample.tsx
|
├- constants // 定数を管理するディレクトリ（ex.曜日情報、メニュー情報など）
|    └- constantSample.ts
|
├- domains // ドメインを構成するコンポーネントを管理するディレクトリ
|    └- DomainSample
|        ├- index.ts
|        ├- hooks.tsx
|        └- DomainSample.tsx
|
├- entities // ビジネスを構築するモデルの型を管理するディレクトリ（ex.ユーザー情報など）
|    └- entity-sample.ts // 汎用的なモデル
|
├- hooks // グローバルで使える便利なカスタムHooks（ex.文字の入力管理など）
|    └- useSample.ts
|
├- layouts // 画面構成をここに記載
|    └- LayoutSample
|        ├- index.ts
|        └- LayoutSample.tsx
|
├- pages // ページを構成
|    ├- _app.tsx // 全ページで必要な共通処理を定義
|    ├- _documents.tsx // <Html> <Head /> など共通レイアウトを定義
|    └- DomainSample.tsx // 各ドメインをページとして定義
|
└- utils // グローバルで使える便利な関数（ex.文字列の加工など）
     └- utils-sample.ts
```

#### 各コンポーネントの index.ts 内の処理

```ts
export { ComponentSample } from "./ComponentSample";
```

#### pages ディレクトリで定義される、 Domain ファイル内での処理

```ts
export { DomainSample } from "domains/DomainSample";
```

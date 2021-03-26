import { ISection } from ".";

export const TDD: ISection = {
  title: "テスト駆動開発（TDD）",
  description:
    "テスト駆動開発（Test-Driven Development: TDD）とは、テストファーストなプログラムの開発手法です。" +
    "つまり、プログラムの実装前にテストコードを書き（テストファースト）、" +
    "そのテストコードに適合するように実装とリファクタリングを進めていく方法を指します。\n" +
    "実装したい機能のプログラムよりもテストコードを先に書くため、はじめはテストに失敗しますが、" +
    "プログラムの実装と修正を短いサイクルで何度も繰り返してバグをなくし、正しく動作するコードが書けたらリファクタリングを行います。" ,
  contentsList: [
    {
      title: "TDD Boot Camp 2020 Online #1 基調講演/ライブコーディング",
      link: "https://youtu.be/Q-FJ3XmFlT8?t=1145",
      mediaType: ["READ_ONLY", "VIDEO"],
      requiredTime: 120,
    },
    {
      title: " フロントエンド（React Testing Library）で TDD（テスト駆動開発）をする",
      link: "https://zenn.dev/higa/articles/34439dc279c55dd2ab95",
      mediaType: ["READ_ONLY"],
      requiredTime: 15,
    },
    {
      title: "React Testing Libraryの使い方",
      link: "https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f",
      mediaType: ["READ_ONLY"],
      requiredTime: 15,
    },
  ],
};
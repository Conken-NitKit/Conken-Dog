export interface IKnowledge {
  uid: string;              // 固有ID
  title: string;            // 記事のタイトル
  link: string;             // 記事のリンク
  contributorId: string;    // 投稿者のユーザーID
  contributorName: string;  // 投稿者のユーザーネーム
  timestamp: string;        // 投稿日時
  tags: string[];           // 付与したタグのリスト
  visitors: string[];       // 記事を見た人のリスト
  fans: string[];           // 記事に「いいね」した人のリスト
  collectors: string[];     // 記事を「ブックマーク」した人のリスト
}

export const instanceOfKnowledge = (arg: any): arg is IKnowledge =>
  "uid" in arg &&
  "title" in arg &&
  "link" in arg &&
  "contributorId" in arg &&
  "contributorName" in arg &&
  "timestamp" in arg &&
  "tags" in arg &&
  "visitors" in arg &&
  "fans" in arg &&
  "collectors" in arg;

export const defaultKnowledge: IKnowledge = {
  uid: "",
  title: "",
  link: "",
  contributorId: "",
  contributorName: "",
  timestamp: "",
  tags: [],
  visitors: [],
  fans: [],
  collectors: [],
};

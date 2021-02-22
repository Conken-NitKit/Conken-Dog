import { IFeed } from "../interfaces/Feed";

export const mockFeeds: IFeed[] = [
  {
    title: "Firebase Cloud Firestoreの使い方",
    link: "https://qiita.com/subaru44k/items/a88e638333b8d5cc29f2",
    contributorName: "窪田秀哉",
    timestamp: (new Date()).toISOString(),
    tags: ["Qiita","JavaScript" ,"FireStore"],
    visitors: [],
    fans: [],
    collectors: []
  },
  {
    title: "もう迷わない！CSS Flexboxの使い方を徹底解説",
    link: "https://webdesign-trends.net/entry/8148",
    contributorName: "窪田秀哉",
    timestamp: (new Date()).toISOString(),
    tags: ["CSS", "Flexbox"],
    visitors: [],
    fans: [],
    collectors: []
  }
]
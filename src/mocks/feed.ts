import { IFeed } from "../interfaces/Feed";

export const mockFeeds: IFeed[] = [
  {
    title: "Firebase Cloud Firestoreの使い方",
    link: "https://qiita.com/subaru44k/items/a88e638333b8d5cc29f2",
    contributorName: "高専太郎",
    timestamp: (new Date()).toISOString(),
    tags: ["Qiita","JavaScript" ,"FireStore"],
    visitors: ["高専太郎"],
    fans: [],
    collectors: []
  },
  {
    title: "もう迷わない！CSS Flexboxの使い方を徹底解説",
    link: "https://webdesign-trends.net/entry/8148",
    contributorName: "高専太郎",
    timestamp: (new Date()).toISOString(),
    tags: ["CSS", "Flexbox"],
    visitors: [],
    fans: ["高専花子"],
    collectors: ["高専太郎", "高専花子"]
  },
  {
    title: "styled-media-query",
    link: "https://www.npmjs.com/package/styled-media-query",
    contributorName: "高専太郎",
    timestamp: (new Date()).toISOString(),
    tags: ["npm", "react", "styled-components"],
    visitors: ["高専花子", "高専太郎"],
    fans: ["高専花子", "高専太郎"],
    collectors: ["高専太郎"]
  },
  {
    title: "アイソメトリックイラストのフリー素材ダウンロードサイト【12選】",
    link: "https://rico-notes.com/news/isometric/",
    contributorName: "高専太郎",
    timestamp: (new Date()).toISOString(),
    tags: ["npm", "react", "styled-components"],
    visitors: [],
    fans: [],
    collectors: []
  }
]
import { IUser } from "../interfaces/User";

export const mockUser:IUser = {
  uid: "hoge",
  activityLog: [],
  birthData: "",
  completionList: [
    "https://youtu.be/zq50JwOU_ls",
    "https://prog-8.com/html/study/1/1",
    "https://codeprep.jp/books/123",
    "https://saruwakakun.com/html-css/basic/meta-tag",
    "https://saruwakakun.com/html-css/basic/link-rel",
  ],
  displayName: "高専太郎",
  email: "hogehoge@gmail.com",
  role: "ADMIN",
  team: ["AI"]
}
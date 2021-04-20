import { IUser } from "../../interfaces/User";
import { fetchUser } from "../users/fetchUser";
import { postUserInfo } from "../users/postUserInfo";

export const addAccessLog = async (uid: string, siteName: string) => {
  if(!uid) return;
  const userInfo = await fetchUser(uid);
  const postedUserInfo: IUser = {
    ...userInfo,
    activityLog: [...userInfo.activityLog, {
      actionType: "ACCESS_LINK",
      targetLink: `"${siteName}" へのアクセスを確認しました`,
      timestamp: (new Date()).toString()
    }]
  };
  postUserInfo(postedUserInfo);
};

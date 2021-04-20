import { IUser } from "../../interfaces/User";
import { fetchUser } from "../users/fetchUser";
import { postUserInfo } from "../users/postUserInfo";

export const addCompleteLog = async (uid: string, siteName: string) => {
  if(!uid) return;
  const userInfo = await fetchUser(uid);
  const postedUserInfo: IUser = {
    ...userInfo,
    activityLog: [...userInfo.activityLog, {
      actionType: "COMPLETE_TASK",
      targetLink: `"${siteName}" を完了しました。`,
      timestamp: (new Date()).toString()
    }]
  };
  postUserInfo(postedUserInfo);
};

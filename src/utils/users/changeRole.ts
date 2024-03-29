import { IUser, UserRoleType } from "../../interfaces/User";
import { postUserInfo } from "./postUserInfo";

export const changeRole = (userInfo: IUser, role: UserRoleType) => {
  const changedUserInfo: IUser = {
    ...userInfo,
    role: role
  }
  postUserInfo(changedUserInfo);
  return changedUserInfo;
};

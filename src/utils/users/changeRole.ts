import { IUser, UserRoleType } from "../../interfaces/User";

export const changeRole = (userInfo: IUser, role: UserRoleType) => {
  const changedUserInfo = {
    ...userInfo,
    role: role
  }
  console.log(changedUserInfo, "func");
  return changedUserInfo;
  // postUserInfo(changedUserInfo);
};
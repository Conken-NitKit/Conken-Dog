export interface IActivityLog {
  actionType: "ACCESS_LINK" | "COMPLETE_TASK" | "LOGIN" | "LOGOUT";
  targetLink: string | null;
  timestamp: string;
}

export type UserRoleType =
  | "ADMIN"
  | "MEMBER"
  | "WAITING_AUTHENTICATION"
  | "DENINED";

export const instanceOfUserRole = (arg: string): arg is UserRoleType=>
  arg === "ADMIN" ||
  arg === "MEMBER" ||
  arg === "WAITING_AUTHENTICATION" ||
  arg === "DENINED";

export interface IUser {
  uid: string;
  activityLog: IActivityLog[];
  birthDate: string;
  completionList: string[];
  displayName: string;
  email: string;
  role: UserRoleType;
  team: (
    | "WEB_CREATE"
    | "WEB_DESIGN"
    | "GAME_CREATE"
    | "GAME_DESIGN"
    | "SECURITY"
    | "AI"
    | "ILLUST"
  )[];
}

export const instanceOfUser = (arg: any): arg is IUser =>
  "uid" in arg &&
  "birthDate" in arg &&
  "completionList" in arg &&
  "displayName" in arg &&
  "email" in arg &&
  "team" in arg;

export const defaultUserInfo: IUser = {
  uid: "",
  activityLog: [],
  birthDate: "",
  completionList: [],
  displayName: "",
  email: "",
  role: "WAITING_AUTHENTICATION",
  team: [],
};

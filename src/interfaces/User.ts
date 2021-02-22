export interface IActivityLog {
  actionType: "ACCESS_LINK" | "COMPLETE_TASK" | "LOGIN" | "LOGOUT";
  targetLink: string | null;
  timestamp: string;
}

export interface IUser {
  uid: string;
  activityLog: IActivityLog[];
  birthData: string;
  completionList: string[];
  displayName: string;
  email: string;
  role: "ADMIN" | "MEMBER" | "WAITING_AUTHENTICATION" | "DENINED";
  team:
    | "WEB_CREATE"
    | "WEB_DESIGN"
    | "GAME_CREATE"
    | "GAME_DESIGN"
    | "SECURITY"
    | "AI"
    | "UNDECIDED";
}

export const instanceOfUser = (arg: any): arg is IUser =>
  "uid" in arg &&
  "birthData" in arg &&
  "completionList" in arg &&
  "displayName" in arg &&
  "email" in arg &&
  "team" in arg;

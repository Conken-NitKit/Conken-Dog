import { createContext } from "react";
import { defaultUserInfo, IUser } from "../interfaces/User";

export const userContext = createContext<{
  user: IUser;
  setUser: (currentUser: IUser) => void;
}>({
  user: defaultUserInfo,
  setUser: (currentUser: IUser) => {},
});

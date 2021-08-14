import { IUser } from "../../interfaces/User";
import { db } from "../firebase";

export const postUserInfo = (userInfo: IUser) => {
  const userRef = db.collection("user").doc(userInfo.uid);
  userRef.set(userInfo);
};

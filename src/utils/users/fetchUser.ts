import { defaultUserInfo, instanceOfUser, IUser } from "../../interfaces/User";
import { db } from "../firebase";

export const fetchUser = async (uid: string): Promise<IUser> => {
  const userRef = db.collection("user").doc(uid);
  const user = await userRef.get();
  const userData = { ...user.data(), uid: user.id };
  return instanceOfUser(userData) ? userData : defaultUserInfo;
};
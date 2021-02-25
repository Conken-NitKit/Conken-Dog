import { IUser } from "../../interfaces/User";
import { auth, db } from "../firebase";

export const postUserInfo = async (userInfo: IUser) => {
  try {
    await auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = db.collection("user").doc(user.uid);
        userRef.set(userInfo);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

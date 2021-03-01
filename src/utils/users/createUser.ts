import { IUser } from "../../interfaces/User";
import { auth, db } from "../firebase";
import * as H from "history";

export const createUser = async (
  userInfo: IUser,
  password: string,
  history: H.History
) => {
  try {
    await auth.createUserWithEmailAndPassword(userInfo.email, password);
    await auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = db.collection("user").doc(user.uid);
        !(await userRef.get()).exists &&
          userRef.set({
            ...userInfo,
            uid: user.uid,
          });
      }
    });
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

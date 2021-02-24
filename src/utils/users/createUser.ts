import { IUser } from "../../interfaces/User";
import { auth, db } from "../firebase/firebase";

export const createUser = async (userInfo: IUser, password: string) => {
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
  } catch (error) {
    console.log(error.message);
  }
};

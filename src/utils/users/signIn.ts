import { RouteComponentProps } from "react-router-dom";
import { defaultUserInfo } from "../../interfaces/User";
import { auth, db } from "../firebase";
import * as H from "history";

export const signIn = async (
  email: string,
  password: string,
  history: H.History
) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    await auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = db.collection("user").doc(user.uid);
        !(await userRef.get()).exists &&
          userRef.set({
            ...defaultUserInfo,
            uid: user.uid,
            email: email,
          });
      }
    });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

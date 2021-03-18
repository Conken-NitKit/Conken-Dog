import { auth, db } from "../firebase";
import * as H from "history";
import { defaultUserInfo, instanceOfUser, IUser } from "../../interfaces/User";

export const redirectNonLogin = (
  histry: H.History,
  user: IUser,
  setUser: (user: IUser) => void
) => {
  return auth.onAuthStateChanged(async (fetchedUser) => {
    if (fetchedUser) {
      if (JSON.stringify(user) !== JSON.stringify(defaultUserInfo)) return;
      const userRef = db.collection("user").doc(fetchedUser.uid);
      await userRef
        .get()
        .then((doc) => {
          const fetchedUser = doc.data();
          instanceOfUser(fetchedUser) && setUser(fetchedUser);
        })
        .catch((err) => console.log("Error getting documents", err));
    } else {
      histry.push("/signin");
    }
  });
};

import { auth, db } from "../firebase";
import * as H from "history";
import { instanceOfUser, IUser } from "../../interfaces/User";

export const redirectNonLogin = (
  histry: H.History,
  setUser: (user: IUser) => void
) => {
  return auth.onAuthStateChanged(async (fetchedUser) => {
    if (fetchedUser) {
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

import { auth, db } from "../firebase";
import * as H from "history";
import { defaultUserInfo, instanceOfUser, IUser } from "../../interfaces/User";
import { addAccessLog } from "../log/accessLink";

export const redirectNonLogin = (
  histry: H.History,
  user: IUser,
  setUser: (user: IUser) => void
) => {
  return auth.onAuthStateChanged(async (fetchedUser) => {
    if (fetchedUser) {
      // NOTE: ユーザー情報がストア上に格納されている場合
      if (JSON.stringify(user) !== JSON.stringify(defaultUserInfo)) {
        return;
      }

      // NOTE: ユーザー情報がストア上に格納されていない場合はサーバーからユーザー情報を取得
      const userRef = db.collection("user").doc(fetchedUser.uid);
      await userRef
        .get()
        .then((doc) => {
          const fetchedUser = doc.data();
          instanceOfUser(fetchedUser) && setUser(fetchedUser);
          instanceOfUser(fetchedUser) &&
            addAccessLog(fetchedUser.uid, "ConDog");
        })
        .catch((err) => console.log("Error getting documents", err));
    } else {
      histry.push("/signin");
    }
  });
};

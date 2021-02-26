import { auth } from "../firebase";
import * as H from "history";

export const redirectAlreadyLogin = (histry: H.History) => {
  auth.onAuthStateChanged(async (fetchedUser) => {
    if (fetchedUser) histry.push("/");
  });
};

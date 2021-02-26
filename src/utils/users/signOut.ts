import { auth } from "../firebase";
import * as H from "history";

export const signOut = async (history: H.History) => {
  try {
    await auth.signOut();
    history.push("signin");
  } catch (error) {
    alert(error.message);
  }
};

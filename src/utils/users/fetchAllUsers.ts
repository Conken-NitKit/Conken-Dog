import { instanceOfUser, IUser } from "../../interfaces/User";
import { db } from "../firebase";

export const fetchAllUsers = async (): Promise<IUser[]> => {
  const users: IUser[] = [];
  const userRef = db.collection("user");
  const snapShot = await userRef.get();

  snapShot.forEach((doc) => {
    const user = { ...doc.data(), uid: doc.id };
    instanceOfUser(user) && users.push(user);
  });

  users.sort((a, b) => {
    if (new Date(a.birthDate) > new Date(b.birthDate)) return -1;
    else if (new Date(a.birthDate) < new Date(b.birthDate)) return 1;
    return 0;
  });

  console.log(users)

  return users;
};

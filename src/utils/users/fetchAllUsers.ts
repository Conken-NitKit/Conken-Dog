import { instanceOfUser, IUser } from "../../interfaces/User";
import { db } from "../firebase";

const calcGrade = (dateString: string) => {
  const dateInfo = new Date(dateString);
  return dateInfo.getFullYear() - (dateInfo.getMonth() < 3 ? 1 : 0)
}

export const fetchAllUsers = async (): Promise<IUser[]> => {
  const users: IUser[] = [];
  const userRef = db.collection("user");
  const snapShot = await userRef.get();

  snapShot.forEach((doc) => {
    const user = { ...doc.data(), uid: doc.id };
    instanceOfUser(user) && users.push(user);
  });

  users.sort((a, b) => {
    if (calcGrade(a.birthDate) > calcGrade(b.birthDate) ) return -1;
    else if (calcGrade(a.birthDate) < calcGrade(b.birthDate)) return 1;
    else {
      if(new Date(a.birthDate) > new Date(b.birthDate)) return 1;
      else if(new Date(a.birthDate) < new Date(b.birthDate)) return -1;
      else return 0
    };
  });

  return users;
};

import { defaultKnowledge } from "../../interfaces/Knowledge";
import { auth, db } from "../firebase";

export const postKnowledge = async (
  title: string,
  link: string,
  contributorId: string,
  contributorName: string
) => {
  const postedKnowledge = {
    ...defaultKnowledge,
    title: title,
    link: link,
    timestamp: String(new Date()),
    contributorId: contributorId,
    contributorName: contributorName,
  };
  db.collection('knowledge').add(postedKnowledge);
};

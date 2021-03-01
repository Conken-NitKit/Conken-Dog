import { IKnowledge, instanceOfKnowledge } from "../../interfaces/Knowledge";
import { db } from "../firebase";

export const fetchKnowledges = async (): Promise<IKnowledge[]> => {
  const knowledges: IKnowledge[] = [];
  const knowledgeRef = db.collection("knowledge");
  const snapShot = await knowledgeRef.get();

  snapShot.forEach((doc) => {
    const knowledge = { ...doc.data(), uid: doc.id };
    instanceOfKnowledge(knowledge) && knowledges.push(knowledge);
  });

  knowledges.sort((a, b) => {
    if (new Date(a.timestamp) > new Date(b.timestamp)) return -1;
    else if (new Date(a.timestamp) < new Date(b.timestamp)) return 1;
    return 0;
  });

  return knowledges;
};

import {
  IKnowledge,
  instanceOfKnowledge,
} from "../../interfaces/Knowledge";
import { db } from "../firebase";

export const fetchKnowledges = async (): Promise<IKnowledge[]> => {
  const knowledges: IKnowledge[] = [];
  const knowledgeRef = db.collection("knowledge");
  const snapShot = await knowledgeRef.get();
  snapShot.forEach((doc) => {
    const knowledge = doc.data()
    instanceOfKnowledge(knowledge) && knowledges.push(knowledge)
  });
  return knowledges;
};

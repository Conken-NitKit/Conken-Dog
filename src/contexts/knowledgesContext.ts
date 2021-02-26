import { createContext } from "react";
import { IKnowledge } from "../interfaces/Knowledge";

export const knowledgesContext = createContext<{
  knowledges: IKnowledge[];
  setKnowledges: (currentUser: IKnowledge[]) => void;
}>({
  knowledges: [],
  setKnowledges: (currentKnowledges: IKnowledge[]) => {},
});

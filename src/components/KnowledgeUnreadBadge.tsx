import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import { knowledgesContext } from "../contexts/knowledgesContext";
import UnreadBadge from "./UnreadBadge";

export default function KnowledgeUnreadBadge() {
  const { user } = useContext(userContext);
  const { knowledges } = useContext(knowledgesContext);

  const UnreadCount: number = knowledges.filter(
    (knowledge) => !knowledge.visitors.includes(user.displayName)
  ).length;

  return <UnreadBadge count={UnreadCount} />;
}

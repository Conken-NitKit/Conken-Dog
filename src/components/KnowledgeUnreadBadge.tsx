import styled from "styled-components";
import UnreadBadge from "./UnreadBadge";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import { knowledgesContext } from "../contexts/knowledgesContext";

export default function KnowledgeUnreadBadge() {
  const { user } = useContext(userContext);
  const { knowledges, setKnowledges } = useContext(knowledgesContext);

  const UnreadCount: number = knowledges.filter(
    (knowledge) => !knowledge.visitors.includes(user.displayName)
  ).length;

  return <UnreadBadge Count={UnreadCount} />;
}

import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import KnowledgeCard from "./KnowledgeCard";
import { Heading2 } from "../styles/fonts/Heading2";
import { mockKnowledges } from "../mocks/knowledges";
import { IKnowledge } from "../interfaces/Knowledge";
import { userContext } from "../contexts/userContext";
import { fetchKnowledges } from "../utils/knowkedge/fetchknowledge";
import { knowledgesContext } from "../contexts/knowledgesContext";

const ScrollContainer = styled.div`
  max-height: 1256px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EndPadding = styled.div`
  height: 0;
  ${media.lessThan("medium")`
    height: 80px;
  `}
`;

export default function KnowledgeContainer() {
  const { user } = useContext(userContext);
  const { knowledges, setKnowledges } = useContext(knowledgesContext);

  useEffect(() => {
    const f = async () => {
      const fetchedKnowledges = await fetchKnowledges();
      setKnowledges(fetchedKnowledges);
    };
    f();
  }, []);

  const addVisitor = (link: string) => {
    const newKnowledges = knowledges;
    const updateIndex = newKnowledges.findIndex(
      (knowledge) => knowledge.link === link
    );
    newKnowledges.splice(updateIndex, 1, {
      ...newKnowledges[updateIndex],
      visitors: [
        ...newKnowledges[updateIndex].visitors,
        user.displayName,
      ].filter((x, i, self) => self.indexOf(x) === i),
    });
    setKnowledges([...newKnowledges]);
  };

  const TapFav = (link: string) => {
    const newKnowledges = knowledges;
    const updateIndex = newKnowledges.findIndex(
      (knowledge) => knowledge.link === link
    );
    newKnowledges.splice(updateIndex, 1, {
      ...newKnowledges[updateIndex],
      fans:
        newKnowledges[updateIndex].fans.indexOf(user.displayName) === -1
          ? [...newKnowledges[updateIndex].fans, user.displayName]
          : newKnowledges[updateIndex].fans.filter(
              (fan) => fan !== user.displayName
            ),
    });
    setKnowledges([...newKnowledges]);
  };

  const tapBookMark = (link: string) => {
    const newKnowledgess = knowledges;
    const updateIndex = newKnowledgess.findIndex(
      (knowledge) => knowledge.link === link
    );
    newKnowledgess.splice(updateIndex, 1, {
      ...newKnowledgess[updateIndex],
      collectors:
        newKnowledgess[updateIndex].collectors.indexOf(user.displayName) === -1
          ? [...newKnowledgess[updateIndex].collectors, user.displayName]
          : newKnowledgess[updateIndex].collectors.filter(
              (collector) => collector !== user.displayName
            ),
    });
    setKnowledges([...newKnowledgess]);
  };

  return (
    <>
      <Heading2>ナレッジ</Heading2>
      <ScrollContainer>
        {knowledges.map((knowledge, index) => (
          <KnowledgeCard
            key={`knowledges/${index}`}
            knowledge={knowledge}
            addVisitor={addVisitor}
            tapFav={TapFav}
            tapBookMark={tapBookMark}
          />
        ))}
        <EndPadding />
      </ScrollContainer>
    </>
  );
}

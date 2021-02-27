import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import KnowledgeCard from "./KnowledgeCard";
import { Heading2 } from "../styles/fonts/Heading2";
import { userContext } from "../contexts/userContext";
import { fetchKnowledges } from "../utils/knowkedge/fetchknowledge";
import { knowledgesContext } from "../contexts/knowledgesContext";
import { db } from "../utils/firebase";

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

  const addVisitor = async (uid: string) => {
    const fetchedKnowledges = await fetchKnowledges();
    const updateIndex = fetchedKnowledges.findIndex(
      (knowledge) => knowledge.uid === uid
    );

    const postedKnowledge = {
      ...fetchedKnowledges[updateIndex],
      visitors: [
        ...fetchedKnowledges[updateIndex].visitors,
        user.displayName,
      ].filter((x, i, self) => self.indexOf(x) === i),
    };

    await db
      .collection("knowledge")
      .doc(postedKnowledge.uid)
      .set(postedKnowledge)
      .then(async () => {
        setKnowledges(await fetchKnowledges());
      });
  };

  const TapFav = async (uid: string) => {
    const newKnowledges = await fetchKnowledges();
    const updateIndex = newKnowledges.findIndex(
      (knowledge) => knowledge.uid === uid
    );
    const postedKnowledge = {
      ...newKnowledges[updateIndex],
      fans:
        newKnowledges[updateIndex].fans.indexOf(user.displayName) === -1
          ? [...newKnowledges[updateIndex].fans, user.displayName]
          : newKnowledges[updateIndex].fans.filter(
              (fan) => fan !== user.displayName
            ),
    };

    await db
      .collection("knowledge")
      .doc(postedKnowledge.uid)
      .set(postedKnowledge)
      .then(async () => {
        setKnowledges(await fetchKnowledges());
      });
  };

  const tapBookMark = async (uid: string) => {
    const fetchedKnowledges = await fetchKnowledges();
    const updateIndex = fetchedKnowledges.findIndex(
      (knowledge) => knowledge.uid === uid
    );
    const postedKnowledge = {
      ...fetchedKnowledges[updateIndex],
      collectors:
        fetchedKnowledges[updateIndex].collectors.indexOf(user.displayName) ===
        -1
          ? [...fetchedKnowledges[updateIndex].collectors, user.displayName]
          : fetchedKnowledges[updateIndex].collectors.filter(
              (collector) => collector !== user.displayName
            ),
    };

    await db
      .collection("knowledge")
      .doc(postedKnowledge.uid)
      .set(postedKnowledge)
      .then(async () => {
        setKnowledges(await fetchKnowledges());
      });
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

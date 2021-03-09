import { useContext, useEffect, useState, useRef } from "react";
import Slick from "react-slick";
import styled from "styled-components";
import media from "styled-media-query";
import KnowledgeCard from "./KnowledgeCard";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";
import { userContext } from "../contexts/userContext";
import { fetchKnowledges } from "../utils/knowledge/fetchknowledge";
import { knowledgesContext } from "../contexts/knowledgesContext";
import { knowledgeSort } from "../assets/Knowledges/KnowledgeSort";
import { db } from "../utils/firebase";

const ScrollContainer = styled.div`
  outline: none;
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

const CategoryList = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding-inline-start: 0;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryTag = styled.li<{ isSelected: boolean }>`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-weight: bold;
  list-style: none;
  white-space: nowrap;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: ${(props) => (props.isSelected ? "white" : "#AAA")};
  margin: 0 4px 4px;
  padding: 4px ${(props) => (props.isSelected ? 10 : 8)}px;
  background-color: ${(props) =>
    props.isSelected ? "#30c8d6" : "rgba(0, 0, 0, 0)"};
  box-shadow: 0 1px 8px -2px rgba(0, 0, 0, ${(props) => (props.isSelected ? 0.4 : 0)});
  border-radius: 13px;
  cursor: pointer;
  &::selection {
    background: none;
  }
`;

export default function KnowledgeContainer() {
  const { user } = useContext(userContext);
  const { knowledges, setKnowledges } = useContext(knowledgesContext);

  const [courseIndex, setCourseIndex] = useState<number>(0);

  const courseRef = useRef<Slick | null>();

  const slideChangeHandle = (_: number, next: number) => {
    localStorage.setItem("knowledgeIndex", String(next));
    setCourseIndex(next);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: slideChangeHandle,
  };

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
      <Small>今、あなたに見て欲しいHotな情報</Small>

      <CategoryList>
        {knowledgeSort.map((course, index) => (
          <CategoryTag
            key={`course/tag/${index}`}
            isSelected={courseIndex === index}
            onClick={() => courseRef.current!.slickGoTo(index)}
          >
            {course}
          </CategoryTag>
        ))}
      </CategoryList>

      <Slick ref={(slider) => (courseRef.current = slider)} {...settings}>
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

        <ScrollContainer>
          {knowledges
            .filter(
              (knowledge) => !knowledge.visitors.includes(user.displayName)
            )
            .map((knowledge, index) => (
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

        <ScrollContainer>
          {knowledges
            .filter((knowledge) => knowledge.fans.includes(user.displayName))
            .map((knowledge, index) => (
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

        <ScrollContainer>
          {knowledges
            .filter((knowledge) =>
              knowledge.collectors.includes(user.displayName)
            )
            .map((knowledge, index) => (
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
      </Slick>
    </>
  );
}

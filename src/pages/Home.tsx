import { useContext, useEffect } from "react";
import styled from "styled-components";
import media from "styled-media-query";

import LessonContainer from "../components/LessonContainer";
import Slider from "../components/Slider";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";
import { courseList } from "../assets/courses";
import FeedContainer from "../components/FeedContainer";
import { auth, db } from "../utils/firebase";
import { userContext } from "../contexts/userContext";
import { defaultUserInfo, instanceOfUser } from "../interfaces/User";
import { signOut } from "../utils/users/signOut";
import { RouteComponentProps } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 48px 16px;
  ${media.lessThan("medium")`
    margin-bottom: 12px;
    padding: 8px 16px 0;
    justify-content: space-between;
  `}
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Meiryo UI", Meiryo, "MS PGothic", sans-serif;
  font-weight: bold;
  color: #30c8d6;
  margin: 0;
  font-size: 3rem;
  &::selection {
    background: none;
  }
  ${media.lessThan("medium")`
    font-size: 1.6rem;
  `}
`;

const SubTitle = styled.p`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: -0.4px;
  margin-bottom: 8px;
  &::selection {
    background: none;
  }
  ${media.lessThan("medium")`
    font-size: 0.6rem;
    margin-bottom: 0;
  `}
`;

const LoginLink = styled.a`
  color: #787878;
  font-size: 1rem;
  cursor: pointer;
  ${media.lessThan("medium")`
    font-size: 0.75rem;
  `}
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #30c8d6 0, #30c8d6 288px, #fff 0, #fff);
  ${media.lessThan("large")`
    background: #30c8d6;
  `}
`;

const MenuList = styled.ul`
  display: flex;
  ${media.lessThan("large")`
    display: none;
  `}
`;

const MenuListLink = styled.li`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-weight: bold;
  color: white;
  list-style: none;
  margin: 4px 16px;
  &::selection {
    background: none;
  }
`;

const HeadContents = styled.div`
  position: relative;
  width: 990px;
  height: 296px;
  background-color: white;
  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.3);
  ${media.lessThan("large")`
    width: 100%;
  `}
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 990px;
  margin: 0 auto 64px;
  ${media.between("medium", "large")`
    width: 462px;
    flex-direction: column;
    justify-content: center;
  `}
  ${media.lessThan("medium")`
    width: 92%;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  `}
`;

const ContentsContainer = styled.div`
  padding: 0 8px;
  width: 462px;
  margin-top: 64px;
  ${media.lessThan("medium")`
    padding: 0;
    width: 100%;
  `}
`;

export default function Home({history}: RouteComponentProps) {
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    const unSub = auth.onAuthStateChanged(async (fetchedUser) => {
      if (
        fetchedUser &&
        JSON.stringify(user) === JSON.stringify(defaultUserInfo)
      ) {
        const userRef = db.collection("user").doc(fetchedUser.uid);
        await userRef
          .get()
          .then((doc) => {
            const fetchedUser = doc.data();
            instanceOfUser(fetchedUser) && setUser(fetchedUser);
          })
          .catch((err) => console.log("Error getting documents", err));
      }
    });
    return () => {
      unSub();
    };
  });

  return (
    <div>
      <HeaderContainer>
        <TopContainer>
          <Title>ConDog</Title>
          <SubTitle>遊ぶように、学ぼう、どこよりも</SubTitle>
        </TopContainer>
        <LoginLink onClick={() => signOut(history)}>ログアウト</LoginLink>
      </HeaderContainer>
      <HeadContainer>
        <MenuList>
          {courseList.map((course) => (
            <MenuListLink key={`menu/${course.metaName}`}>
              {course.name}
            </MenuListLink>
          ))}
        </MenuList>
        <HeadContents>
          <Slider />
        </HeadContents>
      </HeadContainer>
      <ContentsWrapper>
        <ContentsContainer>
          <Heading2>レッスン</Heading2>
          <Small>今後、あなたに取り組んで欲しいレッスン</Small>
          <LessonContainer useFinishedFilter={false} />

          <Heading2>修了レッスン</Heading2>
          <Small>あなたがこれまでに取り組んできたレッスン</Small>
          <LessonContainer useFinishedFilter={true} />
        </ContentsContainer>
        <ContentsContainer>
          <FeedContainer />
        </ContentsContainer>
      </ContentsWrapper>
    </div>
  );
}

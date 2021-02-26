import { useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";

import NotificationLogo from "../assets/img/Notification.svg";
import UserLogo from "../assets/img/UserCircle.svg";

import { courseList } from "../assets/courses";
import KnowledgeContainer from "../components/KnowledgeContainer";
import LessonContainer from "../components/LessonContainer";
import Slider from "../components/Slider";
import { userContext } from "../contexts/userContext";
import { defaultUserInfo, instanceOfUser } from "../interfaces/User";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";
import { auth, db } from "../utils/firebase";
import { signOut } from "../utils/users/signOut";
import { redirectNonLogin } from "../utils/users/redirectNonLogin";
import { KnowledgeModal } from "../components/KnowledgeModal";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 48px;
  ${media.lessThan("medium")`
    margin: 16px 0 8px;
  `}
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${media.lessThan("large")`
    align-items: center;
  `}
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
    font-size: 2.4rem;
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
    font-size: 0.9rem;
    margin-bottom: 0;
  `}
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  ${media.lessThan("large")`
    display: none;
  `}
`;

const Icon = styled.img`
  height: 36px;
  width: 36px;
  cursor: pointer;
  margin-right: 28px;
`;

const LoginLink = styled.a`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background: #30c8d6;
  border-radius: 4px;
  padding: 16px 20px;
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
  cursor: pointer;
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

export default function Home({ history }: RouteComponentProps) {
  const [isOpenKnowledgeModal, setIsOpenKnowledgeModal] = useState(false);
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    redirectNonLogin(history);
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
        <NavBar>
          <Icon src={NotificationLogo} />
          <Icon src={UserLogo} onClick={() => signOut(history)} />
          <LoginLink onClick={() => setIsOpenKnowledgeModal(true)}>
            ナレッジを投稿
          </LoginLink>
        </NavBar>
      </HeaderContainer>
      <HeadContainer>
        <MenuList>
          {courseList.map((course) => (
            <MenuListLink
              key={`menu/${course.metaName}`}
              onClick={() => history.push(course.metaName)}
            >
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
          <KnowledgeContainer />
        </ContentsContainer>
      </ContentsWrapper>
      {isOpenKnowledgeModal && (
        <KnowledgeModal close={() => setIsOpenKnowledgeModal(false)} />
      )}
    </div>
  );
}

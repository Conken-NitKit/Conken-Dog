import styled from "styled-components";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 136px;
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
`;

const SubTitle = styled.p`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  margin: 0;
  font-size: 0.95rem;
  font-weight: bold;
  letter-spacing: -0.4px;
  &::selection {
    background: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #30c8d6 0, #30c8d6 288px, #fff 0, #fff);
`;

const MenuList = styled.ul`
  display: flex;
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
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 990px;
  margin: 44px auto 0;
`;

const ContentsContainer = styled.div`
  padding: 0 8px;
  width: 462px;
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
  margin: 0 4px 0;
  padding: 4px ${(props) => (props.isSelected ? 10 : 8)}px;
  background-color: ${(props) =>
    props.isSelected ? "#30c8d6" : "rgba(0, 0, 0, 0)"};
  border-radius: 13px;
  cursor: pointer;
  &::selection {
    background: none;
  }
`;

const LessonCard = styled.div`
  width: 100%;
  height: 110px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 24px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);
  }
`;

const LessonImg = styled.div`
  background-color: #30c8d6;
  height: 100%;
  width: 110px;
  float: left;
  margin-right: 32px;
  flex-shrink: 0;
`;

const LessonContents = styled.div`
  display: inline-flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

const LessonTitle = styled.h3`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  color: #2b5461;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Progress = styled.div`
font-size: 0.75rem;
    display: flex;
    align-items: center;
    letter-spacing: 0;
    color: rgba(43,84,106,0.8);
    margin-bottom: 16px;
`;

const ProgressBar = styled.div`
  position: relative;
  top: 50%;
  width: 86px;
  height: 6px;
  background-color: rgba(212, 224, 232, 0.5);
  background: linear-gradient(90deg, #30c8d6 0, #30c8d6 40%, #eee 0, #eee);
  border: 0;
  box-shadow: none;
  border-radius: 3px;
  margin: 0 12px 0 0;
`;

const LessonLink = styled.div`
color: #2b546a;
    font-size: 0.75rem;
    white-space: nowrap;
    margin: 0 32px 0 16px;
`;

export default function Home() {
  return (
    <div>
      <TopContainer>
        <Title>ConDog</Title>
        <SubTitle>遊ぶように、学ぼう、どこよりも</SubTitle>
      </TopContainer>
      <HeadContainer>
        <MenuList>
          <MenuListLink>特集</MenuListLink>
          <MenuListLink>Web開発</MenuListLink>
          <MenuListLink>Webデザイン</MenuListLink>
          <MenuListLink>ゲーム開発</MenuListLink>
          <MenuListLink>ゲームデザイン</MenuListLink>
          <MenuListLink>AI</MenuListLink>
          <MenuListLink>イラスト</MenuListLink>
        </MenuList>
        <HeadContents></HeadContents>
      </HeadContainer>
      <ContentsWrapper>
        <ContentsContainer>
          <Heading2>レッスン</Heading2>
          <Small>今後、あなたに取り組んで欲しいレッスン</Small>
          <CategoryList>
            <CategoryTag isSelected={false}>特集</CategoryTag>
            <CategoryTag isSelected={true}>Web開発</CategoryTag>
            <CategoryTag isSelected={false}>Webデザイン</CategoryTag>
            <CategoryTag isSelected={false}>ゲーム開発</CategoryTag>
            <CategoryTag isSelected={false}>ゲームデザイン</CategoryTag>
            <CategoryTag isSelected={false}>AI</CategoryTag>
            <CategoryTag isSelected={false}>イラスト</CategoryTag>
          </CategoryList>

          <LessonCard>
            <LessonImg />
            <LessonContents>
              <LessonTitle>{"HTML && CSS"}</LessonTitle>
              <Progress>
              <ProgressBar />
              2/23ページ
              </Progress>
            </LessonContents>
            <LessonLink>{"レッスン詳細へ >"}</LessonLink>
          </LessonCard>

          <Heading2>修了レッスン</Heading2>
          <Small>あなたがこれまでに取り組んできたレッスン</Small>
          <CategoryList>
            <CategoryTag isSelected={false}>特集</CategoryTag>
            <CategoryTag isSelected={false}>Web開発</CategoryTag>
            <CategoryTag isSelected={false}>Webデザイン</CategoryTag>
            <CategoryTag isSelected={false}>ゲーム開発</CategoryTag>
            <CategoryTag isSelected={true}>ゲームデザイン</CategoryTag>
            <CategoryTag isSelected={false}>AI</CategoryTag>
            <CategoryTag isSelected={false}>イラスト</CategoryTag>
          </CategoryList>
        </ContentsContainer>
        <ContentsContainer>
          <Heading2>フィード</Heading2>
        </ContentsContainer>
      </ContentsWrapper>
    </div>
  );
}

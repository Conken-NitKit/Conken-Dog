import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";
import NavigationBar from "../components/NavigationBar";
import { ResponsiveWrapper } from "../layouts/ResponsiveWrapper";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  ${media.lessThan("medium")`
    margin: 16px 0 32px;
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
    text-align: center;
    min-width: 280px;
  `}
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 128px;
`;

export default function Denined({ history }: RouteComponentProps) {
  return (
    <div>
      <ResponsiveWrapper>
        <HeaderContainer>
          <TopContainer>
            <Title>ConDog</Title>
            <SubTitle>遊ぶように、学ぼう、どこよりも</SubTitle>
          </TopContainer>
        </HeaderContainer>
        <Body>
        <SubTitle>現在、ログインできない状態にあります。</SubTitle>
        <SubTitle>詳しくはコンピュータ研究部の上級生にご相談ください。</SubTitle>
        </Body>
      </ResponsiveWrapper>
      <NavigationBar />
    </div>
  );
}

import styled from "styled-components";
import { Container } from "./Container";

import CircleBackground from "../../assets/img/landing/Recommendation/circle-background.svg";
import media from "styled-media-query";

const RecommendationContainer = styled(Container)`
  display: flex;
  padding: 105px 15px;
  flex-direction: column;
  align-items: center;
  background: #dbf0f9;
  margin-bottom: 90px;

  ${media.lessThan("medium")`
    padding: 32px 4px;
  `};
`;

const Title = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 4px;
  vertical-align: bottom;
  color: #444444;
  letter-spacing: 2px;

  ${media.lessThan("large")`
    font-size: 16px;
  `};
`;

const GroupSpan = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #30c8d6;
`;

const TitleSpan = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;

  ${media.between("medium", "large")`
    text-underline-offset: 4px;
  `};

  ${media.lessThan("medium")`
    text-underline-offset: 2px;
  `};
`;

const Circles = styled.div`
  display: flex;
  margin: 9% 0 4% 0;
  justify-content: space-between;
  width: 82%;
  height: 200px;

  ${media.between("medium", "large")`
    height: 160px;
  `};

  ${media.lessThan("medium")`
    height: 136vw;
    width: 48%;
    flex-direction: column;
  `};
`;

const Circle = styled.div`
  display: flex;
  border-radius: 50%;
  height: 100%;
  width: 26%;
  flex-direction: column;
  align-items: center;
  background: url(${CircleBackground}) top/cover;

  ${media.lessThan("medium")`
    height: 42.24vw;
    width: 100%;
  `};
`;

const CircleNumber = styled.h3`
  display: flex;
  margin: 18px 0 0 0;
  height: 50px;
  font-size: 22px;
  font-weight: normal;
  letter-spacing: 2px;
  justify-content: center;
  align-items: center;
  color: white;

  ${media.between("medium", "large")`
    margin-top: 15px;
    height: 40px;
    font-size: 18px;
  `};

  ${media.lessThan("medium")`
    margin-top: 5vw;
    height: 9.5vw;
    font-size: 0.95rem;
  `};
`;

const CircleText = styled.p`
  display: flex;
  margin: 8px auto;
  min-height: 65px;
  width: 100%;
  font-size: 23px;
  font-weight: 800;
  letter-spacing: -1px;
  white-space: pre-wrap;
  line-height: 1.2;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #444444;

  ${media.between("medium", "large")`
    font-size: 18px;
    line-height: 22px;
  `};

  ${media.lessThan("medium")`
    font-size: 4.2vw;
  `};
`;

const Square = styled.div`
  margin: 4% 0;
  width: 82%;

  ${media.lessThan("medium")`
    margin: 12% 0;
    width: 95%;
  `};
`;

const SquareTitles = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  padding: 32px;
  padding-right: 12px;
  width: 82%;

  flex-direction: column;
  justify-content: center;
  background: #76d8c6;


  ${media.lessThan("medium")`
    padding: 20px;
    padding-right: 12px;
  `};
`;

const SquareNumber = styled.p`
  margin: 0;
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 1.3;

  color: white;

  ${media.between("medium", "large")`
    font-size: 19px;
    letter-spacing: 1px;
  `};

  ${media.lessThan("medium")`
    font-size: 3.7vw;
    letter-spacing: 1px;
  `};
`;

export const SquareTitle = styled.p`
  margin: 12px 0 0 0;
  top: 70px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 32px;
  color: white;
  ${media.lessThan("large")`
    font-size: 10px;
    line-height: 24px;
    letter-spacing: 1.2px;
  `};
`;

export const SquareSpan = styled.span`
  font-size: 28px;
  line-height: 36px;
  color: yellow;
  ${media.lessThan("large")`
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1.2px;
  `};
`;

const SquareText = styled.p`
  margin: -48px 0 0 auto;
  padding: 72px 4% 32px;
  width: 89%;
  font-size: 16px;
  line-height: 28px;
  color: #444444;
  background: white;
  white-space: pre-wrap;
  ${media.lessThan("medium")`
    font-size: 12px;
  `};
`;

interface Props {
  group: string;
  circles: string[];
  points: {
    title: JSX.Element;
    description: string;
  }[];
}

export const Recommendation = ({ group, circles, points }: Props) => {
  return (
    <RecommendationContainer>
      <Title>
        コン研の<GroupSpan>{group}</GroupSpan>は
      </Title>
      <Title>
        こんな
        <TitleSpan>あなた</TitleSpan>
        におすすめ！
      </Title>

      <Circles>
        {circles.map((circle, index) => (
          <Circle key={`circle/${index}`}>
            <CircleNumber>Point. {index + 1}</CircleNumber>
            <CircleText>{circle}</CircleText>
          </Circle>
        ))}
      </Circles>

      {points.map((point, index) => (
        <Square key={`square/${index}`}>
          <SquareTitles>
            <SquareNumber>Point. {index + 1}</SquareNumber>
            {point.title}
          </SquareTitles>
          <SquareText>{point.description}</SquareText>
        </Square>
      ))}
    </RecommendationContainer>
  );
};

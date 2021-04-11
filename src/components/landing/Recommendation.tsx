import styled from "styled-components";
import { Container } from "./Container";

import CircleBackground from "../../assets/img/landing/Recommendation/circle-background.svg";
import media from "styled-media-query";

const RecommendationContainer = styled(Container)`
  display: flex;

  padding: 105px 15px 145px;

  flex-direction: column;

  align-items: center;

  background: #dbf0f9;

  ${media.between("medium", "large")`
    padding: 85px 10px 115px;
  `};

  ${media.lessThan("medium")`
    padding: 10% 2% 20%;
  `};
`;

const Title = styled.h2`
  display: flex;

  margin: 0;

  font-size: 35px;
  font-weight: 900;

  letter-spacing: 4px;

  line-height: 1.2;

  justify-content: center;

  color: #444444;

  ${media.between("medium", "large")`
    font-size: 25px;
    font-weight: 800;

    letter-spacing: 2px;
  `};

  ${media.lessThan("medium")`
    font-size: 5.9vw;
  `};
`;

const GroupSpan = styled.span`
  font-size: 42px;
  font-weight: bold;

  line-height: 1;

  color: #30c8d6;

  ${media.between("medium", "large")`
    font-size: 30px;
    font-weight: 900;
  `}

  ${media.lessThan("medium")`
    font-size: 7.08vw;
    font-weight: 800;
  `};
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

  font-size: 23px;
  font-weight: normal;

  letter-spacing: 2px;

  justify-content: center;
  align-items: center;

  color: white;

  ${media.between("medium", "large")`
    margin-top: 15px;

    height: 40px;

    font-size: 20px;
  `};

  ${media.lessThan("medium")`
    margin-top: 5vw;

    height: 9.5vw;

    font-size: 6vw;
  `};
`;

const CircleText = styled.p`
  display: flex;

  margin: 15px 0 0 0;

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
    margin-top: 7px;
    
    font-size: 18px;

    line-height: 22px;
  `};

  ${media.lessThan("medium")`
    margin-top: 1.5vw;

    font-size: 5.3vw;
  `};
`;

const Square = styled.div`
  margin-top: 8%;

  height: 385px;
  width: 82%;

  ${media.between("medium", "large")`
    height: 310px;
  `};

  ${media.lessThan("medium")`
    margin-top: 12%;

    height: 48vw;
    width: 95%;
  `};
`;

const SquareTitles = styled.div`
  display: flex;

  position: relative;

  z-index: 2;

  padding-left: 4%;

  height: 46%;
  width: 61%;

  flex-direction: column;

  justify-content: center;

  background: #76d8c6;

  ${media.lessThan("medium")`
    height: 50%;
    width: 85%;
  `};
`;

const SquareNumber = styled.p`
  margin: 0;

  font-size: 24px;

  letter-spacing: 2px;

  line-height: 1.3;

  color: white;

  ${media.between("medium", "large")`
    font-size: 19px;

    letter-spacing: 1px;
  `};

  ${media.lessThan("medium")`
    font-size: 3.8vw;

    letter-spacing: 1px;
  `};
`;

export const SquareTitle = styled.p`
  margin: 12px 0 0 0;

  top: 70px;

  font-size: 24px;
  font-weight: 800;

  letter-spacing: 2px;

  line-height: 1.2;

  color: white;

  ${media.between("medium", "large")`
    margin-top: 9px;

    font-size: 19px;

    letter-spacing: 1px;
  `};

  ${media.lessThan("medium")`
    margin-top: 2%;

    font-size: 3.8vw;

    letter-spacing: 1px;
  `};
`;

export const SquareSpan = styled.span`
  font-size: 29px;

  line-height: 1;

  color: yellow;

  ${media.between("medium", "large")`
    font-size: 23px;
  `};

  ${media.lessThan("medium")`
    font-size: 4.56vw;
  `};
`;

const SquareText = styled.p`
  display: flex;

  margin: -8% 0 0 auto;

  padding: 8% 4% 0;

  height: 54%;
  width: 89%;

  font-size: 21px;

  line-height: 1.2;

  white-space: pre-wrap;

  align-items: center;

  color: #444444;

  background: white;

  ${media.between("medium", "large")`
    font-size: 17px;
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
          <Circle>
            <CircleNumber>Point. {index + 1}</CircleNumber>
            <CircleText>{circle}</CircleText>
          </Circle>
        ))}
      </Circles>

      {points.map((point, index) => (
        <Square>
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

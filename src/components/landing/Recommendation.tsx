import styled from "styled-components";
import { Container } from "./Container";

import CircleBackground from "../../assets/img/landing/Recommendation/circle-background.svg";

const RecommendationContainer = styled(Container)`
  display: flex;

  flex-direction: column;

  align-items: center;

  background: #dbf0f9;
`;

const Title = styled.h2`
  display: flex;

  margin-top: 105px;

  font-size: 35px;

  letter-spacing: 0.24em;

  line-height: 40px;
  justify-content: center;

  color: #444444;
`;

const GroupSpan = styled.span`
  font-size: 40px;

  color: #30c8d6;
`;

const TitleSpan = styled.span`
  display: flex;

  flex-direction: column-reverse;

  line-height: 40px;

  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;
`;

const Circles = styled.div`
  display: flex;

  justify-content: space-between;

  width: 770px;
`;

const Circle = styled.div`
  display: flex;

  border-radius: 50%;

  height: 200px;
  width: 200px;

  flex-direction: column;

  align-items: center;

  background: url(${CircleBackground}) top/200px;
`;

const CircleNumber = styled.h3`
  display: flex;

  margin: 14px 0 0 0;

  height: 55px;

  font-size: 22px;
  font-weight: normal;

  letter-spacing: 2px;

  justify-content: center;
  align-items: center;

  color: white;
`;

export const CircleText = styled.p`
  display: flex;

  margin: 15px 0 0 0;

  min-height: 65px;
  width: 200px;

  font-size: 23px;
  font-weight: 800;

  letter-spacing: -1px;

  line-height: 28px;
  text-align: center;

  justify-content: center;
  align-items: center;

  color: #444444;
`;

const Square = styled.div`
  height: 385px;
  width: 770px;
`;

const PointTitles = styled.div`
  position: relative;

  height: 180px;
  width: 505px;

  background: #76d8c6;
`;

const SquareNumber = styled.p`
  position: absolute;

  margin: 40px 0 0 35px;

  font-size: 24px;

  line-height: 30px;

  letter-spacing: 2px;

  color: white;
`;

interface Props {
  group: string;
  circles: JSX.Element[];
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
        <br />
        こんな
        <TitleSpan>あなた</TitleSpan>
        <br />
        におすすめ！
      </Title>

      <Circles>
        {circles.map((circle, index) => (
          <Circle>
            <CircleNumber>Point. {index + 1}</CircleNumber>
            {circle}
          </Circle>
        ))}
      </Circles>

      {points.map((point, index) => (
        <Square>
          <PointTitles>
            <SquareNumber>Point. {index + 1}</SquareNumber>
            {point.title}
          </PointTitles>
          <p>{point.description}</p>
        </Square>
      ))}
    </RecommendationContainer>
  );
};

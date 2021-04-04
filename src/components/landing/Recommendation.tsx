import styled from "styled-components";
import { Container } from "./Container";

const RecommendationContainer = styled(Container)`
  background-color: #dbf0f9;
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

const TitleSpan = styled.span`
  font-size: 40px;

  color: #30c8d6;
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
        コン研の<TitleSpan>{group}</TitleSpan>は
        <br />
        こんな<span>あなた</span>におすすめ！
      </Title>
      {circles.map((circle, index) => (
        <div>
          <p>Point. {index + 1}</p>
          <p>{circle}</p>
        </div>
      ))}
      {points.map((point, index) => (
        <div>
          <div>
            <p>Point. {index + 1}</p>
            {point.title}
          </div>
          <div>
            <p>{point.description}</p>
          </div>
        </div>
      ))}
    </RecommendationContainer>
  );
};

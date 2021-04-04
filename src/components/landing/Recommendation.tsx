import styled from "styled-components";
import { Container } from "./Container";

import Background from "../../assets/img/landing/recommendation/background.svg";

const RecommendationContainer = styled(Container)`
  background-image: ${Background};
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
      <h2>
        コン研の{group}は<br />
        こんな<span>あなた</span>におすすめ！
      </h2>
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

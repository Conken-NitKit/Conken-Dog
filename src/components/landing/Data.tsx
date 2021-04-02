import { Container } from "./Container";
import styled from "styled-components";

export const Data = () => {
  const Title = styled.h2`
    color: skyblue;
    font-weight: 8px;
  `;

  return (
    <Container>
      <Title>数字で見るコンピュータ研究部</Title>
      <div>
        <img src="../../assets/img/landing/datum/data.svg" />
        <p>
          コンピュータ研究部は
          <br />
          学内で最大規模の部活の一つです。
        </p>
        <p>
          どうやって、それだけ多くの人たちの心を
          <br />
          掴んでいるのか解説していきます。
        </p>
      </div>
    </Container>
  );
};

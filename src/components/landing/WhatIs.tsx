import { Container } from "../landing/Container";
import styled from "styled-components";
import WhatIspicture from "../../assets/img/landing/WhatIspicture.png";

const WhatIsContainer = styled(Container)`
  text-align: center;
  margin: 64px auto;
  @media (max-width: 414px) {
    margin: 16px auto;
  }
`;

const Title = styled.p`
  color: #6fd0ee;
  font-size: 1rem;
  width: 100%;
  @media (min-width: 414px) {
    font-size: 1.8rem;
  }
`;

const Sentence = styled.p`
  font-size: 0.75rem;
  color: #7e7e7e;
  @media (min-width: 414px) {
    font-size: 1.3rem;
  }
`;

const WhatIsImg = styled.img`
  height: 25vw;
  width: 80%;
  object-fit: cover;
  margin: 16px;
  border-radius: 8px;
  @media (max-width: 414px) {
    width: 90vw;
    height: 45vw;
    margin: 16px auto;
  }
`;

export const WhatIs = () => {
  return (
    <WhatIsContainer>
      <Title>コンピュータ研究部ってどんな部活?</Title>
      <Sentence>
        コンピュータに関する
        <br />
        あらゆることに『挑戦』する部活です。
      </Sentence>
      <Sentence>
        「〇〇をやってみたい！」というあなたの目標、
        <br />
        それらを全力でサポートしていきます！
      </Sentence>
      <WhatIsImg src={WhatIspicture} />
    </WhatIsContainer>
  );
};

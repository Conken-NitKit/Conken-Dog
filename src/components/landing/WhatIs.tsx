import { Container } from "../landing/Container";
import styled from "styled-components";
import WhatIspicture from "../../assets/img/landing/WhatIspicture.png";

const WhatIsContainer = styled(Container)`
  text-align: center;
`;

const Title = styled.div`
  
  margin-top: 1vw;
  color: #0aa5f8;
  font-size: 3vw;
  @media (max-width: 414px) {
  font-size: 5.3vw;
}
`;

const Sentence = styled.p`
  font-size: 2vw;
  @media (max-width: 414px) {
  font-size: 4vw;
}
`;

const WhatIsImg = styled.img`
  height: 25vw;
  width: 70vw;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 414px) {
  width: 80vw;
  height: 40vw;
  margin: 0 auto;
}
`;

export const WhatIs = () => {
  return (
    <WhatIsContainer>
      <Title>
        コンピュータ研究部ってどんな部活?
        </Title>
      <Sentence>
        コンピュータに関する<br />
            あらゆることに『挑戦』する部活です。
        </Sentence>
      <Sentence>
        「〇〇をやってみたい！」というあなたの目標、<br />
            それらを全力でサポートしていきます！
        </Sentence>
      <WhatIsImg src={WhatIspicture} />
    </WhatIsContainer>
  );
};

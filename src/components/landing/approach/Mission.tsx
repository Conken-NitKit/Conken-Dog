import styled from "styled-components";
import media from "styled-media-query";

const Circle = styled.div`
  display: flex;
  position: relative;

  margin: -15vw auto 0;
  border: 1px solid #87ceeb;
  box-shadow: 1px 1px 2px #87ceeb;
  border-radius: 50%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  ${media.lessThan("medium")`
    margin: -28vw auto 0;
    width: 70vw;
    height: 70vw;
  `}
  ${media.between("medium", "large")`
    width: 400px;
    height: 400px;
  `}
  ${media.greaterThan("large")`
    width: 550px;
    height: 550px;
  `}
`;

const Title = styled.h2`
  display: flex;
  top: -35px;
  margin: 0 0 28px;
  color: #87ceeb;
  font-weight: bold;
  font-size: 2.4rem;
  text-align: center;
  flex-direction: column-reverse;
  ${media.lessThan("medium")`
    flex-direction: column;
    font-size: 3vw;
`}
`;

const Text = styled.p`
  margin-top: -10px;
  font-size: 27px;
  text-align: center;
  color: #000000;
  z-index: 2;
  font-size: 1.2rem;
  ${media.lessThan("medium")`
    font-size: 2.6vw;
  `};
`;

export const Mission = () => {
  return (
    <Circle>
      <Title>Mission</Title>
      <Text>
        「〇〇がしたい！」という夢に向かって
        <br />
        楽しく学ぶうちに実力がついている
        <br />
        場所を作りたい。
        <br />
        <br />
        そのために、コンピュータ研究部は
        <br />
        自由・交流・自信を大切にして、
        <br />
        部員全員が「部活に行きたい！」と思える
        <br />
        環境を目指しています。
      </Text>
    </Circle>
  );
};

export default Mission;

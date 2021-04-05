import styled from "styled-components";
import media from 'styled-media-query';

const Circle = styled.div`
  display: flex;

  position: relative;

  margin: -127.5px auto 0 auto;
  border: 4px solid #87ceeb;
  border-radius: 50%;

  flex-direction: column;
  justify-content: center;
  background-color: white;
  ${media.lessThan("medium")`
    margin-top: -13vw;

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
  margin: 0;
  top: -35px;
  margin-bottom: 37.5px;
  height: 127.5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900px;
  font-size: 25px;
  text-align: center;
  color: #87ceeb;
  z-index: 2;
  flex-direction: column-reverse;
  ${media.lessThan("medium")`
    margin-top: calc(14vw - 8px);

    margin-bottom: 0;

    height: calc(6vw + 8px);

    flex-direction: column;

    font-size: 3vw;
`}
`;

const Text = styled.p`
margin: auto;
font-family: Roboto;
margin-top: -10px;
font-size: 27px;
text-align: center;
color: #000000;
z-index: 2;
${media.lessThan("medium")`
    margin-top: 0;

    top: 310px;
    font-size: 3vw;
`}

${media.between("medium", "large")`
  margin-top: 150px;
  font-size: 16px;
`}
`;

export const Mission = () => {
    return(
        <Circle>
          <Title>mission</Title>
          <Text>
          「〇〇がしたい！」という夢に向かって
          <br/>楽しく学ぶうちに実力がついている
          <br/>場所を作りたい。
          <br/>そのために、コンピュータ研究部は
          <br/>自由・交流・自信を大切にして、
          <br/>部員全員が「部活に行きたい！」と思える
          <br/>環境を目指しています。
        </Text>
        </Circle>
    )
}

export default Mission;
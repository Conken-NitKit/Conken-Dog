import styled from "styled-components";
import media from 'styled-media-query';

const Circle = styled.div`
  display: flex;
  margin: -127.5px auto 0 auto;
  border: 8px solid #87ceeb;
  border-radius: 50%;
  justify-content: center;
  background-color: white;
  ${media.lessThan("medium")`
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
  position: absolute;
  display: flex;
  margin: 0;
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
    margin-top: -10vw;
    font-size: 3vw;
`}
`;

const Text = styled.p`
flex-direction: column;
margin: auto;
border-radius: 50%;
font-family: Roboto;
font-size: 27px;
text-align: center;
color: #000000;
z-index: 2;
${media.lessThan("medium")`
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
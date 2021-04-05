import styled from "styled-components";
import media from 'styled-media-query';
import { TopImages } from "./approach/TopImages";
import { Mission } from "./approach/Mission";
import { Container } from "./Container";

import kita from "../../assets/img/landing/approach/kita.webp";
import conken from "../../assets/img/landing/approach/Conken.webp";
import maru from "../../assets/img/landing/approach/maru.webp";
import sinkan from "../../assets/img/landing/approach/sinkan.webp";

const ApproachContainer = styled(Container)`
  padding: 0;
  background-color: red;
`;

const CatchCopy = styled.h1`
  position: absolute;
  top: 160px;
  left: 0px;
  margin: auto;
  width: 100%;
  font-family: Gen Jyuu Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 600%;
  text-align: center;
  text-transform: capitalize;
  color: #FFFFFF;
  text-shadow: 8px 8px 3px #191970;
  ${media.lessThan("medium")`
    font-size: 330%;
    text-shadow: 3px 3px 3px #191970;
  `};
`;

const Header = styled.header`
  height: 530px;

  background-color: #87ceeb;
  ${media.lessThan("medium")`
    width: 100%;
    height: 127vw;
  `}

  ${media.between("medium", "large")`
    width: 750px;
    height: 650px;
  `}

  ${media.greaterThan("large")`
    width: 940px;
  `}
`;

const Condog = styled.h3`
  position: fixed;
  left: 3%;
  top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-size: 20px;
  color: #FFFFFF;
  text-shadow: 3px 3px 2px #525283;
`;

const Login = styled.h3`
  position: fixed;
  right: 3%;
  top: 25px;
  font-family: Roboto;
  font-style: normal;
  font-size: 20px;
  color: #FFFFFF;
  text-shadow: 3px 3px 2px #191970;
`;

const HeaderBottom = styled.div`
  margin-top: -127.5px;
  border-radius: 50%;

  height: 255px;
  width: 100%;
  background-color: #87ceeb;
`;

const Block = styled.div`
position: relative;
height: 700px;
width: 100%;
background-color: blue;
`;

const Kita = styled.img`
  width: 200px;
  margin: 0 auto auto 60px;
  ${media.lessThan("medium")`
    width: 35%;
    margin-left: 7px;
  `}

  ${media.between("medium", "large")`
    width: 20vw;
    margin-left: 20px;
  `}

  ${media.greaterThan("large")`

  `}
`;

const Conken = styled.img`
  position: absolute;
  right: 0;
  top: 40px;
  width: 230px;
  margin-right: 30px;
  ${media.lessThan("medium")`
    width: 32%;
    margin-right: 7px;
  `}

  ${media.between("medium", "large")`
  margin-right: 3px;
  width: 30%;
  `}
`;

const Text2 = styled.h1`
position: absolute;
width: 100%;
text-align: center;
margin: 80px auto;
font-family: Gen Jyuu Gothic;
font-size: 3rem;
${media.lessThan("medium")`
font-size: 23px;
`};
`;

const Maru = styled.img`
  position: absolute;
  width: 200px;
  right: 0px;
  margin: 380px auto 70px auto;
  ${media.lessThan("large")`
  top: 70%;
  left: 72%;
  width: 30%;
  `};
`;

const Sinkan = styled.img`
  position: absolute;
  left: 0px;
  margin-top: 400px;
  width: 240px;
  ${media.lessThan("large")`
  left: 7%;
  width: 34%;
  `};
`;
export const Approach = () => {
  return (
    <ApproachContainer>
      <Header>
      <TopImages/>
      <CatchCopy>Learn To Play<br/>Than Anywhere</CatchCopy>
      <Condog>Conken-Dog</Condog>
      <a href="https://conken-dog.netlify.app/signup">
        <Login>新規登録</Login>
      </a>
      </Header>
      <HeaderBottom/>
      <Mission/>
      <Block>
        <Kita src={kita}/>
        <Conken src={conken}/>
        <Text2>遊ぶように学ぼう　どこよりも</Text2>
        <Maru src={maru}/>
        <Sinkan src={sinkan}/>
      </Block>
      </ApproachContainer>
  );
};
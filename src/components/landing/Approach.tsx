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
`;

const CatchCopy = styled.h1`
  position: relative;
  margin: -460px auto 0 auto;
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
    font-size: 14vw;
    margin-top: -98vw;
    width: 69vw;
    text-shadow: 3px 3px 3px #191970;
  `};
  ${media.between("medium", "large")`
    font-size: 500%;
  `}
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

const HeaderBottom = styled.div`
  margin-top: -127.5px;
  border-radius: 50%;
  height: 255px;
  width: 100%;
  background-color: #87ceeb;
  ${media.lessThan("medium")`
    margin-top: -14vw;
    height: 27vw;
  `};
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
  z-index: 100;
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
  z-index: 100;
`;

const Block = styled.div`
  position: relative;
  height: 700px;
  width: 100%;
  ${media.lessThan("medium")`
    height: 110vw;
  `}

  ${media.between("medium", "large")`
  height: 650px;
  `}
`;

const Kita = styled.img`
  width: 200px;
  margin: 0 auto auto 60px;
  ${media.lessThan("medium")`
    width: 35%;
    margin-left: 7px;
  `}

  ${media.between("medium", "large")`
    width: 180px;
    margin-left: 20px;
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
margin: 10vw auto 0 auto;
font-family: Gen Jyuu Gothic;
font-size: 3rem;
  ${media.lessThan("medium")`
    font-size: 5vw;
  `};
  ${media.between("medium", "large")`
    font-size: 27px;
  `}
`;

const Maru = styled.img`
  position: absolute;
  right: 0px;
  margin-top: 410px;
  width: 200px;
  ${media.lessThan("medium")`
    width: 32%;
    margin-top: 60vw;
  `}

  ${media.between("medium", "large")`
  width: 30%;
  margin-top: 380px;
  `}
`;

const Sinkan = styled.img`
  position: absolute;
  left: 0px;
  margin-top: 440px;
  width: 240px;
  ${media.lessThan("medium")`
    width: 32%;
    margin-top: 68vw;
  `}

  ${media.between("medium", "large")`
  width: 30%;
  margin-top: 390px;
  `}
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
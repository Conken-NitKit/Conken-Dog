import styled from "styled-components";
import media from "styled-media-query";
import { TopImages } from "./approach/TopImages";
import { Mission } from "./approach/Mission";
import { Container } from "./Container";

import kita from "../../assets/img/landing/approach/kita.webp";
import conken from "../../assets/img/landing/approach/Conken.webp";
import maru from "../../assets/img/landing/approach/maru.webp";
import sinkan from "../../assets/img/landing/approach/sinkan.webp";
import { TopImagesBottom } from "./approach/TopImagesBottom";

const ApproachContainer = styled(Container)`
  width: 100vw;
  padding: 0;
`;

const CatchCopy = styled.h1`
  position: absolute;
  width: 100vw;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-family: Gen Jyuu Gothic;
  font-weight: bold;
  font-size: 600%;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 1.5px #fff;
  ${media.lessThan("medium")`
    top: 25%;
    font-size: 36px;
    -webkit-text-stroke: 0.8px #fff;
  `};
`;

const Header = styled.header`
  height: 40vw;
  background-color: #87ceeb;
  overflow: hidden;
  ${media.lessThan("medium")`
    height: 140vw;
  `}
`;

const Condog = styled.h3`
  position: absolute;
  left: 3%;
  top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-size: 20px;
  color: #ffffff;
  text-shadow: 3px 3px 2px #525283;
  z-index: 100;
`;

const Login = styled.h3`
  position: absolute;
  right: 3%;
  top: 25px;
  font-family: Roboto;
  font-style: normal;
  font-size: 20px;
  color: #ffffff;
  text-shadow: 3px 3px 2px #191970;
  z-index: 100;
`;

const Block = styled(Container)`
  position: relative;
  padding-bottom: 80px;
  ${media.greaterThan("medium")`
    padding-bottom: 128px;
  `};
`;

const Kita = styled.img`
  position: relative;
  width: 32%;
  border-radius: 50%;
  border: solid 4px white;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  ${media.greaterThan("medium")`
    width: 24%;
  `};
`;

const Conken = styled.img`
  position: absolute;
  top: 48px;
  right: 16px;
  width: 32%;
  border-radius: 50%;
  border: solid 4px white;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  ${media.greaterThan("medium")`
    width: 24%;
  `};
`;

const Text2 = styled.h1`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  color: #333;
  text-align: center;
  font-size: 3rem;
  margin: 128px 0 96px;
  ${media.lessThan("medium")`
    font-size: 5vw;
    margin: 80px 0 48px;
  `};
`;

const Maru = styled.img`
  position: relative;
  top: 48px;
  width: 32%;
  border-radius: 50%;
  border: solid 4px white;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  ${media.greaterThan("medium")`
    width: 24%;
  `};
`;

const Sinkan = styled.img`
  position: absolute;
  right: 16px;
  width: 32%;
  border-radius: 50%;
  border: solid 4px white;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  ${media.greaterThan("medium")`
    width: 24%;
  `};
`;

export const Approach = () => {
  return (
    <ApproachContainer>
      <Header>
        <TopImages />
        <CatchCopy>
          Learn To Play
          <br />
          Than Anywhere
        </CatchCopy>
        <Condog>Conken-Dog</Condog>
        <a href="https://conken-dog.netlify.app/signup">
          <Login>新規登録</Login>
        </a>
      </Header>
      <TopImagesBottom />
      <Mission />
      <Block>
        <Kita src={kita} />
        <Conken src={conken} />
        <Text2>遊ぶように学ぼう　どこよりも</Text2>
        <Maru src={maru} />
        <Sinkan src={sinkan} />
      </Block>
    </ApproachContainer>
  );
};

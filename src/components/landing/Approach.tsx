import styled from "styled-components";
import { TopImages } from "./approach/TopImages";
import { Mission } from "./approach/Mission";

import kita from "../../assets/img/landing/approach/kita.png";
import conken from "../../assets/img/landing/approach/Conken.png";
import maru from "../../assets/img/landing/approach/maru.png";
import sinkan from "../../assets/img/landing/approach/sinkan.png";

const Div = styled.div`
  position: relative;
  height: 2350px;
`;

const TopBackgroundSquare = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 921px;
  width: 100%;
  background-color: #87ceeb;
`;

const TopBackgroundCircle = styled.div`
  position: absolute;
  top: 726px;
  height: 389px;
  width: 1440px;
  left: 0px;
  border-radius: 50%;
  background-color: #87ceeb;
`;

const CatchCopy = styled.h1`
  position: absolute;
  width: 1340px;
  height: 434px;
  left: 88px;
  top: 140px;
  font-family: Gen Jyuu Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 750%;
  line-height: 238px;
  text-align: center;
  text-transform: capitalize;
  color: #FFFFFF;
  text-shadow: 10px 10px 4px #191970;
`;

const Condog = styled.h3`
  position: fixed;
  left: 3%;
  top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 53px;
  color: #FFFFFF;
  text-shadow: 3px 3px 2px #191970;
`;

const Login = styled.h3`
  position: fixed;
  right: 3%;
  top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 53px;
  color: #FFFFFF;
  text-shadow: 3px 3px 2px #191970;
`;

const Kita = styled.img`
  position: absolute;
  left: 8%;
  top:68%;
  width: 250px;
`;

const Conken = styled.img`
  position: absolute;
  right: 5%;
  top:70%;
  width: 300px;
`;

const Maru = styled.img`
  position: absolute;
  right: 17%;
  top:87%;
  width: 280px;
`;

const Sinkan = styled.img`
  position: absolute;
  left: 8%;
  top:83%;
  width: 350px;
`;

const Moji = styled.h1`
  position: absolute;
  width: 1361px;
  height: 869px;
  right: -20%;
  top: 78%;
  font-family: Gen Jyuu Gothic;
  font-size: 50px;
`;

//上から下
export const Approach = () => {

  return (
    <Div>
      <TopBackgroundSquare>
        
        <TopBackgroundCircle />
        <TopImages />

        <Condog>Conken-Dog</Condog>
        <a href="https://conken-dog.netlify.app/signup">
        <Login>新規登録</Login>
        </a>
        <CatchCopy>Learn To Play<br/> Than Anywhere</CatchCopy>

        <Mission/>
      </TopBackgroundSquare>

      <Kita src={kita}/>
      <Conken src={conken}/>
      <Maru src={maru}/>
      <Sinkan src={sinkan}/>
      <Moji>遊ぶように学ぼう　どこよりも</Moji>
    </Div>
  );
};
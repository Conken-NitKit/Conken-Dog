import styled from "styled-components";
import { TopImages } from "./approach/TopImages";
import { Mission } from "./approach/Mission";

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

//上から下
export const Approach = () => {
  return (
    <div>
      <TopBackgroundSquare>
        
        <TopBackgroundCircle />
        <TopImages />

        <Condog>Conken-Dog</Condog>
        <Login>新規登録</Login>
        <CatchCopy>Learn To Play<br/> Than Anywhere</CatchCopy>

        <Mission/>

      </TopBackgroundSquare>
    </div>
  );
};
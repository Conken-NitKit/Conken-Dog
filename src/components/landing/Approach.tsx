import styled from "styled-components";
import { ImageTop } from "./TopImages";

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

const WhiteCircle = styled.div`
  position: relative;
  height: 550px;
  width: 550px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  top: 926px;
  background-color: white;
  z-index: 2;
`;


const BigCircle = styled.div`
  position: relative;
  height: 560px;
  width: 560px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  top: 371px;
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
  font-size: 140px;
  line-height: 238px;
  text-align: center;
  text-transform: capitalize;
  color: #FFFFFF;
  text-shadow: 10px 10px 4px #191970;
`;

//上から下
export const Approach = () => {
  return (
    <div>
      <TopBackgroundSquare>
        
        <TopBackgroundCircle />
        <ImageTop />
        <CatchCopy>Learn To Play
          <br/> Than Anywhere</CatchCopy>
        <WhiteCircle/>
        <BigCircle />
      </TopBackgroundSquare>
    </div>
  );
};
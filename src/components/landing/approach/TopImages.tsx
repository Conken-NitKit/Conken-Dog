import styled from "styled-components";

import kinpatu from "../../../assets/img/landing/approach/kinpatu.png";
import tabako from "../../../assets/img/landing/approach/tabako.png";
import redeye from "../../../assets/img/landing/approach/RedEye.png";
import momo from "../../../assets/img/landing/approach/Momo.png";
import natusenpai from "../../../assets/img/landing/approach/natusenpai.jpeg";
import halloween from "../../../assets/img/landing/approach/Halloween.bmp";
import daiteito from "../../../assets/img/landing/approach/Daiteito.png";
import yuniko from "../../../assets/img/landing/approach/yuniko.png";
import riceball from "../../../assets/img/landing/approach/RiceBall.png";
import megane from "../../../assets/img/landing/approach/megane.png";
import library from "../../../assets/img/landing/approach/library.png";
import rainny from "../../../assets/img/landing/approach/rainny.png";
import yoru from "../../../assets/img/landing/approach/yoru.png";
import nekomimi from "../../../assets/img/landing/approach/nekomimi.jpeg";

const Kinpatu = styled.img`
  position: absolute;
  left: 25px;
  top: 0px;
  height: 350px;
`;

const Tabako = styled.img`
  position: absolute;
  left: 317px;
  top: 0px;
  height: 350px;
`;

const Redeye = styled.img`
  position: absolute;
  left: 592px;
  top: 0px;
  bottom: 68.27%;
  height: 350px;
  width: 262.5px;
`;

const Momo = styled.img`
  position: absolute;
  left: 867px;
  top: 0px;
  height: 350px;
  width: 262.5px;
`;

const Natusenpai = styled.img`
  position: absolute;
  left: 1142px;
  top: 0px;
  height: 350px;
`;

const HalloWeen = styled.img`
  position: absolute;
  left: 0px;
  top: 360px;
  height: 290px;
`;

const Daiteito = styled.img`
  position: absolute;
  left: 399px;
  top: 360px;
  height: 290px;
`;

const Yuniko = styled.img`
  position: absolute;
  left: 701px;
  top: 360px;
  height: 290px;
`;

const RiceBall = styled.img`
  position: absolute;
  left: 1230px;
  top: 360px;
  height: 290px;
`;

const Megane = styled.img`
  position: absolute;
  left: 13px;
  top: 660px;
  width: 248px;
`;

const Library = styled.img`
  position: absolute;
  left: 274px;
  top: 660px;
  height: 382px;
  width: 333px;
`;

const Rainny = styled.img`
  position: absolute;
  left: 617px;
  top: 660px;
  width: 240px;
`;

const Yoru = styled.img`
  position: absolute;
  left: 876px;
  top: 660px;
  height: 390px;
  width: 273px;
`;

const Nekomimi = styled.img`
  position: absolute;
  left: 1159px;
  top: 660px;
  height: 270px;
  width: 276px;
`;

export const TopImages = () => {
  return(
      <div>
      <Kinpatu src={kinpatu} />
      <Tabako src={tabako}/>
      <Redeye src={redeye}/>
      <Momo src={momo}/>
      <Natusenpai src={natusenpai}/>

      <br/>
      <HalloWeen src={halloween}/>
      <Daiteito src={daiteito}/>
      <Yuniko src={yuniko}/>
      <RiceBall src={riceball}/>

      <br/>
      <Megane src={megane}/>
      <Library src={library}/>
      <Rainny src={rainny}/>
      <Yoru src={yoru}/>
      <Nekomimi src={nekomimi}/>
    </div>
  )
} 

export default TopImages;

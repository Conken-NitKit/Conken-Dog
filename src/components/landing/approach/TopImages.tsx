import styled from "styled-components";
import media from 'styled-media-query';

import kinpatu from "../../../assets/img/landing/approach/kinpatu.webp";
import tabako from "../../../assets/img/landing/approach/tabako.webp";
import redeye from "../../../assets/img/landing/approach/RedEye.webp";
import momo from "../../../assets/img/landing/approach/momo.webp";
import natusenpai from "../../../assets/img/landing/approach/natusenpai.webp";
import halloween from "../../../assets/img/landing/approach/Halloween.webp";
import daiteito from "../../../assets/img/landing/approach/Daiteito.webp";
import yuniko from "../../../assets/img/landing/approach/yuniko.webp";
import riceball from "../../../assets/img/landing/approach/RiceBall.webp";
import megane from "../../../assets/img/landing/approach/megane.webp";
import library from "../../../assets/img/landing/approach/library.webp";
import rainny from "../../../assets/img/landing/approach/rainny.webp";
import yoru from "../../../assets/img/landing/approach/yoru.webp";
import nekomimi from "../../../assets/img/landing/approach/nekomimi.webp";
import dotto from "../../../assets/img/landing/approach/dotto.webp";

const Conteiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  ${media.lessThan("medium")`
    padding: 0 7vw 0 5vw;
  `};
`;

const Image = styled.img`
  position: relative;
  flex-basis: 12%;
  width: calc(100% - 10px);
  margin: 5px 5px 0px;
  ${media.lessThan("medium")`
    margin: 2vw 0 0 2vw;
    width: 23vw;
    flex-basis: 2%;
  `};
`;

export const TopImages = () => {
  return(
        <Conteiner>
          <Image src={kinpatu} />
          <Image src={tabako}/>
          <Image src={redeye}/>
          <Image src={momo}/>
          <Image src={natusenpai}/>
          <Image src={halloween}/>
          <Image src={daiteito}/>
          <Image src={yuniko}/>
          <Image src={riceball}/>
          <Image src={megane}/>
          <Image src={library}/>
          <Image src={rainny}/>
          <Image src={yoru}/>
          <Image src={nekomimi}/>
          <Image src={dotto}/>
        </Conteiner>
  )
} 

export default TopImages;

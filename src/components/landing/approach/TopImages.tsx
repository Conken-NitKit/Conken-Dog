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

// flex-box　デメリット：大変、縦横比統一　メリット： 成長できる; 
// keynote　デメリット：イラスト、写真が変更できない　macしか編集できない　メリット：　”ポイントを踏まえれば”簡単　こだわれる;


const Conteiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
`;

const Image = styled.img`
  position: relative;
  flex-basis: 12%;
  width: calc(100% - 10px);
  margin: 5px 5px 0px;
  ${media.lessThan("medium")`
    flex-basis: 2%;
    width: 23vw;
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

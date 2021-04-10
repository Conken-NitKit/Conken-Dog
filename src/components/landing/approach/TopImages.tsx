import styled from "styled-components";
import media from "styled-media-query";

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

const Conteiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  width: 100vw;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  height: 140vw;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  ${media.greaterThan("medium")`
    height: 40vw;
  `};
`;

const Image = styled.img`
  position: relative;
  flex-basis: 20%;
  ${media.lessThan("medium")`
    height: 35vw;
    flex-basis: 50%;
  `};
`;

export const TopImages = () => {
  return (
    <Conteiner>
      <Image src={kinpatu} />
      <Image src={tabako} />
      <Image src={redeye} />
      <Image src={momo} />
      <Image src={natusenpai} />
      <Image src={halloween} />
      <Image src={daiteito} />
      <Image src={yuniko} />
      <Image src={riceball} />
      <Image src={megane} />
      <Cover />
    </Conteiner>
  );
};

export default TopImages;

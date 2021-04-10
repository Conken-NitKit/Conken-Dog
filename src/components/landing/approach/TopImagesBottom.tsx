import styled from "styled-components";
import media from "styled-media-query";

import library from "../../../assets/img/landing/approach/library.webp";
import rainny from "../../../assets/img/landing/approach/rainny.webp";
import yoru from "../../../assets/img/landing/approach/yoru.webp";
import nekomimi from "../../../assets/img/landing/approach/nekomimi.webp";
import dotto from "../../../assets/img/landing/approach/dotto.webp";

const HeaderBottom = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  margin-top: -20vw;
  border-radius: 50%;
  height: 40vw;
  width: 100vw;
  overflow: hidden;
  background-color: #87ceeb;
  ${media.lessThan("medium")`
    margin-top: -40vw;
    height: 80vw;
  `};
`;

const BottomCover = styled.div`
  position: relative;
  top: -110vw;
  height: 50vw;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  ${media.greaterThan("medium")`
    top: 0vw;
    height: 40vw;
  `};
`;

const Image = styled.img`
  position: relative;
  flex-basis: 50%;
  top: 50%;
  ${media.greaterThan("medium")`
    flex-basis: 20%;
  `};
`;

export const TopImagesBottom = () => {
  return (
    <HeaderBottom>
      <Image src={library} />
      <Image src={rainny} />
      <Image src={yoru} />
      <Image src={nekomimi} />
      <Image src={dotto} />
      <BottomCover />
    </HeaderBottom>
  );
};

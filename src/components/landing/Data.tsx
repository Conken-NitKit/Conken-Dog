import { Container } from "./Container";
import styled from "styled-components";
import DataSrc from "../../assets/img/landing/datum/data.svg";
import media from "styled-media-query";

const ImgStyle = styled.img`
  width: 403px;
  height: 462px;
  ${media.lessThan("medium")`
  width: 160px;
  height: 170px; 
  `};
`;

const Title = styled.h2`
  font-family: Meiryo;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 80px;
  text-align: center;
  color: #87ceeb;
  ${media.lessThan("medium")`
    font-size: 16px;
  `};
`;

const DataStyle = styled.div`
  display: flex;
  margin-bottom: 50px;
  ${media.lessThan("medium")`
    align-items: center;
    flex-direction: column;
  `};

`;

const DescriptionStyle = styled.div`
  margin: 30px 0 0 60px;
  ${media.lessThan("medium")`
    margin: 0;
  `};
`;

const TextStyle = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 32px;
  color: #444444;
  margin: 32px auto 0;
  ${media.lessThan("medium")`
    font-size: 13px;
    margin: 32px auto -16px;
    line-height: 20px;
  `};
`;

export const Data = () => {
  return (
    <Container>
      <Title>数字で見るコンピュータ研究部</Title>
      <DataStyle>
        <ImgStyle src={DataSrc} />
        <DescriptionStyle>
          <TextStyle>
            コンピュータ研究部は
            <br />
            学内で最大規模の部活の一つです。
          </TextStyle>
          <TextStyle>
            どうやって、それだけ多くの人たちの心を
            <br />
            掴んでいるのか解説していきます。
          </TextStyle>
        </DescriptionStyle>
      </DataStyle>
    </Container>
  );
};

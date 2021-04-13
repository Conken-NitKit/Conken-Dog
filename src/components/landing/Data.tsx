import { Container } from "./Container";
import styled from "styled-components";
import DataSrc from "../../assets/img/landing/datum/data.svg";

const ImgStyle = styled.img`
  width: 403px;
  height: 462px;
`;

const Title = styled.h2`
  font-family: Meiryo;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 90px;
  text-align: center;
  color: #87ceeb;
`;

const DataStyle = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const DescriptionStyle = styled.div`
  margin-left: 60px;
  margin-top: 60px;
`;

const TextStyle = styled.p`
  font-size: 25px;
  font-family: Yinmar;
  font-style: normal;
  font-weight: normal;
  line-height: 40px;
  color: #444444;
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

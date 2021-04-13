import { Container } from "./Container";
import styled from "styled-components";
import media from "styled-media-query";

interface Props {
  heading1: string;
  heading2: string;
  plan1: string;
  plan2: string;
  commonTitle: string;
  common: string;
  contentTitle1: string;
  content1: string;
  contentTitle2: string;
  content2: string;
}

const PlanContainer = styled(Container)`
  text-align: center;
  margin: 64px auto;
  ${media.lessThan("medium")`
    padding: 32px 4px;
  `};
`;

const TitleBox = styled.div`
  text-align: center;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h2`
  vertical-align: middle;

  font-family: Roboto;
  font-size: 3rem;
  width: 100%;

  white-space: nowrap;

  color: #55dddd;
  ${media.between("medium", "large")`
  font-size: 2rem;
  `};
  ${media.lessThan("medium")`
  font-size: 1.8rem;
  `};
  @media (max-width: 414px) {
    font-size: 1.5rem;
  }
`;

const Option = styled.div`
  width: 47%;
  height: 37vh;

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  ${media.between("medium", "large")`
    height:30vh;
  `};
  ${media.lessThan("medium")`
    height: 28vw;
  `};
`;

const Lead = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 15px;
  padding-top: 10px;
  padding-bottom: 8px;

  text-align: center;
  white-space: nowrap;

  color: #444444;

  ${media.between("medium", "large")`
    font-size: 0.8rem;
    line-height: 7px;
    padding-top: 10px;
    padding-bottom: 2px;
  `};
  ${media.lessThan("medium")`
    font-size: 0.7rem;
    line-height: 6px;
    padding-top: 5px;
    padding-bottom: 2px;
  `};
  @media (max-width: 414px) {
    font-size: 1px;
    line-height: 15px;
    padding-top: 20px;
    padding-bottom: 8px;
  }
`;
const Cat = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-size: 1.9rem;
  line-height: 10px;
  text-align: center;
  white-space: nowrap;

  color: #a296ec;

  ${media.between("medium", "large")`
    font-size: 1.7rem;
    line-height: 8px;
  `};
  ${media.lessThan("medium")`
    font-size: 1.5rem;
    line-height: 5px;
  `};
  @media (max-width: 414px) {
    font-size: 1.9rem;
    line-height: 10px;
  }
`;
const Content = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 8px;

  text-align: center;
  white-space: nowrap;

  color: #444444;

  ${media.between("medium", "large")`
    font-size: 0.7rem;
    line-height: 6px;
  `};
  ${media.lessThan("medium")`
    font-size: 0.7rem;
    line-height: 6px;
  `};
  @media (max-width: 414px) {
    font-size: 0.8rem;
    line-height: 8px;
  }
`;
const List = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 13px;

  text-align: center;

  color: #888888;

  ${media.between("medium", "large")`
    font-size: 0.7rem;
    line-height: 12px;
  `};
  ${media.lessThan("medium")`
    font-size: 0.7rem;
    line-height: 13px;
  `};
  @media (max-width: 414px) {
    font-size: 0.8rem;
    line-height: 10px;
  }
`;

export const Plan = ({
  heading1,
  heading2,
  plan1,
  plan2,
  commonTitle,
  common,
  contentTitle1,
  content1,
  contentTitle2,
  content2,
}: Props) => {
  return (
    <PlanContainer>
      <TitleBox>
        <Title>選べる育成プラン</Title>
      </TitleBox>
      <Box>
        <Option>
          <Lead>{heading1}</Lead>
          <Cat>{plan1}</Cat>
          <Content>{commonTitle}</Content>
          <List>{common}</List>
          <Content>{contentTitle1}</Content>
          <List>{content1}</List>
        </Option>

        <Option>
          <Lead>{heading2}</Lead>
          <Cat>{plan2}</Cat>
          <Content>{commonTitle}</Content>
          <List>{common}</List>
          <Content>{contentTitle2}</Content>
          <List>{content2}</List>
        </Option>
      </Box>
    </PlanContainer>
  );
};

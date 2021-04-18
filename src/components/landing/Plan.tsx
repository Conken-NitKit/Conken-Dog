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
  ${media.lessThan("medium")`
    flex-direction: column;
  `};
`;

const Title = styled.h2`
  font-family: Roboto;
  font-size: 3rem;
  width: 100%;
  color: #55dddd;

  ${media.lessThan("medium")`
    font-size: 1.2rem;
  `};
`;

const Option = styled.div`
  width: 47%;
  padding: 0 0 24px;

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  ${media.lessThan("medium")`
    margin: 16px auto;
    width: 96%;
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

const CourseTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-size: 1.9rem;
  text-align: center;
  white-space: nowrap;

  color: #a296ec;

  ${media.lessThan("medium")`
    font-size: 1.3rem;
  `};
`;

const ContentTitle = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 8px;

  text-align: center;
  white-space: nowrap;

  color: #444444;

  ${media.lessThan("medium")`
    font-size: 0.6rem;
    line-height: 6px;
  `};
`;

const ContentItems = styled.p`
  color: #888888;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 20px;
  text-align: center;
  white-space: pre-wrap;
  ${media.lessThan("medium")`
    font-size: 0.55rem;
  `};
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
          <CourseTitle>{plan1}</CourseTitle>
          <ContentTitle>{commonTitle}</ContentTitle>
          <ContentItems>{common}</ContentItems>
          <ContentTitle>{contentTitle1}</ContentTitle>
          <ContentItems>{content1}</ContentItems>
        </Option>

        <Option>
          <Lead>{heading2}</Lead>
          <CourseTitle>{plan2}</CourseTitle>
          <ContentTitle>{commonTitle}</ContentTitle>
          <ContentItems>{common}</ContentItems>
          <ContentTitle>{contentTitle2}</ContentTitle>
          <ContentItems>{content2}</ContentItems>
        </Option>
      </Box>
    </PlanContainer>
  );
};

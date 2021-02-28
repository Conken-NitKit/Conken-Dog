import { useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";

import { ICourses } from "../assets/courses";
import { Container } from "../layouts/Container";
import { Description } from "../styles/fonts/Description";
import { Heading1 } from "../styles/fonts/Heading1";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";
import { redirectNonLogin } from "../utils/users/redirectNonLogin";

const CourseCard = styled.div`
  background-color: #fff;
  margin: 64px auto 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 10%);
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  padding: 56px 48px;
  position: relative;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 14%);
  }
  ${media.lessThan("medium")`
    padding: 56px 28px;
  `}
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 72px;
  ${media.lessThan("medium")`
    flex-direction: column-reverse;
    margin-bottom: 56px;
  `}
`;

const HeadingLeft = styled.div`
  width: 45%;
  margin-left: 32px;
  ${media.lessThan("medium")`
    width: 88%;
  `}
`;

const HeadingRight = styled.div`
  width: 40%;
  padding: 0 32px;
  ${media.lessThan("medium")`
    width: 88%;
  `}
`;

const HeadingImg = styled.img`
  width: 100%;
  max-height: 300px;
  height: auto;
`;

interface Props extends RouteComponentProps {
  value: ICourses;
}

export default function Course({ value, history }: Props) {
  const generateCourseMinute = () =>
    value.sections.reduce(
      (sum, cur): number =>
        sum +
        cur.contentsList.reduce(
          (sum, cur): number => sum + cur.requiredTime,
          0
        ),
      0
    );

  useEffect(() => {
    redirectNonLogin(history);
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Heading>
        <HeadingLeft>
          <Heading1>{value.name}</Heading1>
          <Description>{value.description}</Description>
          <Small>
            修了時間
            {generateCourseMinute() >= 60 &&
              ` ${Math.floor(generateCourseMinute() / 60)}時間`}
            {generateCourseMinute() % 60 !== 0 &&
              ` ${generateCourseMinute() % 60}分`}
          </Small>
        </HeadingLeft>
        <HeadingRight>
          <HeadingImg src={value.logoSVG} />
        </HeadingRight>
      </Heading>

      {value.sections.map((section, i) => {
        const generateSectionMinute = () =>
          section.contentsList.reduce(
            (sum, cur): number => sum + cur.requiredTime,
            0
          );
        return (
          <Link
            to={`/${value.metaName}/${i + 1}`}
            style={{ textDecoration: "none", color: "rgb(88, 118, 163)" }}
          >
            <CourseCard key={value.name + i.toString()}>
              <Heading2>{section.title}</Heading2>
                <Description>{section.description}</Description>
              <Small>
                修了時間
                {generateSectionMinute() >= 60 &&
                  ` ${Math.floor(generateSectionMinute() / 60)}時間`}
                {generateSectionMinute() % 60 !== 0 &&
                  ` ${generateSectionMinute() % 60}分`}
              </Small>
            </CourseCard>
          </Link>
        );
      })}
    </Container>
  );
}

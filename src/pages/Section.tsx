import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import { ISection } from "../assets/sections";
import { SectionItem } from "../components/SectionItem";
import { Container } from "../layouts/Container";
import { Description } from "../styles/fonts/Description";
import { Heading1 } from "../styles/fonts/Heading1";
import { Small } from "../styles/fonts/Small";
import { redirectNonLogin } from "../utils/users/redirectNonLogin";

const ContentsList = styled.ul`
  background: #fff;
  border: solid 2px #f3eded;
  padding: 36px;
  margin-top: 64px;
  border-radius: 6px;
`;

interface Props extends RouteComponentProps{
  value: ISection;
}

export default function Section({ value, history }: Props) {
  const generateMinute = () =>
    value.contentsList.reduce((sum, cur): number => sum + cur.requiredTime, 0);

  useEffect(() => {
    redirectNonLogin(history);
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Heading1>{value.title}</Heading1>
      <Description>{value.description}</Description>
      <Small>
        合計修了時間 |
        {generateMinute() >= 60 && ` ${Math.floor(generateMinute() / 60)}時間`}
        {generateMinute() % 60 !== 0 && ` ${generateMinute() % 60}分`}
      </Small>
      <ContentsList>
        {value.contentsList.map((content, i) => (
          <SectionItem key={value.title + i.toString()} content={content} />
        ))}
      </ContentsList>
    </Container>
  );
}

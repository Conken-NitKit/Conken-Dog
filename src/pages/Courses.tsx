import styled from "styled-components";

import LessonContainer from "../components/LessonContainer";
import NavigationBar from "../components/NavigationBar";
import { ResponsiveWrapper } from "../layouts/ResponsiveWrapper";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";

const LessonWrapper = styled.div`
  margin: 20px;
`;

export default function Knowledges() {
  return (
    <>
      <ResponsiveWrapper>
        <LessonWrapper>
          <Heading2>レッスン</Heading2>
          <Small>今後、あなたに取り組んで欲しいレッスン</Small>
          <LessonContainer useFinishedFilter={false} />
          <Heading2>修了レッスン</Heading2>
          <Small>あなたがこれまでに取り組んできたレッスン</Small>
          <LessonContainer useFinishedFilter={true} />
        </LessonWrapper>
      </ResponsiveWrapper>
      <NavigationBar />
    </>
  );
}

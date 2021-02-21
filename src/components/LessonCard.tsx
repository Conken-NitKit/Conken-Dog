import styled from "styled-components";

const LessonCardContainer = styled.div`
  width: 100%;
  height: 110px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 24px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);
  }
`;

const LessonImg = styled.div`
  background-color: #30c8d6;
  height: 100%;
  width: 110px;
  float: left;
  margin-right: 32px;
  flex-shrink: 0;
`;

const LessonContents = styled.div`
  display: inline-flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

const LessonTitle = styled.h3`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  color: #2b5461;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Progress = styled.div`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  letter-spacing: 0;
  color: rgba(43, 84, 106, 0.8);
  margin-bottom: 16px;
`;

const ProgressBar = styled.div`
  position: relative;
  top: 50%;
  width: 86px;
  height: 6px;
  background-color: rgba(212, 224, 232, 0.5);
  background: linear-gradient(90deg, #30c8d6 0, #30c8d6 40%, #eee 0, #eee);
  border: 0;
  box-shadow: none;
  border-radius: 3px;
  margin: 0 12px 0 0;
`;

const LessonLink = styled.div`
  color: #2b546a;
  font-size: 0.75rem;
  white-space: nowrap;
  margin: 0 32px 0 16px;
`;

export default function LessonCard() {
  return (
    <LessonCardContainer>
      <LessonImg />
      <LessonContents>
        <LessonTitle>{"HTML && CSS"}</LessonTitle>
        <Progress>
          <ProgressBar />
          2/23ページ
        </Progress>
      </LessonContents>
      <LessonLink>{"レッスン詳細へ >"}</LessonLink>
    </LessonCardContainer>
  );
}

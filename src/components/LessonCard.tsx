import { useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/userContext";
import { ISection } from "../assets/sections";
import { IUser } from "../interfaces/User";

const LessonCardContainer = styled.div`
  width: 96%;
  height: 110px;
  display: inline-flex;
  align-items: center;
  margin: 0 2% 24px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);
  }
  ${media.lessThan("medium")`
    height: 72px;
  `}
`;

const LessonImg = styled.div`
  background-color: #30c8d6;
  height: 100%;
  width: 110px;
  float: left;
  margin-right: 28px;
  flex-shrink: 0;
  ${media.lessThan("medium")`
    width: 72px;
    margin-right: 16px;
  `}
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
  font-size: 1rem;
  font-weight: bold;
  ${media.lessThan("medium")`
    margin-bottom: 8px;
  `}
  ${media.lessThan("small")`
    font-size: 0.75rem;
  `}
`;

const Progress = styled.div`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  letter-spacing: 0;
  color: rgba(43, 84, 106, 0.8);
  margin-bottom: 16px;
  ${media.lessThan("small")`
    font-size: 0.5rem;
  `}
`;

const ProgressBar = styled.div<{ progress: number }>`
  position: relative;
  top: 50%;
  width: 86px;
  height: 6px;
  background-color: rgba(212, 224, 232, 0.5);
  background: linear-gradient(
    90deg,
    #30c8d6 0,
    #30c8d6 ${(props) => props.progress}%,
    #eee 0,
    #eee
  );
  border: 0;
  box-shadow: none;
  border-radius: 3px;
  margin: 0 12px 0 0;
  ${media.lessThan("medium")`
    width: 78px;
    margin: 0 6px 0 0;
    margin-right: 16px;
  `}
`;

const LessonLink = styled.div`
  color: #2b546a;
  font-size: 0.75rem;
  white-space: nowrap;
  margin: 0 16px;
  &::before {
    content: "レッスン詳細へ";
  }
  ${media.lessThan("small")`
    &::before {
      content: ""
    }
  `}
`;

interface Props {
  section: ISection;
  useFinishedFilter: boolean;
  metaName: string;
  index: number;
  propsUser?: IUser;
}

export default function LessonCard({
  section,
  useFinishedFilter,
  metaName,
  index,
  propsUser,
}: Props) {
  const { user } = useContext(userContext);

  const countComplete = () =>
    section.contentsList.reduce((cnt, cur): number => {
      const userInfo = propsUser ?? user;
      return cnt + (userInfo.completionList.includes(cur.link) ? 1 : 0);
    }, 0);

  const completeFilter = () =>
    useFinishedFilter
      ? countComplete() === section.contentsList.length
      : countComplete() !== section.contentsList.length;

  return completeFilter() ? (
    <Link
      to={
        propsUser
          ? `/admin/${metaName}/${index + 1}/${propsUser.uid}`
          : `/${metaName}/${index + 1}`
      }
      style={{ textDecoration: "none", color: "rgb(88, 118, 163)" }}
    >
      <LessonCardContainer>
        <LessonImg />
        <LessonContents>
          <LessonTitle>{section.title}</LessonTitle>
          <Progress>
            <ProgressBar
              progress={(countComplete() / section.contentsList.length) * 100}
            />
            {countComplete()}/{section.contentsList.length}ページ
          </Progress>
        </LessonContents>
        <LessonLink>{" >"}</LessonLink>
      </LessonCardContainer>
    </Link>
  ) : (
    <></>
  );
}

import { useContext, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Small } from "../styles/fonts/Small";
import Tagslogo from "../assets/img/icons/tags.svg";
import EyeLogo from "../assets/img/icons/eye.svg";
import SelectedEyeLogo from "../assets/img/icons/selected-eye.svg";
import FavLogo from "../assets/img/icons/fav.svg";
import SelectedFavLogo from "../assets/img/icons/selected-fav.svg";
import BookMarkLogo from "../assets/img/icons/book-mark.svg";
import SelectedBookMarkLogo from "../assets/img/icons/selected-book-mark.svg";
import { IKnowledge } from "../interfaces/Knowledge";
import { userContext } from "../contexts/userContext";
import KnonwledgeBalloon from "./KnowledgeBalloon";

const Wrap = styled.div`
  overflow: hidden;
`;

const KnowledgeContainer = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
  border-radius: 8px;
  &:hover {
    background-color: #fafafa;
  }
  ${media.lessThan("medium")`
    padding: 16px 0;
  `}
`;

const KnowledgeInfo = styled.p<{ isVisited: boolean }>`
  font: 100%/1.5 "Lato", "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: #5876a3;
  margin: 0;
  ${media.lessThan("small")`
    font-size: 0.65rem
  `}
  &::before {
    @media (max-width: 280px) {
      content: " ";
      white-space: pre;
    }
  }
  &::after {
    content: "${(props) => (props.isVisited ? "" : "未読")}";
    font-family: "MS PGothic", sans-serif;
    color: white;
    font-weight: bold;
    padding: 4px 9px;
    height: 18px;
    margin-left: 12px;
    border-radius: 10px;
    letter-spacing: 0.1em;
    @media (max-width: 280px) {
      position: relative;
      top: 4px;
      white-space: pre;
    }
    background-color: ${(props) => (props.isVisited ? "white" : "#f38702")};
  }
`;

const KnowledgeTitle = styled.a<{ isVisited: boolean }>`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) =>
    props.isVisited ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.87)"};
  text-decoration: ${(props) => (props.isVisited ? "line-through" : "none")};
  line-height: 2;
  letter-spacing: -0.4px;
  word-break: break-all;
  margin: 16px 0 0;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #30c8d6;
    text-decoration: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 32px;
  ${media.lessThan("small")`
    padding-right: 16px;
  `}
`;

const CanClickContainer = styled(Container)`
  cursor: pointer;
  padding-right: 11px;
`;

const Icon = styled.div<{ src: string }>`
  content: "";
  width: 18px;
  height: 18px;
  top: 50%;
  left: 10px;
  color: #999;
  margin-right: 1px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 18px 18px;
`;

const Tag = styled.span<{ isLast: boolean }>`
  color: inherit;
  font-size: 0.8rem;
  line-height: 1.8;
  margin-right: 8px;
  word-break: break-all;
  @media (max-width: 280px) {
    display: flex;
  }
  &::after {
    content: ${(props) => (props.isLast ? "" : ",")};
    margin-right: 4px;
  }
`;

const StatusContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ColorSpan = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.color === "#5876a3" ? "normal" : "bold")};
  ${media.lessThan("small")`
    font-size: 0.5rem;
  `}
`;

interface Props {
  knowledge: IKnowledge;
  addVisitor: (link: string) => void;
  tapFav: (link: string) => void;
  tapBookMark: (link: string) => void;
}

export default function KnowledgeCard({
  knowledge,
  addVisitor,
  tapFav,
  tapBookMark,
}: Props) {
  const { user } = useContext(userContext);
  const [isShowVisitors, setIsShowVisitors] = useState<boolean>(false);
  const [isShowFans, setIsShowFans] = useState<boolean>(false);

  return (
    <>
      <Wrap>
        <KnowledgeContainer>
          <KnowledgeInfo
            isVisited={knowledge.visitors.includes(user.displayName)}
          >
            "{knowledge.contributorName}" が {new Date().getFullYear()}年
            {new Date().getMonth() + 1}月{new Date().getDate()}日 に投稿
          </KnowledgeInfo>
          <KnowledgeTitle
            href={knowledge.link}
            target={"_blank"}
            onClick={() => addVisitor(knowledge.uid)}
            isVisited={knowledge.visitors.includes(user.displayName)}
          >
            {knowledge.title}
          </KnowledgeTitle>
          <Container>
            <Icon src={Tagslogo} />
            <Small>
              {knowledge.tags.map((tag, index) => (
                <Tag
                  key={`knowledge/tag/${index}`}
                  isLast={knowledge.tags.length === index + 1}
                >
                  {tag}
                </Tag>
              ))}
            </Small>
          </Container>
          <StatusContainer>
            <Container
              onMouseEnter={() => setIsShowVisitors(true)}
              onMouseLeave={() => setIsShowVisitors(false)}
            >
              <Icon
                src={
                  knowledge.visitors.includes(user.displayName)
                    ? SelectedEyeLogo
                    : EyeLogo
                }
              />
              <Small>
                <ColorSpan
                  color={
                    knowledge.visitors.includes(user.displayName)
                      ? "#1DA1F2"
                      : "#5876a3"
                  }
                >
                  {knowledge.visitors.length}read
                </ColorSpan>
              </Small>
              {isShowVisitors && knowledge.visitors.length !== 0 && (
                <KnonwledgeBalloon
                  knowledgeId={knowledge.uid}
                  userList={knowledge.visitors}
                />
              )}
            </Container>
            <CanClickContainer
              onClick={() => tapFav(knowledge.uid)}
              onMouseEnter={() => setIsShowFans(true)}
              onMouseLeave={() => setIsShowFans(false)}
            >
              <Icon
                src={
                  knowledge.fans.includes(user.displayName)
                    ? SelectedFavLogo
                    : FavLogo
                }
              />
              <Small>
                <ColorSpan
                  color={
                    knowledge.fans.includes(user.displayName)
                      ? "#e0245e"
                      : "#5876a3"
                  }
                >
                  {knowledge.fans.length}いいね
                </ColorSpan>
              </Small>
              {isShowFans && knowledge.fans.length !== 0 && (
                <KnonwledgeBalloon
                  knowledgeId={knowledge.uid}
                  userList={knowledge.fans}
                />
              )}
            </CanClickContainer>
            <CanClickContainer onClick={() => tapBookMark(knowledge.uid)}>
              <Icon
                src={
                  knowledge.collectors.includes(user.displayName)
                    ? SelectedBookMarkLogo
                    : BookMarkLogo
                }
              />
              <Small>
                <ColorSpan
                  color={
                    knowledge.collectors.includes(user.displayName)
                      ? "#27bf63"
                      : "#5876a3"
                  }
                >
                  {knowledge.collectors.length}ブックマーク
                </ColorSpan>
              </Small>
            </CanClickContainer>
          </StatusContainer>
        </KnowledgeContainer>
      </Wrap>
    </>
  );
}

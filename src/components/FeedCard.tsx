import { useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Small } from "../styles/fonts/Small";
import Tagslogo from "../assets/img/Tags.svg";
import Eyelogo from "../assets/img/Eye.svg";
import Eyelogo2 from "../assets/img/Eye2.svg";
import Favlogo from "../assets/img/Fav.svg";
import Favlogo2 from "../assets/img/Fav2.svg";
import BookMarklogo from "../assets/img/BookMark.svg";
import BookMarklogo2 from "../assets/img/BookMark2.svg";
import { IFeed } from "../interfaces/Feed";
import { userContext } from "../contexts/userContext";

const FeedContainer = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
  border-radius: 8px;
  &:hover {
    background-color: #fafafa;
  }
  ${media.lessThan("medium")`
    width: 100%;
    padding: 16px 0;
  `}
`;

const FeedInfo = styled.p<{ isVisited: boolean }>`
  font: 100%/1.5 "Lato", "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: #5876a3;
  margin: 0;
  ${media.lessThan("small")`
    font-size: 0.65rem
  `}
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
    background-color: ${(props) => (props.isVisited ? "white" : "#f38702")};
  }
`;

const FeedTitle = styled.a<{ isVisited: boolean }>`
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
`;

const Icon = styled.div<{ src: string }>`
  content: "";
  width: 18px;
  height: 18px;
  top: 50%;
  left: 10px;
  color: #999;
  margin-right: 8px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 18px 18px;
`;

const Tag = styled.span`
  color: inherit;
  font-size: 0.8rem;
  line-height: 1.8;
  margin-right: 2px;
  &::after {
    content: ",";
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
    font-size: 0.5rem
  `}
`;

interface Props {
  feed: IFeed;
  addVisitor: (link: string) => void;
  tapFav: (link: string) => void;
  tapBookMark: (link: string) => void;
}

export default function FeedCard({
  feed,
  addVisitor,
  tapFav,
  tapBookMark,
}: Props) {
  const { user } = useContext(userContext);
  return (
    <FeedContainer>
      <FeedInfo isVisited={feed.visitors.includes(user.displayName)}>
        "{feed.contributorName}" が {new Date().getFullYear()}年
        {new Date().getMonth() + 1}月{new Date().getDate()}日 に投稿
      </FeedInfo>
      <FeedTitle
        href={feed.link}
        target={"_blank"}
        onClick={() => addVisitor(feed.link)}
        isVisited={feed.visitors.includes(user.displayName)}
      >
        {feed.title}
      </FeedTitle>
      <Container>
        <Icon src={Tagslogo} />
        <Small>
          {feed.tags.map((tag, index) => (
            <Tag key={`feed/tag/${index}`}>{tag}</Tag>
          ))}
        </Small>
      </Container>
      <StatusContainer>
        <Container>
          <Icon
            src={feed.visitors.includes(user.displayName) ? Eyelogo2 : Eyelogo}
          />
          <Small>
            <ColorSpan
              color={
                feed.visitors.includes(user.displayName) ? "#1DA1F2" : "#5876a3"
              }
            >
              {feed.visitors.length}read
            </ColorSpan>
          </Small>
        </Container>
        <CanClickContainer onClick={() => tapFav(feed.link)}>
          <Icon
            src={feed.fans.includes(user.displayName) ? Favlogo2 : Favlogo}
          />
          <Small>
            <ColorSpan
              color={
                feed.fans.includes(user.displayName) ? "#e0245e" : "#5876a3"
              }
            >
              {feed.fans.length}いいね
            </ColorSpan>
          </Small>
        </CanClickContainer>
        <CanClickContainer onClick={() => tapBookMark(feed.link)}>
          <Icon
            src={
              feed.collectors.includes(user.displayName)
                ? BookMarklogo2
                : BookMarklogo
            }
          />
          <Small>
            <ColorSpan
              color={
                feed.collectors.includes(user.displayName)
                  ? "#27bf63"
                  : "#5876a3"
              }
            >
              {feed.collectors.length}ブックマーク
            </ColorSpan>
          </Small>
        </CanClickContainer>
      </StatusContainer>
    </FeedContainer>
  );
}

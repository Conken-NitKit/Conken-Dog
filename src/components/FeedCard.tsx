import styled from "styled-components";
import { Small } from "../styles/fonts/Small";
import Tagslogo from "../assets/img/Tags.svg";
import Eyelogo from "../assets/img/Eye.svg";
import Favlogo from "../assets/img/Fav.svg";
import BookMarklogo from "../assets/img/BookMark.svg";
import { IFeed } from "../interfaces/Feed";

const FeedContainer = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
  border-radius: 8px;
  &:hover {
    background-color: #fafafa;
  }
`;

const FeedInfo = styled.p`
  font: 100%/1.5 "Lato", "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: #5876a3;
  margin: 0;
  &::after {
    content: "未読";
    font-family: "MS PGothic", sans-serif;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 4px 9px;
    height: 18px;
    margin-left: 12px;
    border-radius: 10px;
    letter-spacing: 0.1em;
    background-color: #f38702;
  }
`;

const FeedTitle = styled.a`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  line-height: 2;
  letter-spacing: -0.4px;
  word-break: break-all;
  margin: 16px 0 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 32px;
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

interface Props {
  feed: IFeed;
}

export default function FeedCard({ feed }: Props) {
  return (
    <FeedContainer>
      <FeedInfo>
        "{feed.contributorName}" が {new Date().getFullYear()}年
        {new Date().getMonth() + 1}月{new Date().getDate()}日 に投稿
      </FeedInfo>
      <FeedTitle href={feed.link} target={"_blank"}>
        {feed.title}
      </FeedTitle>
      <Container>
        <Icon src={Tagslogo} />
        <Small>
          {feed.tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </Small>
      </Container>
      <StatusContainer>
        <Container>
          <Icon src={Eyelogo} />
          <Small>{feed.visitors.length}read</Small>
        </Container>
        <Container>
          <Icon src={Favlogo} />
          <Small>{feed.fans.length}いいね</Small>
        </Container>
        <Container>
          <Icon src={BookMarklogo} />
          <Small>{feed.collectors.length}ブックマーク</Small>
        </Container>
      </StatusContainer>
    </FeedContainer>
  );
}

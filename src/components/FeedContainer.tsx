import { useContext, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import FeedCard from "../components/FeedCard";
import { Heading2 } from "../styles/fonts/Heading2";
import { mockFeeds } from "../mocks/feed";
import { IFeed } from "../interfaces/Feed";
import { userContext } from "../contexts/userContext";

const ScrollContainer = styled.div`
  max-height: 1256px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EndPadding = styled.div`
  height: 0;
  ${media.lessThan("medium")`
    height: 80px;
  `}
`;

export default function FeedContainer() {
  const { user } = useContext(userContext);
  const [feeds, setFeeds] = useState<IFeed[]>(mockFeeds);

  const addVisitor = (link: string) => {
    const newFeeds = feeds;
    const updateIndex = newFeeds.findIndex((feed) => feed.link === link);
    newFeeds.splice(updateIndex, 1, {
      ...newFeeds[updateIndex],
      visitors: [...newFeeds[updateIndex].visitors, user.displayName].filter(
        (x, i, self) => self.indexOf(x) === i
      ),
    });
    setFeeds([...newFeeds]);
  };

  const TapFav = (link: string) => {
    const newFeeds = feeds;
    const updateIndex = newFeeds.findIndex((feed) => feed.link === link);
    newFeeds.splice(updateIndex, 1, {
      ...newFeeds[updateIndex],
      fans:
        newFeeds[updateIndex].fans.indexOf(user.displayName) === -1
          ? [...newFeeds[updateIndex].fans, user.displayName]
          : newFeeds[updateIndex].fans.filter(
              (fan) => fan !== user.displayName
            ),
    });
    setFeeds([...newFeeds]);
  };

  const tapBookMark = (link: string) => {
    const newFeeds = feeds;
    const updateIndex = newFeeds.findIndex((feed) => feed.link === link);
    newFeeds.splice(updateIndex, 1, {
      ...newFeeds[updateIndex],
      collectors:
        newFeeds[updateIndex].collectors.indexOf(user.displayName) === -1
          ? [...newFeeds[updateIndex].collectors, user.displayName]
          : newFeeds[updateIndex].collectors.filter(
              (collector) => collector !== user.displayName
            ),
    });
    setFeeds([...newFeeds]);
  };

  return (
    <>
      <Heading2>フィード</Heading2>
      <ScrollContainer>
        {feeds.map((feed, index) => (
          <FeedCard
            key={`feeds/${index}`}
            feed={feed}
            addVisitor={addVisitor}
            tapFav={TapFav}
            tapBookMark={tapBookMark}
          />
        ))}
        <EndPadding />
      </ScrollContainer>
    </>
  );
}

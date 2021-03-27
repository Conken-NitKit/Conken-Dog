import { truncateSync } from "fs";
import { useState } from "react";
import styled from "styled-components";
import AccountElementEditModal from "../components/AccountElementEditModal";
import AccountElementsCard from "../components/AccountElementsCard";
import AccountIcon from "../components/AccountIcon";
import NavigationBar from "../components/NavigationBar";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";

const AccountTitleWrapper = styled.div`
  display: box;

  border-bottom: solid rgba(0, 0, 0, 0.1) 0.5px;

  padding: 20px;
  padding-top: 10px;
  padding-bottom: 2px;

  height: 44px;
`;

const AccountElementsWrapper = styled.div`
  padding: 0 20px 0 20px;

  height: calc(100vh - 138px);
  width: calc(100vw - 40px);

  overflow: scroll;
`;

export default function Account() {
  const [isOpenUserNamePage, setIsOpenUserNamePage] = useState(false);
  const [isOpenMailAddressPage, setIsOpenMailAddressPage] = useState(false);
  const [isOpenProgressPage, setIsOpenProgressPage] = useState(false);
  const [isOpenCommentPage, setIsOpenCommentPage] = useState(false);

  return (
    <div>
      <AccountTitleWrapper>
        <Heading2>アカウント</Heading2>
      </AccountTitleWrapper>

      <AccountElementsWrapper>
        <AccountIcon />
        <AccountElementsCard
          ElementName="名前"
          Element="ばかばか"
          OpenPage={() => setIsOpenUserNamePage(true)}
        />

        <AccountElementEditModal Open={isOpenUserNamePage} />

        <AccountElementsCard
          ElementName="メール"
          Element="bakabaka@gmail.com"
          OpenPage={() => setIsOpenMailAddressPage(true)}
        />
        <AccountElementsCard
          ElementName="進捗"
          Element="89%"
          OpenPage={() => setIsOpenProgressPage(true)}
        />
        <AccountElementsCard
          ElementName="一言"
          Element="ばかばかばかばか"
          OpenPage={() => setIsOpenCommentPage(true)}
        />
      </AccountElementsWrapper>
      <NavigationBar />
    </div>
  );
}

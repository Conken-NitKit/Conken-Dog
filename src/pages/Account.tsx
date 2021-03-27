import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import AccountElementsCard from "../components/AccountElementsCard";
import AccountIcon from "../components/AccountIcon";
import NavigationBar from "../components/NavigationBar";
import { ResponsiveWrapper } from "../layouts/ResponsiveWrapper";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";

const AccountTitlesWrapper = styled.div`
  position: fixed;

  display: box;

  margin: 5vh 5vw;
  margin-bottom: 0;

  height: 86px;
`;

const AccountElementsWrapper = styled.div`
  margin: calc(5vh + 86px) 5vw 0 5vw;

  height: calc(100vh - 195.4px);
  width: 90vw;

  overflow: scroll;
`;

export default function Account({ history }: RouteComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ResponsiveWrapper>
      <AccountTitlesWrapper>
        <Heading2>アカウント</Heading2>
        <Small>みんなのぷろふぃーる！</Small>
      </AccountTitlesWrapper>
      <AccountElementsWrapper>
        <AccountIcon />
        <AccountElementsCard ElementName="名前" Element="ばかばか" />
        <AccountElementsCard
          ElementName="メール"
          Element="bakabaka@gmail.com"
        />
        <AccountElementsCard ElementName="進捗" Element="89%" />
        <AccountElementsCard ElementName="一言" Element="ばかばかばかばか" />
        <AccountElementsCard
          ElementName="test"
          Element="スクロール機能のテスト"
        />
        <AccountElementsCard
          ElementName="test"
          Element="スクロール機能のテスト"
        />
        <AccountElementsCard
          ElementName="test"
          Element="スクロール機能のテスト"
        />
        <AccountElementsCard
          ElementName="test"
          Element="スクロール機能のテスト"
        />
        <AccountElementsCard
          ElementName="test"
          Element="スクロール機能のテスト"
        />
      </AccountElementsWrapper>
      <NavigationBar />
    </ResponsiveWrapper>
  );
}

import styled from "styled-components";
import AccountElementsCard from "../components/AccountElementsCard";
import AccountIcon from "../components/AccountIcon";
import NavigationBar from "../components/NavigationBar";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";

const AccountTitlesWrapper = styled.div`
  display: box;

  margin: 20px;
  margin-bottom: 0;

  height: 86px;
`;

const AccountElementsWrapper = styled.div`
  margin: 0 20px 0 20px;

  height: calc(100vh - 187px);
  width: calc(100vw - 40px);

  overflow: scroll;
`;

export default function Account() {
  return (
    <div>
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
    </div>
  );
}

import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import AccountElementsCard from "../components/AccountElementsCard";
import NavigationBar from "../components/NavigationBar";
import { ResponsiveWrapper } from "../layouts/ResponsiveWrapper";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";

const AccountTitlesWrapper = styled.div`
  position: fixed;

  display: box;

  margin: 5%;
  margin-bottom: 0;

  height: 86px;
`;

const AccountElementsWrapper = styled.div`
  margin: calc(5vh + 86px) 5vw 0 5vw;

  height: calc(95vh - 162px);
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
        <AccountElementsCard ElementName="" Element="" />
        <AccountElementsCard ElementName="" Element="" />
        <AccountElementsCard ElementName="" Element="" />
        <AccountElementsCard ElementName="" Element="" />
        <AccountElementsCard ElementName="" Element="" />
        <AccountElementsCard ElementName="" Element="" />
        <AccountElementsCard ElementName="" Element="" />
        <AccountElementsCard ElementName="" Element="" />
        <AccountElementsCard ElementName="" Element="" />
        <AccountElementsCard ElementName="" Element="" />
      </AccountElementsWrapper>
      <NavigationBar />
    </ResponsiveWrapper>
  );
}

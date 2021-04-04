import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import { ResponsiveWrapper } from "../layouts/ResponsiveWrapper";
import { Heading2 } from "../styles/fonts/Heading2";
import { Small } from "../styles/fonts/Small";

const AccountWrapper = styled.div`
  margin: 20px;
`;

export default function Account({ history }: RouteComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ResponsiveWrapper>
      <AccountWrapper>
        <Heading2>アカウント</Heading2>
        <Small>みんなのぷろふぃーる！</Small>
      </AccountWrapper>
      <NavigationBar />
    </ResponsiveWrapper>
  );
}

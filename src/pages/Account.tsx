import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import Settings from "../components/Settings";
import NavigationBar from "../components/NavigationBar";
import SettingsLogo from "../assets/img/icons/settings.svg";

const SettingBtn = styled.img`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 24px;
  height: 24px;
`;

export default function Account({ history }: RouteComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SettingBtn src={SettingsLogo} onClick={() => setIsOpen(true)} />
      <Settings isOpen={isOpen} close={() => setIsOpen(false)} history={history}/>
      <NavigationBar />
    </>
  );
}

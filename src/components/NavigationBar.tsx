import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";

import KnowledgeUnreadBadge from "./KnowledgeUnreadBadge";

import accountLogo from "../assets/img/nav/account.svg";
import homeLogo from "../assets/img/nav/home.svg";
import knowledgeLogo from "../assets/img/nav/knowledge.svg";
import lessonLogo from "../assets/img/nav/lesson.svg";
import notificationLogo from "../assets/img/nav/notification.svg";

import selectedAccountLogo from "../assets/img/nav/selected-account.svg";
import selectedHomeLogo from "../assets/img/nav/selected-home.svg";
import selectedKnowledgeLogo from "../assets/img/nav/selected-knowledge.svg";
import selectedLessonLogo from "../assets/img/nav/selected-lesson.svg";
import selectedNotificationLogo from "../assets/img/nav/selected-notification.svg";

const Container = styled.div`
  display: table;

  position: fixed;

  z-index: 2;

  border-top: solid rgba(0, 0, 0, 0.1) 0.5px;

  padding: 18px 0 6px;

  left: 0;
  bottom: 0;

  height: 56px;
  width: 100vw;

  table-layout: fixed;

  background-color: white;

  box-shadow: 0 -3px 16px rgba(0, 0, 0, 0.1);

  ${media.greaterThan("medium")`
    display: none;
  `}
`;

const NavItem = styled(Link)`
  position: relative;
  padding: 0px;
  display: table-cell;
  vertical-align: middle;
  text-decoration: none;
`;

const NavImage = styled.img`
  position: relative;
  left: 50%;
  width: 28px;
  height: 28px;
  transform: translateX(-50%);
`;

const NavText = styled.p<{ selected: boolean }>`
  position: relative;
  margin: 0;
  font-size: 9px;
  text-align: center;
  font-weight: ${({ selected }) => (selected ? "bolder" : "normal")};
  color: ${({ selected }) => (selected ? "#30c8d6" : "#888")};
`;

export default function NavigationBar() {
  return (
    <Container>
      <NavItem to={`/`}>
        <NavImage
          src={window.location.pathname === "/" ? selectedHomeLogo : homeLogo}
        />
        <NavText selected={window.location.pathname === "/"}>ホーム</NavText>
      </NavItem>
      <NavItem to={`/courses`}>
        <NavImage
          src={
            window.location.pathname === "/courses"
              ? selectedLessonLogo
              : lessonLogo
          }
        />
        <NavText selected={window.location.pathname === "/courses"}>
          レッスン
        </NavText>
      </NavItem>
      <NavItem to={`/knowledges`}>
        <NavImage
          src={
            window.location.pathname === "/knowledges"
              ? selectedKnowledgeLogo
              : knowledgeLogo
          }
        />
        <KnowledgeUnreadBadge />
        <NavText selected={window.location.pathname === "/knowledges"}>
          ナレッジ
        </NavText>
      </NavItem>
      <NavItem to={`/notifications`}>
        <NavImage
          src={
            window.location.pathname === "/notifications"
              ? selectedNotificationLogo
              : notificationLogo
          }
        />
        <NavText selected={window.location.pathname === "/notifications"}>
          おしらせ
        </NavText>
      </NavItem>
      <NavItem to={`/account`}>
        <NavImage
          src={
            window.location.pathname === "/account"
              ? selectedAccountLogo
              : accountLogo
          }
        />
        <NavText selected={window.location.pathname === "/account"}>
          アカウント
        </NavText>
      </NavItem>
    </Container>
  );
}

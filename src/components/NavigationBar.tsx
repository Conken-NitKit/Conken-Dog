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
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 56px;
  padding: 8px 0 12px;
  display: table;
  table-layout: fixed;
  border-top: solid lightgray 0.5px;
  background-color: white;
  z-index: 1;
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

const NavItem = styled(Link)`
  position: relative;
  display: table-cell;
  padding: 0px;
  vertical-align: middle;
  text-decoration: none;
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const BadgeSpace = styled.div`
  margin-top: 0px;

  position: relative;

  display: block;

  left: 50%;
  transform: translateX(-50%);

  width: 77px;
  height: 56px;
`;

const NavImage = styled.img`
  position: relative;
  left: 50%;

  transform: translateX(-50%);

  height: 28px;
  width: 28px;
`;

const NavText = styled.p<{ selected: boolean }>`
  position: relative;
  text-align: center;
  color: ${({ selected }) => (selected ? "#30c8d6" : "#888")};
  font-size: 9px;
  font-weight: ${({ selected }) => (selected ? "bolder" : "normal")};
  margin: 0;
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

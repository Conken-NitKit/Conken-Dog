import styled from "styled-components";
import media from "styled-media-query";

import accountLogo from "../assets/img/nav/account.svg"
import homeLogo from "../assets/img/nav/home.svg"
import knowledgeLogo from "../assets/img/nav/knowledge.svg"
import lessonLogo from "../assets/img/nav/lesson.svg"
import notificationLogo from "../assets/img/nav/notification.svg"

import selectedAccountLogo from "../assets/img/nav/selected-account.svg"
import selectedHomeLogo from "../assets/img/nav/selected-home.svg"
import selectedKnowledgeLogo from "../assets/img/nav/selected-knowledge.svg"
import selectedLessonLogo from "../assets/img/nav/selected-lesson.svg"
import selectedNotificationLogo from "../assets/img/nav/selected-notification.svg"

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 56px;
  padding-top: 12px;
  display: table;
  table-layout: fixed;
  border-top: solid lightgray 0.5px;
  background-color: white;
  z-index: 1;
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

const NavItem = styled.div`
  display: table-cell;
  vertical-align: middle;
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
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
      <NavItem>
        <NavImage src={window.location.pathname ===  "/" ? selectedHomeLogo : homeLogo} />
        <NavText selected={window.location.pathname ===  "/"}>ホーム</NavText>
      </NavItem>
      <NavItem>
        <NavImage src={lessonLogo} />
        <NavText selected={false}>レッスン</NavText>
      </NavItem>
      <NavItem>
        <NavImage src={knowledgeLogo} />
        <NavText selected={false}>ナレッジ</NavText>
      </NavItem>
      <NavItem>
        <NavImage src={notificationLogo} />
        <NavText selected={false}>おしらせ</NavText>
      </NavItem>
      <NavItem>
        <NavImage src={accountLogo} />
        <NavText selected={false}>アカウント</NavText>
      </NavItem>
    </Container>
  );
}

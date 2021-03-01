import ReactDOM from "react-dom";
import styled from "styled-components";
import * as H from "history";

import { signOut } from "../utils/users/signOut";

const modalRoot = document.getElementById("modal-root")!;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SettingContainer = styled.div<{ isOpen: boolean }>`
  bottom: ${({ isOpen }) => (isOpen ? "-30vh" : "-130vh")};
  left: 1vw;
  height: 98vh;
  width: 98vw;
  padding-top: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.4);
  border-radius: 16px 16px 0 0;
  position: fixed;
  flex-wrap: wrap;
  transition: all 0.3s;
  background: white;
  z-index: 5001;
`;

const SettingItem = styled.p`
  line-height: 44px;
  border-bottom: solid #e4efef 1px;
  font-size: 13px;
  color: #444;
  margin: 0 8px;
  padding-left: 16px;
`;

interface Props {
  isOpen: boolean;
  history: H.History;
  close: () => void;
}

export default function Settings({ isOpen, history, close }: Props) {
  return ReactDOM.createPortal(
    <>
      {isOpen && <Container onClick={close} />}
      <SettingContainer isOpen={isOpen}>
        <SettingItem onClick={() => signOut(history)}>
          ログアウト
        </SettingItem>
      </SettingContainer>
    </>,
    modalRoot
  );
};

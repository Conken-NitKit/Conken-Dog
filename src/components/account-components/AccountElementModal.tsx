import { useContext } from "react";
import styled from "styled-components";
import { AccountElementContext } from "../../contexts/AcountElementContext";
import { AccountButtonTitle } from "../../styles/fonts/ButtonTitle";
import { AccountTitle } from "../../styles/fonts/AccountTitle";

const Modal = styled.div<{ isOpen: boolean }>`
  position: absolute;

  z-index: 6;

  border-radius: 2.5vh 0 0 2.5vh;

  top: 0px;
  right: 0;

  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "95vw" : "0vw")};

  background-color: white;

  box-shadow: -3px 0px 3px 0px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  transition: width 0.3s 0.1s ease;
`;

const Header = styled.div`
  display: flex;

  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);

  height: 11vh;

  align-items: center;

  overflow: hidden;
`;

const DoneButton = styled.button`
  display: flex;

  margin-right: calc(47.5vw - 6vh - max(19vw, 13vh));

  border: none;
  border-radius: 2.5vh 0 0 0;
  border-top-right-radius: none;

  padding: 0 1.5vh;

  height: 11vh;

  width: 19vw;
  min-width: 13vh;

  outline: none;

  align-items: center;
  justify-content: center;

  background-color: white;
`;

const NameSpace = styled.div`
  display: flex;

  width: 12.0064vh;

  justify-content: center;
`;

export default function AccountElementModal() {
  const { ElementName, modalType, isModalOpen, setIsModalOpen } = useContext(
    AccountElementContext
  );

  return (
    <Modal isOpen={isModalOpen}>
      <Header>
        <DoneButton
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <AccountButtonTitle>
            {modalType === "edit" ? "完了" : "閉じる"}
          </AccountButtonTitle>
        </DoneButton>
        <NameSpace>
          <AccountTitle>{ElementName}</AccountTitle>
        </NameSpace>
      </Header>
    </Modal>
  );
}

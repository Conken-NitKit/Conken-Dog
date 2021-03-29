import { useContext } from "react";
import styled from "styled-components";
import { AccountElementEditModalContext } from "../contexts/AccountElementEditModals/AcountElementEditModalContext";
import { AccountTitle } from "../styles/fonts/AccountTitle";

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;

  position: absolute;

  z-index: 4;

  top: 0px;
  right: 0;

  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "100vw" : "0vw")};

  background-color: ${({ isOpen }) =>
    isOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};

  transition: ${({ isOpen }) => (isOpen ? "width 0s" : "width 0s 0.3s")};
`;

const Modal = styled.div<{ isOpen: boolean }>`
  position: absolute;

  border-radius: 16px 0 0 16px;

  top: 0px;
  right: 0;

  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "95vw" : "0vw")};

  background-color: white;

  box-shadow: -3px 0px 3px 0px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  transition: width 0.3s ease;
`;

const Header = styled.div`
  display: flex;

  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);

  height: 11vh;
`;

const DoneButton = styled.button`
  display: flex;

  border: none;
  border-radius: 16px 16px 16px 0;
  border-top-right-radius: none;

  padding: 0;

  padding-left: 3.5vh;
  padding-right: 3.5vh;

  outline: none;

  align-items: center;

  background-color: blue;
`;

export default function AccountElementEditModal() {
  const { isOpen, setIsOpen } = useContext(AccountElementEditModalContext);

  return (
    <Container isOpen={isOpen}>
      <Modal isOpen={isOpen}>
        <Header>
          <DoneButton
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <AccountTitle>完了</AccountTitle>
          </DoneButton>
        </Header>
      </Modal>
    </Container>
  );
}

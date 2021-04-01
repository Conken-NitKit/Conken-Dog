import { useContext, useState } from "react";
import styled from "styled-components";

import { AccountElementContext } from "../../contexts/AccountElementContext";

import { AccountTitle } from "../../styles/fonts/AccountTitle";

import IconIconSrc from "../../assets/img/icons/icon-icon.svg";
import DefaultIconSrc from "../../assets/img/icons/default-icon.svg";
import EditButtonImgSrc from "../../assets/img/icons/up-edit-button.svg";
import { UnimplementedMessage } from "../../styles/fonts/UnimplementedMessage";

const Container = styled.div`
  display: flex;

  margin-top: 4vh;
  margin-bottom: 8vh;
  margin-left: 11vw;

  border: 1px solid gainsboro;
  border-radius: 22vw;

  width: 55vw;

  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);
`;

const IconIconContainer = styled.div`
  display: flex;

  border-radius: 22vw 0 0 22vw;

  width: 33vw;

  background-color: rgba(48, 200, 214, 1);

  align-items: center;
`;

const IconIcon = styled.img`
  height: 11vw;
  width: 11vw;
`;

const IconContainer = styled.div<{ isOpen: boolean }>`
  display: flex;

  position: relative;

  margin-left: -22vw;

  border-left: 1px solid gainsboro;
  border-radius: 22vw;

  height: 44vw;
  width: 44vw;

  justify-content: center;

  overflow: ${({ isOpen }) => (isOpen ? "" : "hidden")};

  background-color: white;
`;

const Icon = styled.img`
  height: 44vw;
  width: 44vw;
`;

const ModalContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;

  z-index: ${({ isOpen }) => (isOpen ? "6" : "0")};

  border: 1px solid ${({ isOpen }) => (isOpen ? "silver" : "gainsboro")};
  border-radius: 1vh;

  padding: 0;

  top: ${({ isOpen }) => (isOpen ? "6.5" : "37.5")}vw;

  height: ${({ isOpen }) => (isOpen ? "calc(74vh - 81px)" : "31vw")};
  width: ${({ isOpen }) => (isOpen ? "90" : "31")}vw;

  justify-content: center;

  background-color: white;

  transition: ${({ isOpen }) =>
    isOpen
      ? "top 0.1s, width 0.1s 0.1s, height 0.1s 0.2s, border 0s 0.1s"
      : "top 0.1s 0.2s, width 0.1s 0.1s, height 0.1s, border 0s 0.1s, z-index 0s 0.1s"};
`;

const ModalOpenButton = styled.button`
  margin-top: 0;

  border: none;
  border-radius: calc(1vh - 1px);

  padding: 0;

  height: 6.5vw;
  width: 100%;

  outline: none;

  background-color: white;
`;

const EditButtonImg = styled.img<{ isOpen: boolean }>`
  height: 6.5vw;
  width: 6.5vw;

  transform: ${({ isOpen }) => (isOpen ? "rotate(540deg)" : "rotate(0)")};

  transition: transform 0.5s ease-out;
`;

const Header = styled.header<{ isOpen: boolean }>`
  display: flex;

  position: absolute;

  padding-left: 2vh;

  top: 6.5vw;

  height: ${({ isOpen }) => (isOpen ? "8vh" : "0")};
  width: calc(100% - 2vh);

  align-items: center;

  overflow: hidden;

  transition: height 0s ${({ isOpen }) => (isOpen ? "0.3s" : "")};
`;

const Body = styled.body<{ isOpen: boolean }>`
  display: flex;

  position: absolute;

  padding: 0 5vw;

  top: calc(8vh + 6.5vw);

  height: ${({ isOpen }) => (isOpen ? "calc(66vh - 6.5vw - 81px)" : "0")};
  width: calc(100% - 10vw);

  align-items: center;

  overflow: hidden;

  transition: height 0s ${({ isOpen }) => (isOpen ? "0.3s" : "")};
`;

export default function AccountIconCard() {
  const [isOverflow, setIsOverflow] = useState(false);

  const { isOpenModal, setIsOpenModal } = useContext(AccountElementContext);

  return (
    <Container>
      <IconIconContainer>
        <IconIcon src={IconIconSrc} />
      </IconIconContainer>

      <IconContainer isOpen={isOverflow}>
        <Icon src={DefaultIconSrc} />

        <ModalContainer isOpen={isOpenModal}>
          {isOpenModal ? (
            <ModalOpenButton
              onClick={() => {
                setIsOpenModal(false);

                setTimeout(function () {
                  setIsOverflow(false);
                }, 200);
              }}
            >
              <EditButtonImg src={EditButtonImgSrc} isOpen={isOpenModal} />
            </ModalOpenButton>
          ) : (
            <ModalOpenButton
              onClick={() => {
                setIsOpenModal(true);

                setTimeout(function () {
                  setIsOverflow(true);
                }, 100);
              }}
            >
              <EditButtonImg src={EditButtonImgSrc} isOpen={isOpenModal} />
            </ModalOpenButton>
          )}

          <Header isOpen={isOpenModal}>
            <AccountTitle>アイコン</AccountTitle>
          </Header>

          <Body isOpen={isOpenModal}></Body>
        </ModalContainer>
      </IconContainer>
    </Container>
  );
}

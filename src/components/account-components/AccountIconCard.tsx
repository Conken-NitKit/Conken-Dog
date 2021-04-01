import { useContext, useState } from "react";
import styled from "styled-components";

import { AccountElementContext } from "../../contexts/AccountElementContext";

import IconIconSrc from "../../assets/img/icons/icon-icon.svg";
import DefaultIconSrc from "../../assets/img/icons/default-icon.svg";
import EditButtonImgSrc from "../../assets/img/icons/up-edit-button.svg";

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

const EditModal = styled.div<{ isOpen: boolean }>`
  display: fixed;

  position: absolute;

  z-index: 6;

  border: 1px solid gainsboro;
  border-radius: 1vh;

  padding: 0;

  top: ${({ isOpen }) => (isOpen ? "6.5" : "37.5")}vw;

  height: ${({ isOpen }) => (isOpen ? "calc(74vh - 81px)" : "31vw")};
  width: ${({ isOpen }) => (isOpen ? "90" : "31")}vw;

  justify-content: center;

  background-color: white;

  transition: ${({ isOpen }) =>
    isOpen
      ? "top 0.1s, width 0.1s 0.1s, height 0.1s 0.2s"
      : "top 0.1s 0.2s, width 0.1s 0.1s, height 0.1s"};
`;

const EditButtonImg = styled.img`
  height: 6.5vw;
  width: 6.5vw;
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

        {isOpenModal ? (
          <EditModal
            isOpen={isOpenModal}
            onClick={() => {
              setIsOpenModal(false);

              setTimeout(function () {
                setIsOverflow(false);
              }, 200);
            }}
          >
            <EditButtonImg src={EditButtonImgSrc} />
          </EditModal>
        ) : (
          <EditModal
            isOpen={isOpenModal}
            onClick={() => {
              setIsOpenModal(true);

              setTimeout(function () {
                setIsOverflow(true);
              }, 100);
            }}
          >
            <EditButtonImg src={EditButtonImgSrc} />
          </EditModal>
        )}
      </IconContainer>
    </Container>
  );
}

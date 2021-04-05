import React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import AccountElementModal from "../components/account-components/AccountElementModal";
import AccountElementsCard from "../components/account-components/AccountElementsCard";
import AccountIconCard from "../components/account-components/AccountIconCard";
import { ModalContainer } from "../components/ModalContainer";
import NavigationBar from "../components/NavigationBar";
import { AccountElementContext } from "../contexts/AccountElementContext";
import { AccountTitle } from "../styles/fonts/AccountTitle";

const AccountTitleWrapper = styled.div`
  display: flex;

  border-bottom: 0.5px solid gainsboro;

  padding: 6vw;
  padding-top: 2vh;
  padding-bottom: 2vh;

  height: 7vh;

  align-items: center;
`;

const AccountElementsWrapper = styled.div`
  padding: 0 6vw 0 6vw;

  height: calc(89vh - 81px);
  width: calc(88vw);

  overflow: hidden scroll;
`;

export default function Account() {
  const [isOpenUserNameModal, setIsOpenUserNameModal] = useState(false);
  const [isOpenMailAddressModal, setIsOpenMailAddressModal] = useState(false);
  const [isOpenProgressModal, setIsOpenProgressModal] = useState(false);
  const [isOpenCommentModal, setIsOpenCommentModal] = useState(false);
  const [isOpenIconModal, setIsOpenIconModal] = useState(false);

  const isModalOpen =
    isOpenUserNameModal ||
    isOpenMailAddressModal ||
    isOpenProgressModal ||
    isOpenCommentModal ||
    isOpenIconModal;

  return (
    <div>
      <ModalContainer isOpen={isModalOpen} />
      <AccountTitleWrapper>
        <AccountTitle>アカウント</AccountTitle>
      </AccountTitleWrapper>

      <AccountElementsWrapper>
        <AccountElementContext.Provider
          value={{
            ElementName: "",
            modalType: "",
            isOpenModal: isOpenIconModal,
            setIsOpenModal: setIsOpenIconModal,
          }}
        >
          <AccountIconCard />
        </AccountElementContext.Provider>

        <AccountElementContext.Provider
          value={{
            ElementName: "名前",

            modalType: "edit",

            isOpenModal: isOpenUserNameModal,

            setIsOpenModal: setIsOpenUserNameModal,
          }}
        >
          <AccountElementsCard Element="未実装です" />

          <AccountElementModal />
        </AccountElementContext.Provider>

        <AccountElementContext.Provider
          value={{
            ElementName: "メール",

            modalType: "edit",

            isOpenModal: isOpenMailAddressModal,

            setIsOpenModal: setIsOpenMailAddressModal,
          }}
        >
          <AccountElementsCard Element="未実装です" />

          <AccountElementModal />
        </AccountElementContext.Provider>

        <AccountElementContext.Provider
          value={{
            ElementName: "進捗",

            modalType: "",

            isOpenModal: isOpenProgressModal,

            setIsOpenModal: setIsOpenProgressModal,
          }}
        >
          <AccountElementsCard Element="未実装です" />

          <AccountElementModal />
        </AccountElementContext.Provider>

        <AccountElementContext.Provider
          value={{
            ElementName: "一言",

            modalType: "edit",

            isOpenModal: isOpenCommentModal,

            setIsOpenModal: setIsOpenCommentModal,
          }}
        >
          <AccountElementsCard Element="未実装です" />

          <AccountElementModal />
        </AccountElementContext.Provider>
      </AccountElementsWrapper>
      <NavigationBar />
    </div>
  );
}

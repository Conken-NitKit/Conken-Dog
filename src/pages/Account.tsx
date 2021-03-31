import React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import AccountElementModal from "../components/account-components/AccountElementModal";
import AccountElementsCard from "../components/account-components/AccountElementsCard";
import AccountIconCard from "../components/account-components/AccountIcon";
import { ModalContainer } from "../components/ModalContainer";
import NavigationBar from "../components/NavigationBar";
import { AccountElementContext } from "../contexts/AcountElementContext";
import { AccountTitle } from "../styles/fonts/AccountTitle";
import { Small } from "../styles/fonts/Small";

const AccountTitleWrapper = styled.div`
  display: flex;

  border-bottom: solid rgba(0, 0, 0, 0.1) 0.5px;

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

  const isModalOpen =
    isOpenUserNameModal ||
    isOpenMailAddressModal ||
    isOpenProgressModal ||
    isOpenCommentModal;

  return (
    <div>
      <ModalContainer isOpen={isModalOpen} />
      <AccountTitleWrapper>
        <AccountTitle>アカウント</AccountTitle>
      </AccountTitleWrapper>

      <AccountElementsWrapper>
        <AccountIconCard />

        <AccountElementContext.Provider
          value={{
            ElementName: "名前",

            modalType: "edit",

            isModalOpen: isOpenUserNameModal,

            setIsModalOpen: setIsOpenUserNameModal,
          }}
        >
          <AccountElementsCard Element="未実装です" />

          <AccountElementModal />
        </AccountElementContext.Provider>

        <AccountElementContext.Provider
          value={{
            ElementName: "メール",

            modalType: "edit",

            isModalOpen: isOpenMailAddressModal,

            setIsModalOpen: setIsOpenMailAddressModal,
          }}
        >
          <AccountElementsCard Element="未実装です" />

          <AccountElementModal />
        </AccountElementContext.Provider>

        <AccountElementContext.Provider
          value={{
            ElementName: "進捗",

            modalType: "brousing",

            isModalOpen: isOpenProgressModal,

            setIsModalOpen: setIsOpenProgressModal,
          }}
        >
          <AccountElementsCard Element="未実装です" />

          <AccountElementModal />
        </AccountElementContext.Provider>

        <AccountElementContext.Provider
          value={{
            ElementName: "一言",

            modalType: "edit",

            isModalOpen: isOpenCommentModal,

            setIsModalOpen: setIsOpenCommentModal,
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

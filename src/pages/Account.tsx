import React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import AccountElementEditModal from "../components/AccountElementEditModal";
import AccountElementsCard from "../components/AccountElementsCard";
import AccountIcon from "../components/AccountIcon";
import NavigationBar from "../components/NavigationBar";
import { AccountElementEditModalContext } from "../contexts/AcountElementEditModalContext";
import { AccountTitle } from "../styles/fonts/AccountTitle";
import { Small } from "../styles/fonts/Small";

const AccountTitleWrapper = styled.div`
  display: flex;

  border-bottom: solid rgba(0, 0, 0, 0.1) 0.5px;

  padding: 20px;
  padding-top: 2vh;
  padding-bottom: 2vh;

  height: 7vh;

  align-items: center;
`;

const AccountElementsWrapper = styled.div`
  padding: 0 20px 0 20px;

  height: calc(89vh - 81px);
  width: calc(100vw - 40px);

  overflow: hidden scroll;
`;

export default function Account() {
  const [isOpenUserNameModal, setIsOpenUserNameModal] = useState(false);
  const [isOpenMailAddressModal, setIsOpenMailAddressModal] = useState(false);
  const [isOpenProgressModal, setIsOpenProgressModal] = useState(false);
  const [isOpenCommentModal, setIsOpenCommentModal] = useState(false);

  return (
    <div>
      <AccountTitleWrapper>
        <AccountTitle>アカウント</AccountTitle>
      </AccountTitleWrapper>

      <AccountElementsWrapper>
        <AccountIcon />

        <AccountElementEditModalContext.Provider
          value={{
            isOpen: isOpenUserNameModal,
            setIsOpen: setIsOpenUserNameModal,
            modalType: "edit",
          }}
        >
          <AccountElementsCard ElementName="名前" Element="ばかばか" />

          <AccountElementEditModal />
        </AccountElementEditModalContext.Provider>

        <AccountElementEditModalContext.Provider
          value={{
            isOpen: isOpenMailAddressModal,
            setIsOpen: setIsOpenMailAddressModal,
            modalType: "edit",
          }}
        >
          <AccountElementsCard
            ElementName="メール"
            Element="bakabaka@gmail.com"
          />

          <AccountElementEditModal />
        </AccountElementEditModalContext.Provider>

        <AccountElementEditModalContext.Provider
          value={{
            isOpen: isOpenProgressModal,
            setIsOpen: setIsOpenProgressModal,
            modalType: "brousing",
          }}
        >
          <AccountElementsCard ElementName="進捗" Element="未実装です" />

          <AccountElementEditModal />
        </AccountElementEditModalContext.Provider>

        <AccountElementEditModalContext.Provider
          value={{
            isOpen: isOpenCommentModal,
            setIsOpen: setIsOpenCommentModal,
            modalType: "edit",
          }}
        >
          <AccountElementsCard ElementName="一言" Element="未実装です" />

          <AccountElementEditModal />
        </AccountElementEditModalContext.Provider>
      </AccountElementsWrapper>
      <NavigationBar />
    </div>
  );
}

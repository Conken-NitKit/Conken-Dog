import React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import AccountElementEditModal from "../components/AccountElementEditModal";
import AccountElementsCard from "../components/AccountElementsCard";
import AccountIcon from "../components/AccountIcon";
import NavigationBar from "../components/NavigationBar";
import { UserNameModalContext } from "../contexts/AccountElementEditModals/userNameModalContext";
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
  const [isOpenMailAddressPage, setIsOpenMailAddressPage] = useState(false);
  const [isOpenProgressPage, setIsOpenProgressPage] = useState(false);
  const [isOpenCommentPage, setIsOpenCommentPage] = useState(false);

  return (
    <div>
      <AccountTitleWrapper>
        <AccountTitle>アカウント</AccountTitle>
      </AccountTitleWrapper>

      <AccountElementsWrapper>
        <AccountIcon />

        <UserNameModalContext.Provider
          value={{
            isOpen: isOpenUserNameModal,
            setIsOpen: setIsOpenUserNameModal,
          }}
        >
          <AccountElementsCard
            ElementName="名前"
            Element="ばかばか"
            OpenPage={() => setIsOpenUserNameModal(true)}
          />

          <AccountElementEditModal />
        </UserNameModalContext.Provider>

        <AccountElementsCard
          ElementName="メール"
          Element="bakabaka@gmail.com"
          OpenPage={() => setIsOpenMailAddressPage(true)}
        />

        <AccountElementsCard
          ElementName="進捗"
          Element="未実装です"
          OpenPage={() => setIsOpenProgressPage(true)}
        />

        <AccountElementsCard
          ElementName="一言"
          Element="未実装です"
          OpenPage={() => setIsOpenCommentPage(true)}
        />
      </AccountElementsWrapper>
      <NavigationBar />
    </div>
  );
}

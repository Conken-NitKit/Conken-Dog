import React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import AccountElementModal from "../components/AccountElementModal";
import AccountElementsCard from "../components/AccountElementsCard";
import AccountIcon from "../components/AccountIcon";
import NavigationBar from "../components/NavigationBar";
import { AccountElementContext } from "../contexts/AcountElementContext";
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

        <AccountElementContext.Provider
          value={{
            ElementName: "名前",

            modalType: "edit",

            isModalOpen: isOpenUserNameModal,

            setIsModalOpen: setIsOpenUserNameModal,
          }}
        >
          <AccountElementsCard Element="ばかばか" />

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
          <AccountElementsCard Element="bakabaka@gmail.com" />

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

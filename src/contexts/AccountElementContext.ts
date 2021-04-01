import React from "react";

export const AccountElementContext = React.createContext<{
  ElementName: string;

  modalType: string;

  isOpenModal: boolean;

  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  ElementName: "",

  modalType: "",

  isOpenModal: false,

  setIsOpenModal: () => {},
});

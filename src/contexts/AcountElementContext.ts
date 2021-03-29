import React from "react";

export const AccountElementContext = React.createContext<{
  ElementName: string;

  modalType: string;

  isModalOpen: boolean;

  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  ElementName: "",

  modalType: "",

  isModalOpen: false,

  setIsModalOpen: () => {},
});

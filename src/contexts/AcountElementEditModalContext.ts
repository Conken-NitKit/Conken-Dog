import React from "react";

export const AccountElementEditModalContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
}>({
  isOpen: false,
  setIsOpen: () => {},
  modalType: "",
});

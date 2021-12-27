import React from "react";

export type Props = {
  label: string;
  icon?: string; // TODO: アイコン名のみに制限する
  active?: boolean;
  onClick?: VoidFunction;
};

export const MenuItem: React.FC<Props> = ({ label, icon, onClick }) => {
  return (
    <li
      className="list-none cursor-pointer select-none mx-1 px-4 py-2 text-gray-700 hover:bg-gray-100"
      onClick={onClick}
    >
      {icon && <span></span>}
      {label}
    </li>
  );
};

import React from "react";

export type Props = {
  label: string;
  icon?: string; // TODO: アイコン名のみに制限する
  active?: boolean;
  onClick?: VoidFunction;
};

export const MenuItem: React.FC<Props> = ({ label, icon, onClick }) => {
  return (
    <li className="" onClick={onClick}>
      {icon && <span></span>}
      {label}
    </li>
  );
};

import classNames from "classnames";
import React from "react";

export type Props = {
  label: string;
  icon?: string; // TODO: アイコン名のみに制限する
  active?: boolean;
  onClick?: VoidFunction;
};

export const MenuItem: React.FC<Props> = ({ label, icon, active, onClick }) => {
  return (
    <li
      className={classNames(
        "list-none cursor-pointer select-none px-4 py-2 rounded-lg	text-primary-regular",
        {
          "text-primary-inverted bg-accent-primary-regular shadow-md": active,
          "hover:bg-secondary-regular": !active,
        }
      )}
      onClick={onClick}
    >
      {icon && <span></span>}
      {label}
    </li>
  );
};

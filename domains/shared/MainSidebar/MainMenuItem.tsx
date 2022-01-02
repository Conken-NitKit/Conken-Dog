import { Menu, MenuId } from "constants/menu";

import { MenuItem } from "components/Sidebar";
import Link from "next/link";
import React from "react";

type Props = {
  menu: Menu;
  activeMenuId: MenuId;
};

export const MainMenuItem: React.FC<Props> = (props) => {
  const { id, path, label } = props.menu;

  return (
    <Link href={path}>
      <a>
        <MenuItem label={label} active={props.activeMenuId === id} />
      </a>
    </Link>
  );
};

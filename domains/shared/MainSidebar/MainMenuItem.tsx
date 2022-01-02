import { Menu, MenuId } from "constants/menu";

import { MenuItem } from "components/Sidebar";
import Link from "next/link";
import React, { useCallback } from "react";

type Props = {
  menu: Menu;
  activeMenuId: MenuId;
  onClick?: VoidFunction;
};

export const MainMenuItem: React.FC<Props> = ({
  menu,
  activeMenuId,
  onClick,
}) => {
  const { id, path, label } = menu;

  const handleClick = useCallback(() => {
    // NOTE: ページ遷移を行うため、少し待ってからイベントを発火する。
    setTimeout(onClick, 50);
  }, [onClick]);

  return (
    <Link href={path}>
      <a className="block" onClick={handleClick}>
        <MenuItem label={label} active={activeMenuId === id} />
      </a>
    </Link>
  );
};

import { MENU, MenuId } from "constants/menu";

import { Sidebar, SubMenu } from "components/Sidebar";
import { MainMenuItem } from "domains/shared/MainSidebar";
import React from "react";

type Props = {
  activeMenuId: MenuId;
  itemClick?: VoidFunction;
};

export const MainSidebar: React.FC<Props> = ({ activeMenuId, itemClick }) => {
  return (
    <Sidebar title={"ConDog"}>
      <MainMenuItem
        menu={MENU.MEMBERS_DIRECTORY}
        activeMenuId={activeMenuId}
        onClick={itemClick}
      />
      <SubMenu label={"学習ロードマップ"}>
        <MainMenuItem
          menu={MENU.WEB_FRONT}
          activeMenuId={activeMenuId}
          onClick={itemClick}
        />
        <MainMenuItem
          menu={MENU.SERVER_SIDE}
          activeMenuId={activeMenuId}
          onClick={itemClick}
        />
        <MainMenuItem
          menu={MENU.GAME_CLIENT}
          activeMenuId={activeMenuId}
          onClick={itemClick}
        />
        <MainMenuItem
          menu={MENU.DATA_SCIENCE}
          activeMenuId={activeMenuId}
          onClick={itemClick}
        />
      </SubMenu>
    </Sidebar>
  );
};

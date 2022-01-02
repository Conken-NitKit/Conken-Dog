import { MENU, MenuId } from "constants/menu";

import { Sidebar, SubMenu } from "components/Sidebar";
import { MainMenuItem } from "domains/shared/MainSidebar";
import React from "react";

type Props = {
  activeMenuId: MenuId;
};

export const MainSidebar: React.FC<Props> = ({ activeMenuId }) => {
  return (
    <Sidebar title={"ConDog"}>
      <MainMenuItem menu={MENU.MEMBERS_DIRECTORY} activeMenuId={activeMenuId} />
      <SubMenu label={"学習ロードマップ"}>
        <MainMenuItem menu={MENU.WEB_FRONT} activeMenuId={activeMenuId} />
        <MainMenuItem menu={MENU.SERVER_SIDE} activeMenuId={activeMenuId} />
        <MainMenuItem menu={MENU.GAME_CLIENT} activeMenuId={activeMenuId} />
        <MainMenuItem menu={MENU.DATA_SCIENCE} activeMenuId={activeMenuId} />
      </SubMenu>
    </Sidebar>
  );
};

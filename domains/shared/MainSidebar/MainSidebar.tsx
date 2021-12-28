import { MenuItem, Sidebar, SubMenu } from "components/Sidebar";
import React from "react";

export const MainSidebar: React.FC = () => {
  return (
    <Sidebar title={"ConDog"}>
      <MenuItem label={"メンバーディレクトリ"} active />
      <SubMenu label={"学習ロードマップ"}>
        <MenuItem label={"メンバーディレクトリ"} />
        <MenuItem label={"メンバーディレクトリ"} />
        <MenuItem label={"メンバーディレクトリ"} />
      </SubMenu>
      <MenuItem label={"メンバーディレクトリ"} />
      <MenuItem label={"メンバーディレクトリ"} />
      <MenuItem label={"メンバーディレクトリ"} />
    </Sidebar>
  );
};

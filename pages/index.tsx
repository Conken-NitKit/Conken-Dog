import { AppProps } from "next/app";
import React from "react";

import { MainSidebar } from "./_mainSideBar";

export const Home: React.FC<AppProps> = () => {
  return <MainSidebar />;
};

export default Home;

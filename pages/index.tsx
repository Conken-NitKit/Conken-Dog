import { MainSidebar } from "domains/shared/MainSidebar";
import { AppProps } from "next/app";
import React from "react";

export const Home: React.FC<AppProps> = () => {
  return (
    <div className="w-64">
      <MainSidebar />
    </div>
  );
};

export default Home;

import { DashBoard } from "domains/shared/Layout";
import { AppProps } from "next/app";
import React from "react";

export const Home: React.FC<AppProps> = () => {
  return <DashBoard></DashBoard>;
};

export default Home;

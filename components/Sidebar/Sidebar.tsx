import React from "react";

type Props = {
  title?: string;
};

export const Sidebar: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="">
      {!!title && <div>{title}</div>}
      <div className="">{children}</div>
    </div>
  );
};

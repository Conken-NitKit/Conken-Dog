import React from "react";

type Props = {
  title?: string;
};

export const Sidebar: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="h-full px-4">
      {!!title && <div>{title}</div>}
      <div className="space-y-2">{children}</div>
    </div>
  );
};

import classNames from "classnames";
import React from "react";

type Props = {
  className?: string;
  progress: number;
};

export const ProgressBar: React.FC<Props> = ({ className, progress }) => {
  return (
    <div
      className={classNames(className, "bg-tertiary-regular overflow-hidden")}
    >
      <div
        className="h-full bg-accent-primary-regular"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

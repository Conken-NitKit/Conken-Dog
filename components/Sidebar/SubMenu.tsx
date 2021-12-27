import { useToggle } from "hooks/useToggle";
import React, { useCallback, useEffect, useRef } from "react";

type Props = {
  label: string;
  icon?: string; // TODO: アイコン名のみに制限する
  defaultOpen?: boolean;
  onOpenChange?: (open?: boolean) => void;
};

export const SubMenu: React.FC<Props> = ({
  children,
  label,
  defaultOpen = false,
  onOpenChange,
}) => {
  const [opened, toggle] = useToggle(!defaultOpen, onOpenChange);
  const outerRef = useRef<HTMLUListElement | null>();

  const startTransition = useCallback(() => {
    const prevHeight = outerRef.current.getBoundingClientRect().height;
    let endHeight = 0;

    if (opened) {
      outerRef.current.style.height = "auto";
      endHeight = outerRef.current.getBoundingClientRect().height;
      outerRef.current.style.height = `${prevHeight}px`;
    }

    setTimeout(() => {
      outerRef.current.style.transitionProperty = "height";
      outerRef.current.style.height = `${endHeight}px`;
    }, 50);
  }, [opened]);

  const endTransition = useCallback(() => {
    console.log("AAAA");
    outerRef.current.style.transitionProperty = "none";
  }, []);

  useEffect(() => {
    startTransition();
  }, [opened, startTransition]);

  const handleLabelClick = () => {
    toggle();
  };

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.currentTarget === outerRef.current && e.propertyName === "height") {
      endTransition();
    }
  };

  return (
    <li className="">
      {!!label && <div onClick={handleLabelClick}>{label}</div>}
      <ul
        ref={outerRef}
        className="overflow-hidden duration-300"
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </ul>
    </li>
  );
};

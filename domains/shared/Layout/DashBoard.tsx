import { MenuId } from "constants/menu";

import { MainSidebar } from "domains/shared/MainSidebar";
import React, { useCallback, useEffect, useRef } from "react";

type Props = {
  activeMenuId?: MenuId;
};

export const DashBoard: React.FC<Props> = ({ children, activeMenuId }) => {
  const sidebarRef = useRef<HTMLDivElement>();
  const bodyRef = useRef<HTMLDivElement>();

  useEffect(() => {
    bodyRef.current.scrollIntoView();
  }, []);

  // HACK:
  // 横スクロールした際に snap がうまく聞かない場合があるので、
  // その場合は時間差で強制的に正常な位置にスクロールさせる処理
  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      const scrollLeft = sidebarRef.current.scrollLeft;
      const bodyPosition = bodyRef.current.offsetLeft;

      if (scrollLeft !== 0 && scrollLeft !== bodyPosition) {
        bodyRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 600);
  }, []);

  const handleBodyClick = useCallback(() => {
    bodyRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  const handleSidebarItemClick = useCallback(() => {
    bodyRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      ref={sidebarRef}
      onTouchEnd={handleTouchEnd}
      className="flex snap-x h-screen w-screen bg-secondary-regular overflow-x-scroll"
    >
      <div className="snap-end shrink-0 w-10/12 max-w-xs h-full bg-primary-regular overflow-scroll">
        <MainSidebar
          activeMenuId={activeMenuId}
          itemClick={handleSidebarItemClick}
        />
      </div>
      <div
        ref={bodyRef}
        className="snap-start shrink-0 lg:shrink w-screen lg:w-full h-full overflow-y-scroll"
        onClick={handleBodyClick}
      >
        {children}
      </div>
    </div>
  );
};

import { isMenuId } from "constants/menu";

import { DashBoard } from "domains/shared/Layout";
import { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import React, { useMemo } from "react";

export const Course: React.FC<AppProps> = () => {
  const router = useRouter();
  const { courseId } = router.query;

  const activeMenuId = useMemo(() => {
    if (typeof courseId !== "string") {
      return "";
    }
    return `courses-${courseId}`;
  }, [courseId]);

  if (!isMenuId(activeMenuId)) {
    return <DashBoard></DashBoard>;
  }

  return (
    <DashBoard activeMenuId={activeMenuId}>
      <div className="w-11/12 max-w-240 mx-auto">
        <div className="pt-9 text-center">
          <h1 className="text-3xl leading-loose">React</h1>
          <p className="text-sm">
            世界的に人気上昇中の サイトの見た目を作るJavaScriptライブラリ
          </p>
        </div>
      </div>
    </DashBoard>
  );
};

export default Course;

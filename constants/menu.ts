import { COURSE } from "./course";

export const MENU = {
  MEMBERS_DIRECTORY: {
    id: "members",
    path: "/members",
    label: "メンバーディレクトリ",
  },
  WEB_FRONT: {
    id: "courses-web",
    path: "/courses/web",
    label: COURSE.WEB_FRONT.name,
  },
  SERVER_SIDE: {
    id: "courses-server",
    path: "/courses/server",
    label: COURSE.SERVER_SIDE.name,
  },
  GAME_CLIENT: {
    id: "courses-game",
    path: "/courses/game",
    label: COURSE.GAME_CLIENT.name,
  },
  DATA_SCIENCE: {
    id: "courses-ai",
    path: "/courses/ai",
    label: COURSE.DATA_SCIENCE.name,
  },
} as const;

export type Menu = typeof MENU[keyof typeof MENU];
export type MenuId = typeof MENU[keyof typeof MENU]["id"];

export const isMenuId = (arg: string): arg is MenuId =>
  Object.values(MENU).some((item) => item.id === arg);

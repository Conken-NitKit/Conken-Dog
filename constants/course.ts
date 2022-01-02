export type Course = {
  id: string;
  name: string;
};

export const COURSE_KEYS = [
  "WEB_FRONT",
  "SERVER_SIDE",
  "GAME_CLIENT",
  "DATA_SCIENCE",
] as const;

type CourseKey = typeof COURSE_KEYS[number];

export const COURSE: { [key in CourseKey]: Course } = {
  WEB_FRONT: {
    id: "courses-web",
    name: "Webフロント",
  },
  SERVER_SIDE: {
    id: "courses-server",
    name: "サーバーサイド",
  },
  GAME_CLIENT: {
    id: "courses-game",
    name: "ゲームクライアント",
  },
  DATA_SCIENCE: {
    id: "courses-data",
    name: "データサイエンス",
  },
} as const;

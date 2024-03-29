import { ISection } from "../sections";
import { AI_COURSE } from "./AI";
import { CS_COURSE } from "./CS";
import { GAME_CREATE_COURSE } from "./GameCreate";
import { GAME_DESIGN_COURSE } from "./GameDesign";
import { GAME_PLANING_COURSE } from "./GamePlaning";
import { ILLUST_COURSE } from "./Illust";
import { WEB_CREATE_COURSE } from "./WebCreate";
import { WEB_DESIGN_COURSE } from "./WebDesign";

export interface ICourses {
  name: string;
  metaName: string;
  description: string;
  logoSVG: string;
  sections: ISection[];
}

export const courseList: ICourses[] = [
  WEB_CREATE_COURSE,
  GAME_CREATE_COURSE,
  AI_COURSE,
  ILLUST_COURSE,
];

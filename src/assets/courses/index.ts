import { ISection } from "../sections";
import { GAME_CREATE_COURSE } from "./GameCreate";
import { WEB_CREATE_COURSE } from "./WebCreate";

export interface ICourses {
  name: string;
  metaName: string;
  description: string;
  logoSVG: string;
  sections: ISection[];
}

export const courceList: ICourses[] = [WEB_CREATE_COURSE, GAME_CREATE_COURSE];

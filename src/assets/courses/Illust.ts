import { ICourses } from ".";
import { VTUBER } from "../sections/VTUBER";
import { DIGITAL_ILLUST }　from "../sections/DIGITAL_ILLUST";
import logo from "../img/eye-catching/game1.svg";

export const ILLUST_COURSE: ICourses = {
  name: "イラスト",
  metaName: "Illust",
  logoSVG: logo,
  description: "",
  sections: [VTUBER, DIGITAL_ILLUST],
};

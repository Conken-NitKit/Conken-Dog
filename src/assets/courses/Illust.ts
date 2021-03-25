import { ICourses } from ".";
import logo from "../img/eye-catching/game1.svg";

import { VTUBER } from "../sections/VTUBER";
import { DIGITAL_ILLUST } from "../sections/DIGITAL_ILLUST";
import { DOT_ILLUST } from "../sections/DOT";

export const ILLUST_COURSE: ICourses = {
  name: "イラスト",
  metaName: "Illust",
  logoSVG: logo,
  description: "",
  sections: [DIGITAL_ILLUST, VTUBER, DOT_ILLUST],
};

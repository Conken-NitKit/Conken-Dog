import { ICourses } from ".";
import logo from "../img/eye-catching/game1.svg";
import { ATCODER } from "../sections/ATCODER";
import { ML } from "../sections/ML";
import { MATH } from "../sections/MATH";
import { PYTHON } from "../sections/PYTHON";
import { OUTLINE } from "../sections/OUTLINE";
import { DEEP } from "../sections/DEEP";
import { NLP } from "../sections/NLP";
import { SNN } from "../sections/SNN";


export const AI_COURSE: ICourses = {
  name: "AI",
  metaName: "ai",
  logoSVG: logo,
  description: "",
  sections: [ATCODER, ML, MATH, PYTHON, OUTLINE, DEEP, NLP, SNN],
};

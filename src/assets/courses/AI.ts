import { ICourses } from ".";
import logo from "../img/eye-catching/game1.svg";
import { ATCODER } from "../sections/ATCODER";
import { PYTHON } from "../sections/PYTHON";
import { ML } from "../sections/ML";
import { CHAINER1 } from "../sections/CHAINER1";
import { CHAINER2 } from "../sections/CHAINER2";
import { CHAINER3 } from "../sections/CHAINER3";


export const AI_COURSE: ICourses = {
  name: "AI",
  metaName: "ai",
  logoSVG: logo,
  description: "",
  sections: [ATCODER, PYTHON, CHAINER1, CHAINER2, ML, CHAINER3],
};

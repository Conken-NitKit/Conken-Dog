import { ICourses } from ".";
import { ATCODER } from "../sections/ATCODER";
import { HTML } from "../sections/HTML";
import { JAVASCRIPT } from "../sections/JAVASCRIPT";
import { REACT } from "../sections/REACT";
import logo from "../img/Business.svg";

export const WEB_DESIGN_COURSE: ICourses = {
  name: "Webデザイン",
  metaName: "web-design",
  logoSVG: logo,
  description:
  "このコースではWeb開発に必要なクライアントからサーバーサイドまでの幅広い知識を体型的に学習します。\n" +
  "本コースを受講していただくことで、学生間での開発はもちろん、実際の企業での開発現場でも通用する技術力を習得することができます。",
  sections: [ATCODER, HTML, JAVASCRIPT, REACT],
};

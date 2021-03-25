import { ICourses } from ".";
import { ATCODER } from "../sections/ATCODER";
import { HTML_LIGHT } from "../sections/HTML_LIGHT";
import { JAVASCRIPT } from "../sections/JAVASCRIPT";
import { NODE } from "../sections/NODE";
import { REACT } from "../sections/REACT";
import logo from "../img/eye-catching/web1.svg";
import { TYPESCRIPT } from "../sections/TYPESCRIPT";
import { NEXT } from "../sections/NEXT";
import { WEB } from "../sections/WEB";
import { TDD } from "../sections/TDD";

export const WEB_CREATE_COURSE: ICourses = {
  name: "Web開発",
  metaName: "web-create",
  logoSVG: logo,
  description:
  "このコースではWeb開発に必要なクライアントからサーバーサイドまでの幅広い知識を体型的に学習します。\n" +
  "本コースを受講していただくことで、学生間での開発はもちろん、実際の企業での開発現場でも通用する技術力を習得することができます。",
  sections: [ATCODER, HTML_LIGHT, JAVASCRIPT, REACT, TDD, NEXT, NODE, TYPESCRIPT, WEB],
};

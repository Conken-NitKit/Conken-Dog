import { ICourses } from ".";
import { CARRIER } from "../sections/CARRIER";
import { COMMUNICATION } from "../sections/COMMUNICATION";
import { INDUSTRY } from "../sections/INDUSTRY";
import { LOGICAL_THINKING } from "../sections/LOGICAL_THINKING";
import { MEETING } from "../sections/MEETING";
import { MENTAL_HEALTH } from "../sections/MENTAL_HEALTH";
import { MIND_CONTROL } from "../sections/MIND_CONTROL";
import { MONEY } from "../sections/MONEY";
import logo from "../img/Knowledges.svg";

export const OTHERS: ICourses = {
  name: "特集",
  metaName: "others",
  logoSVG: logo,
  description:
    "このコースでは部活とは直接関係ない。\n" +
    "ただ、知ってると超役に立つ実用的な知識をまとめています。\n" +
    "内容としては「技術革新とそれによって激変する未来のお話」「出世するための仕事術」" +
    "「良い人間関係構築のための会話術」「より良い人生を送るための健康法」「就職活動のノウハウ」" +
    "「社会人になるまでに知っておかないと100%損するお金のお話」などなどです。\n" +
    "正直、プログラミングの勉強なんかよりも格段に価値のあるコンテンツですので、少しずつ勉強していきましょう！！\n",
  sections: [
    INDUSTRY,
    LOGICAL_THINKING,
    MEETING,
    COMMUNICATION,
    MIND_CONTROL,
    MENTAL_HEALTH,
    CARRIER,
    MONEY,
  ],
};

import { ICourses } from ".";
import { CARRIER } from "../sections/CARRIER";
import { COMMUNICATION } from "../sections/COMMUNICATION";
import { INDUSTRY } from "../sections/INDUSTRY";
import { LOGICAL_THINKING } from "../sections/LOGICAL_THINKING";
import { MEETING } from "../sections/MEETING";
import { MENTAL_HEALTH } from "../sections/MENTAL_HEALTH";
import { MIND_CONTROL } from "../sections/MIND_CONTROL";

export const OTHERS: ICourses = {
  name: "特集",
  metaName: "others",
  logoSVG: "???",
  description:
    "このコースでは実際の大手ゲーム会社の開発現場でも利用されているUnityを使ってゲーム開発を行う際に必要な知識を学習します。\n" +
    "本コースではオフラインでのゲームはもちろん、最終的にはオンラインでの対戦ゲームの開発方法までをチュートリアルを通して身につけることができます。",
  sections: [
    INDUSTRY,
    LOGICAL_THINKING,
    MEETING,
    COMMUNICATION,
    MIND_CONTROL,
    MENTAL_HEALTH,
    CARRIER,
  ],
};

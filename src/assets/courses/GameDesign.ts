import { ICourses } from ".";
import { ATCODER } from "../sections/ATCODER";
import { CS } from "../sections/CS";
import { P5 } from "../sections/P5";
import { UNITY } from "../sections/UNITY";
import { ANGEL } from "../sections/ANGEL";
import { DEVIL } from "../sections/DEVIL";
import { DOT_ILLUST } from "../sections/DOT";
import { DOTWEEN } from "../sections/DOTWEEN";

export const GAME_DESIGN_COURSE: ICourses = {
  name: "ゲームデザイン",
  metaName: "game-design",
  logoSVG: "???",
  description:
    "このコースでは実際の大手ゲーム会社の開発現場でも利用されているUnityを使ってゲーム開発を行う際に必要な知識を学習します。\n" +
    "本コースではオフラインでのゲームはもちろん、最終的にはオンラインでの対戦ゲームの開発方法までをチュートリアルを通して身につけることができます。",
  sections: [ATCODER, P5, CS, UNITY, DOTWEEN, ANGEL, DEVIL, DOT_ILLUST],
};

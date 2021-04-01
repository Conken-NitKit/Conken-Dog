import { ICourses } from ".";
import { GAME_CARRIER } from "../sections/GAME_CARRIER";
import { LEVEL_DESIGN } from "../sections/LEVEL_DESIGN";

export const GAME_PLANING_COURSE: ICourses = {
  name: "ゲーム企画",
  metaName: "game-planing",
  logoSVG: "???",
  description:
    "このコースでは実際の大手ゲーム会社の開発現場でも利用されているUnityを使ってゲーム開発を行う際に必要な知識を学習します。\n" +
    "本コースではオフラインでのゲームはもちろん、最終的にはオンラインでの対戦ゲームの開発方法までをチュートリアルを通して身につけることができます。",
  sections: [GAME_CARRIER, LEVEL_DESIGN],
};

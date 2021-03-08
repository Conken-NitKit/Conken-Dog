import { ICourses } from ".";
import { ATCODER } from "../sections/ATCODER";
import { CS } from "../sections/CS";
import { P5 } from "../sections/P5";
import { PHOTON } from "../sections/PHOTON";
import { UNIRX } from "../sections/UNIRX";
import { UNITY } from "../sections/UNITY";
import logo from "../img/eye-catching/game1.svg";

export const GAME_CREATE_COURSE: ICourses = {
  name: "ゲーム開発",
  metaName: "game-create",
  logoSVG: logo,
  description:
    "このコースでは実際の大手ゲーム会社の開発現場でも利用されているUnityを使ってゲーム開発を行う際に必要な知識を学習します。\n" +
    "本コースではオフラインでのゲームはもちろん、最終的にはオンラインでの対戦ゲームの開発方法までをチュートリアルを通して身につけることができます。",
  sections: [ATCODER, P5, CS, UNITY, PHOTON, UNIRX],
};

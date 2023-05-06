import { ICourses } from ".";
import { ATCODER } from "../sections/ATCODER";
import { CS_V2 } from "../sections/CS_V2";
import { UNITY_V2_1ST } from "../sections/UNITY_V2_1ST";
import { UNITY_V2_2ND } from "../sections/UNITY_V2_2ND";
import { UNITY_V2_3RD } from "../sections/UNITY_V2_3RD";
import logo from "../img/eye-catching/game1.svg";

export const GAME_CREATE_COURSE: ICourses = {
  name: "ゲーム開発",
  metaName: "game-create",
  logoSVG: logo,
  description:
    "このコースでは実際の大手ゲーム会社の開発現場でも利用されているUnityを使ってゲーム開発を行う際に必要な知識を学習します。\n" +
    "本コースではオフラインでのゲームはもちろん、最終的にはオンラインでの対戦ゲームの開発方法までをチュートリアルを通して身につけることができます。",
  sections: [ATCODER, CS_V2, UNITY_V2_1ST, UNITY_V2_2ND, UNITY_V2_3RD],
};

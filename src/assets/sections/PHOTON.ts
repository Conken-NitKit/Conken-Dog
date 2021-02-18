import { ISection } from ".";

export const PHOTON: ISection = {
  title: "UnityとPhotonでオンライン対戦ゲーム",
  description:
    "Photon EngineとはUnityでrealtimeオンライン対戦を可能にするためのサービスです。\n" +
    "本レッスンではPhotonを利用して、「犬猫将棋」という対戦型ボードゲームを作成します",
  contentsList: [
    {
      title: "UnityとPhotonのオンライン対戦ゲームにおける使い方",
      link: "https://tomoarch.com/2019/04/10/unityphotononlinehowtocreategame/",
      mediaType: ["READ_ONLY"],
      requiredTime: 20,
    },
    {
      title: "カード駒の作成",
      link:
        "https://tomoarch.com/2019/02/24/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90%e3%81%97/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 50,
    },
    {
      title: "カード駒をひっくり返す",
      link:
        "https://tomoarch.com/2019/03/11/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-2/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 80,
    },
    {
      title: "対戦相手のセッティング",
      link:
        "https://tomoarch.com/2019/03/11/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-3/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 80,
    },
    {
      title:
        "Photon対戦ゲームにおいてカメラを複数個反転配置する場合Physics 2d Raycasterが機能しない件",
      link:
        "https://tomoarch.com/2019/03/11/photon%e5%af%be%e6%88%a6%e3%82%b2%e3%83%bc%e3%83%a0%e3%81%ab%e3%81%8a%e3%81%84%e3%81%a6%e3%82%ab%e3%83%a1%e3%83%a9%e3%82%92%e8%a4%87%e6%95%b0%e5%80%8b%e5%8f%8d%e8%bb%a2%e9%85%8d%e7%bd%ae%e3%81%99/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 30,
    },
    {
      title: "盤面の上にマスを作る",
      link:
        "https://tomoarch.com/2019/03/14/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-4/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 120,
    },
    {
      title: "金将の動きを考える",
      link:
        "https://tomoarch.com/2019/03/15/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-5/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 120,
    },
    {
      title: "飛車の動きを考える",
      link:
        "https://tomoarch.com/2019/03/15/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-6/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 120,
    },
    {
      title: "角の動きを考える",
      link:
        "https://tomoarch.com/2019/03/15/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-7/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 90,
    },
    {
      title: "桂馬と王将の動きを考える",
      link:
        "https://tomoarch.com/2019/03/19/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-8/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 90,
    },
    {
      title: "駒を取る仕組み、所有権の移譲",
      link:
        "https://tomoarch.com/2019/03/19/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-9/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 140,
    },
    {
      title: "プレイヤー2に駒の動きを対応させる",
      link:
        "https://tomoarch.com/2019/03/19/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-10/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 180,
    },
    {
      title: "マタタビ/ホネを加える",
      link:
        "https://tomoarch.com/2019/03/20/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-11/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime:90,
    },
    {
      title: "ロビー作成と複数ルームの出入りの方法",
      link:
        "https://tomoarch.com/2019/03/27/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-13/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 80,
    },
    {
      title: "ターン制のタイマーの作成をデモから学ぶ",
      link:
        "https://tomoarch.com/2019/03/28/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-14/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 100,
    },
    {
      title: "ターン制のタイマーを任意のタイミングで回す",
      link:
        "https://tomoarch.com/2019/03/28/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-15/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 80,
    },
    {
      title: "ターン制のタイマーを駒の動きでトリガーさせる",
      link:
        "https://tomoarch.com/2019/03/31/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-16/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 80,
    },
    {
      title: "対戦相手のターンに自分の駒をロックする",
      link:
        "https://tomoarch.com/2019/04/02/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-17/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 50,
    },
    {
      title: "OnMouseDrag()でGameObjectが瞬間移動するバグを解決する",
      link:
        "https://tomoarch.com/2019/04/05/unity%e3%81%a8photon%e3%81%a7%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b%e3%80%8d%e3%82%92%e4%bd%9c%e6%88%90-18/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 50,
    },
    {
      title: "OnMouseDrag()でGameObjectが瞬間移動するバグを解決する",
      link:
        "https://tomoarch.com/2019/04/06/unity%e3%81%a8photon%e3%81%a7%e3%82%aa%e3%83%b3%e3%83%a9%e3%82%a4%e3%83%b3%e5%af%be%e6%88%a6%e5%9e%8b%e3%83%9c%e3%83%bc%e3%83%89%e3%82%b2%e3%83%bc%e3%83%a0%e3%80%8c%e7%8a%ac%e7%8c%ab%e5%b0%86%e6%a3%8b/",
      mediaType: ["USE_GIT", "USE_MY_PC"],
      requiredTime: 80,
    },
  ],
};

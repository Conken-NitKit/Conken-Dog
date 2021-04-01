import styled from "styled-components";
import {
  Approach,
  Data,
  Partition,
  Plan,
  Team,
  Teams,
  WhatIs,
} from "../components/landing";

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

export default function Lnading() {
  return (
    <Container>
      <Approach />
      <Partition />

      <WhatIs />
      <Partition />

      <Data />
      <Partition />

      <Teams />
      <Partition />

      <Team
        name="Web班"
        thumbnail={"???"}
        description1="オリジナルのWebサービスを開発していくことを目標としたチームです。"
        description2="担当分野は多岐に渡り、Webページ、スマホアプリ、 LineBot、サーバー構築などを担当し、それらの作成に必要な知識を応用することでセキュリティコンテストにも出場しています。"
      />
      <Plan
        heading1="プログラミング自体が好きな人向け"
        heading2="高品質なサービスの開発に興味ある人向け"
        plan1="Webエンジニアコース"
        plan2="Webデザイナーコース"
        commonTitle="共通（簡単なWebページ開発のための知識）"
        common={`#C++  #HTML&CSS  #JavaScript  #Linux  #Git\n#React  #ReactNative  #Next.js`}
        contentTitle1="専門 ( ネットワーク&セキュリティ に関する知識 )"
        content1={`#TDD(テスト駆動開発)  #Node.js  #TypeScript\n#ネットワーク  #暗号化  #仮想化  #セキュリティ`}
        contentTitle2="専門 ( Webページのデザイン自体に関する知識 )"
        content2={`#Figma  #UI/UXデザイン #高度なCSSスタイリング\n#色彩心理学  #コピーライティング`}
      />
      <Partition />

      <Team
        name="Game班"
        thumbnail={"???"}
        description1="機械学習という手法を用いて、AI(人工知能)を開発していくことを目標としたチームです。"
        description2="実際に大手ゲーム会社でも使われている技術を学び、学校の授業では学ぶことのできない「本格的なゲーム開発」を学ぶことができます。"
      />
      <Plan
        heading1="ゲーム開発のスペシャリストになりたい人向け"
        heading2="モデリングも含めて、全部やりたい人向け"
        plan1="ゲームクリエイターコース"
        plan2="ゲームデザイナーコース"
        commonTitle="共通（簡単なゲーム開発のための知識）"
        common={`#C++ #P5.js  #Unity  #数学(カンタン)\n#ゲーム設計  #レベルデザイン`}
        contentTitle1="専門（より高度なゲーム開発のための知識）"
        content1="#Photon(オンラインゲーム作成)  #UniRx"
        contentTitle2="専門 ( ゲームのキャラ作りに必要な知識 )"
        content2="#DOTween  #3Dモデリング  #ドット絵"
      />
      <Partition />

      <Team
        name="AI班"
        thumbnail={"???"}
        description1="オリジナルのWebサービスを開発していくことを目標としたチームです。"
        description2="本格的に部活でAI開発が始まったのは2019年からで他の班と比較すると日が浅い。ただ、将来性を考えると間違いなく勉強すべき分野なのですごいオススメです！"
      />
      <Partition />

      <Team
        name="イラスト班"
        thumbnail={"???"}
        description1="デジタルイラストの作成に特化した班です。"
        description2="他の班と違い、プログラミングに夜開発は行わない活動をメインで行います。"
      />
      <Partition />
    </Container>
  );
}

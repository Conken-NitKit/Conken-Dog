import styled from "styled-components";

import {
  Approach,
  Data,
  Partition,
  Plan,
  Recommendation,
  SquareTitle,
  SquareSpan,
  Team,
  Teams,
  WhatIs,
} from "../components/landing/index";

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

      {/* チームのテキストは、枠とのバランスを見て適宜改行して下さい。 */}

      <Recommendation
        group={"Web班"}
        circles={[
          "1年生のうちから\n色んな作品を\n作りたい",
          "作った作品を\nみんなに\n使って欲しい",
          "幅広い分野の\n色んなことに\n挑戦したい",
        ]}
        points={[
          {
            title: (
              <SquareTitle>
                全コースの中でももっとも
                <br />
                開発サイクルが "高速" で<br />
                <SquareSpan>たくさんの作品</SquareSpan>を作ることができる
              </SquareTitle>
            ),
            description: `Web班での作品はカンタンなものであれば、大体2~3日で済むので、\nプロジェクトもたくさん立ち上げることができて、\n1年生のうちでも活躍がしやすくなっています。`,
          },
          {
            title: (
              <SquareTitle>
                全コースの中でもっとも
                <br />
                <SquareSpan>実用的なサービス</SquareSpan>の開発が多い
              </SquareTitle>
            ),
            description: `Web班の作品は「使ってくれる人がいるか？」という視点を\n大事にしてサービスの開発を行っていきます。\nそのため、作品を色んな人に使ってもらうという体験ができます。\n（Webデザイン班では "ビジネス的な戦略" についても学べます）`,
          },
          {
            title: (
              <SquareTitle>
                コンピュータの基礎的な部分を学び
                <br />
                <SquareSpan>幅広い知識</SquareSpan>を得ることが出来る
              </SquareTitle>
            ),
            description: `Web班ではカンタンなWebサイトの他に、\nサーバー構築、ネットワーク、セキュリティといった知識についても\n勉強することができます。\n（上記に関しては "Web開発班" の配属者のみのコンテンツです）`,
          },
        ]}
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
      <Recommendation
        group={"Game班"}
        circles={[
          "とにかくゲームを\n作りたい",
          "有名ゲームの\nおもしろさを\n分析したい",
          "高専祭でみんなに\n自分の作品を\n見せつけたい",
        ]}
        points={[
          {
            title: (
              <SquareTitle>
                ゲームの開発に必要な知識を
                <br />
                <SquareSpan>最短ルート</SquareSpan>で学ぶことができる
              </SquareTitle>
            ),
            description: `ゲーム班ではゲーム会社の実際の現場で使われている技術をもとに\nそれらを無駄なく学ぶためのカリキュラムを用意しています。\n現場で使われている技術なので、しっかりと内容を理解すれば、\nほとんどのゲームが作ることができるようなれます。`,
          },
          {
            title: (
              <SquareTitle>
                全コースの中でもっとも
                <br />
                <SquareSpan>実用的なサービス</SquareSpan>の開発が多い
              </SquareTitle>
            ),
            description: `ゲーム班では「ゲーム開発のスキル」以外にも、\n・ゲームを最も「おもしろい！」と感じる難易度に調整する方法\n・プレイヤーの「買いたい欲」を刺激する方法\nなどについても学ぶことができます。`,
          },
          {
            title: (
              <SquareTitle>
                コンピュータの基礎的な部分を学び
                <br />
                <SquareSpan>幅広い知識</SquareSpan>を得ることが出来る
              </SquareTitle>
            ),
            description: `自分の作ったゲームを楽しんでもらうという体験をすることは、\n学生のうちだと、そういった機会はとても貴重な経験です。\n高専祭では実際に友人を招待して楽しんでもらい、\nそういった貴重な経験を積むことができます。`,
          },
        ]}
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

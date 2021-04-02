import styled from "styled-components";

import { Container } from "./Container";

import background from "../../assets/img/landing/teams/background.svg";

const TeamsContainer = styled(Container)`
  justify-content: center;

  background-image: url(${background});
  background-size: cover;
`;

const Title = styled.h1`
  margin: 0 auto;
  margin-top: 10vw;

  height: 5vw;

  line-height: 5vw;
  text-align: center;

  font-family: Meiryo;
  font-style: normal;
  font-weight: bold;
  font-size: 2.75vw;

  color: #87ceeb;
`;

const Text = styled.p`
  margin: 0 auto;
  margin-top: 1vw;

  height: 5vw;

  font-family: Meiryo;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: normal;

  line-height: 2.5vw;
  text-align: center;

  color: #000000;
`;

const CardContainer = styled.body`
  display: flex;

  height: calc(100vh - 21vw);
  width: 940px;
`;

export const Teams = () => {
  return (
    <TeamsContainer>
      <Title>配属チームの紹介</Title>

      <Text>
        コンピュータ研究部は大きく分けて4つの班があり、
        <br />
        各々が興味ある活動に集中して、取り組むことが可能です。
      </Text>
      <CardContainer>
        <div>
          <h3>Web班</h3>
          <ul>
            <li># Webページ</li>
            <li># スマホアプリ</li>
            <li># LINE Bot</li>
            <li># サーバー構築</li>
            <li># ハッキング(仮)</li>
          </ul>
        </div>
        <div>
          <h3>Game班</h3>
          <ul>
            <li># 2D/3Dゲーム</li>
            <li># オンライン対戦</li>
            <li># 3Dモデルの作成</li>
            <li># アニメーション</li>
          </ul>
        </div>
        <div>
          <h3>AI班</h3>
          <ul>
            <li># 画像認識</li>
            <li># 自然言語処理</li>
            <li># 音声認識</li>
            <li># レコメンドシステム</li>
            <li># 数学</li>
          </ul>
        </div>
        <div>
          <h3>イラスト班</h3>
          <ul>
            <li># デジタルイラスト</li>
            <li># ドット絵</li>
            <li># 動画編集</li>
            <li># Live2D</li>
            <li># VTuber</li>
          </ul>
        </div>
      </CardContainer>
    </TeamsContainer>
  );
};

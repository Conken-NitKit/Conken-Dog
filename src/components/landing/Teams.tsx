import styled from "styled-components";
import media from "styled-media-query";

import background from "../../assets/img/landing/teams/background.svg";

const Container = styled.div`
  margin: 0 auto;
  padding: 15px;

  ${media.lessThan("medium")`
    width: 88%;
  `}

  ${media.between("medium", "large")`
    width: 750px;
  `}

  ${media.greaterThan("large")`
    width: 940px;
  `}

  background-image: url(${background});
  background-size: contain;
`;

export const Teams = () => {
  return (
    <Container>
      <p>
        コンピュータ研究部は大きく分けて4つの班があり、
        <br />
        各々が興味ある活動に集中して、取り組むことができます。
      </p>
      <div>
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
      </div>
    </Container>
  );
};

import styled from "styled-components";
import media from "styled-media-query";

import { Container } from "../Container";

import background from "../../../assets/img/landing/teams/background.svg";
import PhoneBackground from "../../../assets/img/landing/teams/phone-background.svg";
import { TeamCard } from "./TeamCard";

const TeamsContainer = styled(Container)`
  margin: -35px auto 60px auto;

  padding: 0;

  justify-content: center;

  background-image: url(${background});
  background-size: cover;

  ${media.between("medium", "large")`
    margin: -30px auto 50px auto;
  `};

  ${media.lessThan("medium")`
    margin-top: 12vw;

    background-image: url(${PhoneBackground});
  `};
`;

const Title = styled.h1`
  margin: 0 auto;

  padding-top: 140px;

  font-size: 40px;
  font-weight: bold;

  color: #87ceeb;

  line-height: 40px;
  text-align: center;

  ${media.between("medium", "large")`
    padding-top: 110px;

    font-size: 35px;

    line-height: 35px;
  `};

  ${media.lessThan("medium")`
    padding-top: 11vw;

    font-size: 8vw;

    line-height: 9vw;
  `}
`;

const Text = styled.h2`
  margin: 30px auto 0 auto;

  font-size: 20px;
  font-style: normal;
  font-weight: normal;

  color: #000000;

  line-height: 35px;
  text-align: center;

  ${media.between("medium", "large")`
    margin-top: 25px;

    font-size: 15px;

    line-height: 25px;
  `}

  ${media.lessThan("medium")`
    margin-top: 8vw;

    font-size: 3.2vw;

    line-height: 5vw;
  `};
`;

const CardContainer = styled.body`
  display: flex;

  height: 445px;

  ${media.between("medium", "large")`
    height: 325px;
  `}
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
        <TeamCard
          CardTitle="Web班"
          Color="#B2E9A0"
          CardContents={[
            "# Webページ",
            "# スマホアプリ",
            "# LINE Bot",
            "# サーバー構築",
            "# ハッキング(仮)",
          ]}
        />

        <TeamCard
          CardTitle="Game班"
          Color="#EC96E3"
          CardContents={[
            "# 2D/3Dゲーム",
            "# オンライン対戦",
            "# 3Dモデルの作成",
            "# アニメーション",
          ]}
        />

        <TeamCard
          CardTitle="AI班"
          Color="#7FE9D6"
          CardContents={[
            "# 画像認識",
            "# 自然言語処理",
            "# 音声認識",
            "# レコメンドシステム",
            "# 数学",
          ]}
        />

        <TeamCard
          CardTitle="イラスト班"
          Color="#F2A872"
          CardContents={[
            "# デジタルイラスト",
            "# ドット絵",
            "# Live2D",
            "# VTuber",
          ]}
        />
      </CardContainer>
    </TeamsContainer>
  );
};

import { ISection } from ".";

export const CHAINER1: ISection = {
  title: "Chainer チュートリアル（準備編）",
  description:
    "数学の基礎、プログラミング言語 Python の基礎から、機械学習・ディープラーニングの理論の基礎とコーディングまでを幅広く解説（その１）",
  contentsList: [
        {
            title: "はじめに",
            link: "https://tutorials.chainer.org/ja/01_Welcome_to_Chainer_Tutorial.html",
            mediaType: [],
            requiredTime: 20,
        },
        {
            title: "Python 入門",
            link: "https://tutorials.chainer.org/ja/02_Basics_of_Python.html",
            mediaType: [],
            requiredTime: 150,
        },
        {
            title: "中学数学からはじめるAI(人工知能)のための数学入門",
            link: "https://youtu.be/7A05OamqCyc",
            mediaType: ["READ_ONLY", "VIDEO"],
            requiredTime: 130,
        },
        {
            title: "機械学習に使われる数学",
            link: "https://tutorials.chainer.org/ja/03_Basic_Math_for_Machine_Learning.html",
            mediaType: ["READ_ONLY"],
            requiredTime: 20,
        },
        {
            title: "微分の基礎",
            link: "https://tutorials.chainer.org/ja/04_Basics_of_Differential.html",
            mediaType: ["READ_ONLY"],
            requiredTime: 40,
        },
        {
            title: "線形代数の基礎",
            link: "https://tutorials.chainer.org/ja/05_Basics_of_Linear_Algebra.html",
            mediaType: ["READ_ONLY"],
            requiredTime: 40,
        },
        {
            title: "Step 1 の演習問題",
            link: "https://tutorials.chainer.org/ja/Exercise_Step_01.html",
            mediaType: [],
            requiredTime: 120,
        },
    ],
};
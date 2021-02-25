import { useContext, useState, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import Slick from "react-slick";

import styled from "styled-components";
import media from "styled-media-query";
import { Description } from "../styles/fonts/Description";
import { Heading1 } from "../styles/fonts/Heading1";
import Eyelogo from "../assets/img/Eye2.svg";
import EyeOfflogo from "../assets/img/EyeOff.svg";
import { createUser } from "../utils/users/createUser";
import { IUser, defaultUserInfo } from "../interfaces/User";
import { userContext } from "../contexts/userContext";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 16px 48px;
  border: solid #f2f2f2;
  border-width: 0 0 1px 0;
  ${media.lessThan("medium")`
    margin-bottom: 24px;
    padding: 8px 16px;
  `}
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Meiryo UI", Meiryo, "MS PGothic", sans-serif;
  font-weight: bold;
  color: #30c8d6;
  margin: 0;
  font-size: 2.4rem;
  &::selection {
    background: none;
  }
  ${media.lessThan("medium")`
    font-size: 1.6rem;
  `}
`;

const SubTitle = styled.p`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  margin: 0;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: -0.4px;
  &::selection {
    background: none;
  }
  ${media.lessThan("medium")`
    font-size: 0.6rem;
  `}
`;

const LoginLink = styled.a`
  color: #787878;
  font-size: 1rem;
  ${media.lessThan("medium")`
    font-size: 0.75rem;
  `}
`;

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  ${media.lessThan("medium")`
    justify-content: center;
  `}
`;

const Introduction = styled.div`
  width: 50%;
  margin: 40px 55px 0 0;
  ${media.lessThan("medium")`
    display: none;
  `}
`;

const DescriptionContainer = styled.div`
  line-height: 1.5;
`;

const FormContainer = styled.div`
  max-width: 360px;
  margin: 0 55px;
  padding: 24px;
  border: 1px solid #e6e6e6;
  background-color: white;
  border-radius: 4px;
  ${media.lessThan("medium")`
    width: 240px;
    margin: 0 8px 40px;
  `}
`;

const FormTitle = styled.h2`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  text-align: center;
  color: #2b546a;
  font-size: 1.85rem;
  line-height: 1.3;
  font-weight: bold;
  letter-spacing: 0.03em;
  padding: 25px 16px 0;
  margin-bottom: 30px;
  -webkit-font-smoothing: antialiased;
  ${media.lessThan("medium")`
    font-size: 1.5rem;
    padding: 25px 0 0;
  `}
`;

const Swiper = styled.div`
  outline: none;
`;

const InputContainer = styled.div`
  ${media.greaterThan("medium")`
    margin-left: 32px;
  `}
`;

const InputTitle = styled.h3`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 0.9rem;
  line-height: 1.8;
  letter-spacing: 0.04em;
  margin: 4px 0;
`;

const InputDescription = styled.h4`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 0.8rem;
  color: rgb(88, 118, 163);
  line-height: 1.8;
  letter-spacing: 0.04em;
  margin: 0 0 4px;
`;

const FormInput = styled.input`
  width: 100%;
  max-width: 280px;
  height: 31px;
  padding: 5px 10px;
  margin-bottom: 20px;
  vertical-align: middle;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 0.85rem;
  border-radius: 4px;
  border: 1px solid #e1e5e7;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  ${media.lessThan("medium")`
    width: 88%;
    max-width: 224px;
  `}
`;

const PasswordForm = styled.div`
  ${media.greaterThan("medium")`
    display: flex;
  `}
`;

const PassInput = styled(FormInput)`
  width: 300px;
  padding-right: 30px;
  ${media.lessThan("medium")`
    max-width: 190px;
    margin-bottom: 0;
  `}
`;

const Icon = styled.img<{ src: string }>`
  content: "";
  position: relative;
  top: -35px;
  left: 196px;
  width: 26px;
  height: 26px;
  color: #999;
  ${media.greaterThan("medium")`
    top: 8px;
    left: -40px;
  `}
`;

const SubmitBtn = styled.div`
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  line-height: 48px;
  width: 216px;
  margin: 16px auto;
  color: white;
  border: 1px solid #30c8d6;
  border-radius: 4px;
  background-color: #30c8d6;
`;

export default function SignUp({ history }: RouteComponentProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [isRevealPassword, setIsRevealPassword] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isRevealCheckPassword, setIsRevealCheckPassword] = useState<boolean>(
    false
  );
  const { setUser } = useContext(userContext);
  const formRef = useRef<Slick | null>();

  const goNext = () => {
    if (email !== "" && password !== "" && password === checkPassword)
      formRef.current!.slickNext();
  };

  const signUp = () => {
    if (
      email !== "" &&
      password !== "" &&
      userName !== "" &&
      birthDate !== ""
    ) {
      const userInfo: IUser = {
        ...defaultUserInfo,
        displayName: userName,
        email: email,
        birthDate: birthDate,
      };
      setUser(userInfo);
      createUser(userInfo, password, history);
    }
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setSlideIndex,
  };

  return (
    <div>
      <HeaderContainer>
        <TopContainer>
          <Title>ConDog</Title>
          <SubTitle>遊ぶように、学ぼう、どこよりも</SubTitle>
        </TopContainer>
        <LoginLink onClick={() => history.push("/signin")}>
          ログインはこちら
        </LoginLink>
      </HeaderContainer>
      <BodyContainer>
        <Introduction>
          <Heading1>コンピュータ研究部へようこそ！</Heading1>
          <DescriptionContainer>
            <Description>
              犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。
            </Description>
            <Description>
              犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。
            </Description>
            <Description>
              犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。犬可愛い。
            </Description>
          </DescriptionContainer>
        </Introduction>
        <div>
          <FormContainer>
            <FormTitle>コンピュータ研究部に入部する</FormTitle>

            <Slick
              ref={(slider) => (formRef.current = slider)}
              swipe={slideIndex === 1}
              {...settings}
            >
              <Swiper>
                <InputContainer>
                  <InputTitle>メールアドレス</InputTitle>
                  <InputDescription>
                    学校のメールアドレスは非推奨。
                  </InputDescription>
                  <FormInput
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    placeholder={"mail@conken.com"}
                    ng-model={"email"}
                    type={"email"}
                  />
                </InputContainer>

                <InputContainer>
                  <InputTitle>パスワード</InputTitle>
                  <InputDescription>8文字以上の半角英数記号</InputDescription>
                  <PasswordForm>
                    <PassInput
                      name={"password"}
                      value={password}
                      onChange={(e) => setPassword(e.currentTarget.value)}
                      ng-model={"password"}
                      type={isRevealPassword ? "text" : "password"}
                    />
                    <Icon
                      src={isRevealPassword ? Eyelogo : EyeOfflogo}
                      onClick={() => setIsRevealPassword(!isRevealPassword)}
                    />
                  </PasswordForm>
                </InputContainer>

                <InputContainer>
                  <InputTitle>確認用パスワード</InputTitle>
                  <PasswordForm>
                    <PassInput
                      name={"password"}
                      value={checkPassword}
                      onChange={(e) => setCheckPassword(e.currentTarget.value)}
                      ng-model={"password"}
                      type={isRevealCheckPassword ? "text" : "password"}
                    />
                    <Icon
                      src={isRevealCheckPassword ? Eyelogo : EyeOfflogo}
                      onClick={() =>
                        setIsRevealCheckPassword(!isRevealCheckPassword)
                      }
                    />
                  </PasswordForm>
                </InputContainer>
                <SubmitBtn onClick={() => goNext()}>次のフォームへ</SubmitBtn>
              </Swiper>
              <Swiper>
                <InputContainer>
                  <InputTitle>お名前</InputTitle>
                  <InputDescription>原則実名。例: 高専太郎</InputDescription>
                  <FormInput
                    name={"name"}
                    value={userName}
                    onChange={(e) => setUserName(e.currentTarget.value)}
                    placeholder={"高専太郎"}
                    type={"text"}
                  />
                </InputContainer>

                <InputContainer>
                  <InputTitle>生年月日</InputTitle>
                  <PasswordForm>
                    <FormInput
                      name={"barth-day"}
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.currentTarget.value)}
                      type={"date"}
                    />
                  </PasswordForm>
                </InputContainer>
                <SubmitBtn onClick={signUp}>入部する</SubmitBtn>
              </Swiper>
            </Slick>
          </FormContainer>
        </div>
      </BodyContainer>
    </div>
  );
}

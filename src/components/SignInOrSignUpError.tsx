import styled from "styled-components";
import media from "styled-media-query";

interface Props {
  signInOrSignUpError: string;
}

const ErrorMessage = styled.p`
  margin: 0 auto 32px;
  width: 100%;
  max-width: 300px;
  color: #f13c20;
  font-size: 10px;
  ${media.lessThan("medium")`
    width: 88%;
    max-width: 224px;
  `}
`;

export default function SignInOrSignUpError({ signInOrSignUpError }: Props) {
  return signInOrSignUpError === "" ? (
    <ErrorMessage></ErrorMessage>
  ) : signInOrSignUpError ===
    "There is no user record corresponding to this identifier. The user may have been deleted." ? (
    <ErrorMessage>
      メールアドレスは登録されていません。
      <br />
      ユーザーが削除されている可能性があります。
    </ErrorMessage>
  ) : signInOrSignUpError === "The email address is badly formatted." ? (
    <ErrorMessage>メールアドレスの形式が正しくありません。</ErrorMessage>
  ) : signInOrSignUpError ===
    "The email address is already in use by another account." ? (
    <ErrorMessage>
      メールアドレスはすでに別のアカウントで使用されています。
    </ErrorMessage>
  ) : signInOrSignUpError ===
    "The password is invalid or the user does not have a password." ? (
    <ErrorMessage>
      パスワードが無効であるか、ユーザーがパスワードを持っていません。
    </ErrorMessage>
  ) : signInOrSignUpError === "Password should be at least 6 characters" ? (
    <ErrorMessage>パスワードは6文字以上である必要があります。</ErrorMessage>
  ) : signInOrSignUpError ===
    "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later." ? (
    <ErrorMessage>
      多くのログイン試行の失敗により、このアカウントへのアクセスは一時的に無効になっています。
      <br />
      <br />
      パスワードをリセットしてすぐに復元することも、後で再試行することもできます。
    </ErrorMessage>
  ) : (
    <ErrorMessage>
      予期されないエラーが発生した可能性があります。ごめんね。
    </ErrorMessage>
  );
}

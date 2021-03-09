interface Props {
  signInOrSignUpError: string;
}

export default function SignInOrSignUpError({ signInOrSignUpError }: Props) {
  return signInOrSignUpError === "" ? (
    <p></p>
  ) : signInOrSignUpError ===
    "There is no user record corresponding to this identifier. The user may have been deleted." ? (
    <p>
      メールアドレスは登録されていません。ユーザーが削除されている可能性があります。
    </p>
  ) : signInOrSignUpError === "The email address is badly formatted." ? (
    <p>メールアドレスの形式が正しくありません。</p>
  ) : signInOrSignUpError ===
    "The email address is already in use by another account." ? (
    <p>メールアドレスはすでに別のアカウントで使用されています。</p>
  ) : signInOrSignUpError ===
    "The password is invalid or the user does not have a password." ? (
    <p>パスワードが無効であるか、ユーザーがパスワードを持っていません。</p>
  ) : signInOrSignUpError === "Password should be at least 6 characters" ? (
    <p>パスワードは6文字以上である必要があります。</p>
  ) : (
    <p>予期されないエラーが発生した可能性があります。ごめんね。</p>
  );
}

import { auth } from "../firebase";

export const sendPasswordResetEmail = async (
  email: string,
) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert(`パスワードリセット用のメールをこのメールアドレスに送信: ${email}`);
  } catch (error) {
    alert(`エラーが発生しました: ${JSON.stringify(error)}`);
  }
};

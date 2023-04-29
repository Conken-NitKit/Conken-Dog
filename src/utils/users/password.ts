import { auth } from "../firebase";

export const sendPasswordResetEmail = async () => {
  try {
    const result = prompt("メールアドレスを入力してください");
    if (!result) {
      throw Error("キャンセル");
    }

    await auth.sendPasswordResetEmail(result);
    alert(`パスワードリセット用のメールをこのメールアドレスに送信: ${result}`);
  } catch (error) {
    alert(`エラーが発生しました: ${JSON.stringify(error)}`);
  }
};

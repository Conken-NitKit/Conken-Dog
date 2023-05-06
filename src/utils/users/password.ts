import { auth } from "../firebase";

export const sendPasswordResetEmail = async () => {
  try {
    const result = prompt("メールアドレスを入力してください");
    if (!result) {
      alert('パスワードリセットがキャンセルされました')
      return;
    }
    await auth.sendPasswordResetEmail(result);
    alert(`パスワードリセット用のメールをこのメールアドレスに送信: ${result}`);
  } catch (error) {
    alert(`意図しないエラーが発生しました: ${JSON.stringify(error)}`);
  }
};

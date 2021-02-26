import { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const modalRoot = document.getElementById("modal-root")!;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 6px;
`;

const FormHeader = styled.div`
  padding: 0 16px;
  text-align: center;
  border: 1px solid #f2f2f2;
  border-radius: 6px 6px 0 0;
`;

const FormTitle = styled.p`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 1.3rem;
  color: rgb(43, 84, 106);
  line-height: 1.5;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 64px 0;
`;

export const InputTitle = styled.h2`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 1.1rem;
  color: rgb(43, 84, 106);
  line-height: 1.5;
  letter-spacing: 0.04em;
  width: 88px;
  text-align: right;
`;

const FormInput = styled.input`
  width: 88vw;
  max-width: 330px;
  height: 31px;
  padding: 5px 10px;
  margin-left: 16px;
  vertical-align: middle;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 0.85rem;
  border-radius: 4px;
  outline: none;
  border: 1px solid #e1e5e7;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const FormFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 24px;
  padding: 12px 20px;
  border-top: 1px solid #f2f2f2;
  border-radius: 0 0 6px 6px;
`;

const CanncellBtn = styled.div`
  background-color: white;
  border: 1px solid #f2f2f2;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 16px;
`;

const SubmitBtn = styled.div<{ canClick: boolean }>`
  color: ${(props) => (props.canClick ? "white" : "#f2f2f2")};
  background-color: ${(props) => (props.canClick ? "#30c8d6" : "#d0d0d0")};
  border: 1px solid ${(props) => (props.canClick ? "#30c8d6" : "#f2f2f2")};
  cursor: pointer;
  margin-left: 24px;
  padding: 8px 16px;
  border-radius: 4px;
`;

interface Props {
  close: () => void;
}

export const FeedModal = ({ close }: Props) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const submit = () => {
    if (title !== "" && link !== "") close();
  };

  return ReactDOM.createPortal(
    <Container>
      <FormContainer>
        <FormHeader>
          <FormTitle>ナレッジの投稿</FormTitle>
        </FormHeader>
        <InputContainer>
          <InputTitle>タイトル: </InputTitle>
          <FormInput
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>リンク: </InputTitle>
          <FormInput
            value={link}
            onChange={(e) => setLink(e.currentTarget.value)}
          />
        </InputContainer>
        <FormFooter>
          <CanncellBtn onClick={close}>キャンセル</CanncellBtn>
          <SubmitBtn onClick={submit} canClick={title !== "" && link !== ""}>
            投稿
          </SubmitBtn>
        </FormFooter>
      </FormContainer>
    </Container>,
    modalRoot
  );
};

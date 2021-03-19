import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import media from "styled-media-query";
import { knowledgesContext } from "../contexts/knowledgesContext";
import { userContext } from "../contexts/userContext";
import { fetchKnowledges } from "../utils/knowledge/fetchknowledge";
import { postKnowledge } from "../utils/knowledge/postKnowledge";

const modalRoot = document.getElementById("modal-root")!;

const Container = styled.div<{ isOpen: boolean }>`
  z-index: 4;
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100vh")};
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  transition-delay: 0.1s;
`;

const FormContainer = styled.div<{ isOpen: boolean }>`
  bottom: ${({ isOpen }) => (isOpen ? "0" : "-100vh")};
  left: 1vw;
  height: 98vh;
  width: 98vw;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.4);
  border-radius: 16px 16px 0 0;
  position: fixed;
  text-align: center;
  flex-wrap: wrap;
  transition: all 0.3s;
  transition-delay: 0.1s;
  background: white;
  z-index: 2;
`;

const FormHeader = styled.div`
  padding: 0 16px;
  text-align: center;
  border: 1px solid #f2f2f2;
  border-radius: 6px 6px 0 0;
  ${media.lessThan("medium")`
    height: 74px;
  `}
`;

const FormTitle = styled.p`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 1.3rem;
  color: rgb(43, 84, 106);
  line-height: 1.5;
  ${media.lessThan("medium")`
    font-size: 21px;
  `}
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 64px 0;
  height: 20%;
  ${media.lessThan("medium")`
    height: 78px;
    margin: 24px auto 0 auto;
  `}
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
  color: rgb(43, 84, 106);
  font-size: 0.85rem;
  border-radius: 4px;
  outline: none;
  border: 1px solid #e1e5e7;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  ${media.lessThan("medium")`
    width: 145px;
  `}
`;

const FormFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 24px;
  padding: 12px 20px;
  border-top: 1px solid #f2f2f2;
  border-radius: 0 0 6px 6px;
  height: 23%;
`;

const CanncellBtn = styled.div`
  background-color: white;
  border: 1px solid #f2f2f2;
  color: rgb(43, 84, 106);
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
  isOpen: boolean;
  close: () => void;
}

export const SlideKnowledgeModal = ({ isOpen, close }: Props) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");
  const { user } = useContext(userContext);
  const { setKnowledges } = useContext(knowledgesContext);

  const submit = async () => {
    if (title === "" || link === "") return;
    postKnowledge(title, link, tags.split(" "), user.uid, user.displayName);
    setKnowledges(await fetchKnowledges());
    close();
  };

  return ReactDOM.createPortal(
    <Container isOpen={isOpen}>
      <FormContainer isOpen={isOpen}>
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
        <InputContainer>
          <InputTitle>タグ: </InputTitle>
          <FormInput
            value={tags}
            onChange={(e) => setTags(e.currentTarget.value)}
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

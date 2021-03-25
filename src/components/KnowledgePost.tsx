import styled from "styled-components";
import media from "styled-media-query";
import PostLogo from "../assets/img/icons/create-outline.svg";

import { useState } from "react";
import { SlideKnowledgeModal } from "../components/SlideKnowledgeModal";

const PostImg = styled.img`
  margin: 8px;

  width: 40px;
  height: 40px;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;

const PostImgBackground = styled.div`
  display: box;

  z-index: 2;
  position: fixed;

  top: 75%;
  left: 80%;

  border-radius: 50%;

  box-shadow: 0 1px 8px -2px rgba(0, 0, 0, 0.4);

  width: 56px;
  height: 56px;

  background-color: #0099ff;

  &:active {
    background-color: rgba(0, 153, 255, 0.4);
    transition: all 0.3s;
  }

  ${media.greaterThan("medium")`
  display: none;
  `}
`;

export default function KnowledgePost() {
  const [isOpenKnowledgeModal, setIsOpenKnowledgeModal] = useState(false);

  return (
    <div>
      <PostImgBackground
        onClick={() => {
          setIsOpenKnowledgeModal(true);
        }}
      >
        <PostImg src={PostLogo} />
      </PostImgBackground>

      <SlideKnowledgeModal
        isOpen={isOpenKnowledgeModal}
        close={() => setIsOpenKnowledgeModal(false)}
      />
    </div>
  );
}

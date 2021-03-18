import styled from "styled-components";
import media from "styled-media-query";
import PostLogo from "../assets/img/icons/create-outline.svg";

import { useState } from "react";
import { KnowledgeModal } from "../components/KnowledgeModal";

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

  ${media.greaterThan("medium")`
  display: none;
  `}
`;

export default function KnowledgePost() {
  const [isOpenKnowledgeModal, setIsOpenKnowledgeModal] = useState(false);

  return (
    <div>
      <PostImgBackground>
        <PostImg
          src={PostLogo}
          onClick={() => {
            setIsOpenKnowledgeModal(true);
          }}
        />
      </PostImgBackground>

      {isOpenKnowledgeModal && (
        <KnowledgeModal close={() => setIsOpenKnowledgeModal(false)} />
      )}
    </div>
  );
}

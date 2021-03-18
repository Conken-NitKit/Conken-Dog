import styled from "styled-components";
import media from "styled-media-query";
import PostLogo from "../assets/img/icons/create-outline.svg";

import { useState } from "react";
import { KnowledgeModal } from "../components/KnowledgeModal";

const PostImg = styled.img`
  z-index: 2;
  position: fixed;

  top: 100px;

  width: 28px;
  height: 28px;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export default function KnowledgePost() {
  const [isOpenKnowledgeModal, setIsOpenKnowledgeModal] = useState(false);

  return (
    <div>
      <PostImg
        src={PostLogo}
        onClick={() => {
          setIsOpenKnowledgeModal(true);
        }}
      />

      {isOpenKnowledgeModal && (
        <KnowledgeModal close={() => setIsOpenKnowledgeModal(false)} />
      )}
    </div>
  );
}

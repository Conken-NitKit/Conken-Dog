import styled, { keyframes } from "styled-components";
import partitionImg from "../../assets/img/landing/partition-dotline.png";

const dotlineSp = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100vw);
  }
`;

export const Partition = styled.div`
  position: relative;
  width: 200vw;
  height: 16px;
  background: url(${partitionImg}) repeat-x top center/96px 16px;
  animation: ${dotlineSp} 320s linear infinite;
`;

import styled from "styled-components";

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;

  position: absolute;

  z-index: 4;

  top: 0px;
  right: 0;

  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "100vw" : "0vw")};

  background-color: ${({ isOpen }) =>
    isOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};

  transition: ${({ isOpen }) => (isOpen ? "width 0s " : "width 0s 0.3s")};
`;

interface Props {
  isOpen: boolean;
}

export function ModalContainer({ isOpen }: Props) {
  return <Container isOpen={isOpen}></Container>;
}

import styled from "styled-components";

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;

  position: absolute;

  z-index: 4;

  top: 0;
  left: 0;

  height: ${({ isOpen }) => (isOpen ? "100vh" : "0vh")};
  width: 100vw;

  background-color: ${({ isOpen }) =>
    isOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};

  transition: color 0s 0.1s;
`;

interface Props {
  isOpen: boolean;
}

export function ModalContainer({ isOpen }: Props) {
  console.log(isOpen);
  return <Container isOpen={isOpen}></Container>;
}

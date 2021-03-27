import styled from "styled-components";

const Container = styled.div<{ Open: boolean }>`
  position: absolute;

  z-index: 4;

  top: 0px;
  right: ${({ Open }) => (Open ? "0" : "-100vw")};

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div<{ Open: boolean }>`
  position: absolute;

  z-index: 6;

  border-radius: 16px 0 0 16px;

  top: 0px;
  right: ${({ Open }) => (Open ? "0" : "-100vw")};

  height: 100vh;
  width: 95vw;

  background-color: white;

  transition: all 0.3s;
`;

interface Props {
  Open: boolean;
}

export default function AccountElementEditModal({ Open }: Props) {
  console.log(Open);

  return (
    <Container Open={Open}>
      <Modal Open={Open}></Modal>
    </Container>
  );
}

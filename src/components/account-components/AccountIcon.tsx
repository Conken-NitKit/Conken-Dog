import styled from "styled-components";

import TestIcon from "../../assets/img/icons/test-icon.png";

const Container = styled.div`
  display: flex;

  position: relative;

  margin-top: 4vh;
  margin-bottom: 8vh;
  margin-left: 22vw;

  border-radius: 50%;

  height: 44vw;
  width: 44vw;

  justify-content: center;

  overflow: hidden;
`;

const Icon = styled.img`
  height: 44vw;
  width: 44vw;
`;

const EditButton = styled.button`
  position: absolute;

  border: none;

  padding: 0;

  bottom: 0;

  height: 6.5vw;
  width: 31vw;

  outline: none;

  background-color: rgba(48, 200, 214, 1);
`;

export default function AccountIcon() {
  return (
    <Container>
      <Icon src={TestIcon} />
      <EditButton />
    </Container>
  );
}

import styled from "styled-components";

import TestIcon from "../../assets/img/icons/test-icon.png";

const Container = styled.div`
  margin-top: 4vh;
  margin-bottom: 8vh;
  margin-left: 22vw;

  border-radius: 50%;

  height: 44vw;
  width: 44vw;

  overflow: hidden;
`;

const Icon = styled.img`
  height: 44vw;
  width: 44vw;
`;

export default function AccountIcon() {
  return (
    <Container>
      <Icon src={TestIcon} />
    </Container>
  );
}

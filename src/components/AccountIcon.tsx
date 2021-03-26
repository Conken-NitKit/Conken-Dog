import styled from "styled-components";

import TestIcon from "../assets/img/icons/test-icon.png";

const Icon = styled.img`
  margin-left: 22.5vw;

  border-radius: 50%;

  width: 50%;
`;

export default function AccountIcon() {
  return <Icon src={TestIcon} />;
}

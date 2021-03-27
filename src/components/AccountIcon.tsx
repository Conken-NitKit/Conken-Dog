import styled from "styled-components";

import TestIcon from "../assets/img/icons/test-icon.png";

const Icon = styled.img`
  margin-top: 4vh;
  margin-bottom: 8vh;
  margin-left: 25%;

  border-radius: 50%;

  width: 50%;
`;

export default function AccountIcon() {
  return <Icon src={TestIcon} />;
}

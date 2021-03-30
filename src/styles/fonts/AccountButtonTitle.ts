import styled from "styled-components";

export const AccountButtonTitle = styled.h2`
  margin: 0;

  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 3vh;
  color: rgba(43, 84, 106, 0.6);
  &:active {
    color: rgba(43, 84, 106, 0.4);
  }
  letter-spacing: 0.0032vh;

  transition: color 0.1s;
`;

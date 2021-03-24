import styled from "styled-components";

const Card = styled.div`
  display: flex;
  display: -moz-flex;
  display: --webkit-flex;
  display: -o-flex;
  display: --ms-flex;

  margin: 0 2% 10px;

  border: 1px solid rgba(0, 0, 0, 0.2);

  border-radius: 5px;

  height: 10%;

  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);
`;

const ElementNameSpace = styled.a`
  display: flex;
  display: -moz-flex;
  display: --webkit-flex;
  display: -o-flex;
  display: --ms-flex;

  margin: 0;

  padding: 0 5%;

  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  height: 100%;
  width: 59px;

  color: rgb(43, 84, 106);

  font-size: 20px;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;

  align-items: center;

  background-color: rgba(48, 200, 214, 1);
`;

const ElementSpace = styled.a`
  display: flex;
  display: -moz-flex;
  display: --webkit-flex;
  display: -o-flex;
  display: --ms-flex;

  padding-left: 5%;

  height: 100%;

  font-size: 20px;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;

  align-items: center;
`;

interface Props {
  ElementName: string;
  Element: string;
}

export default function AccountElementsCard({ ElementName, Element }: Props) {
  return (
    <Card>
      <ElementNameSpace>{ElementName}</ElementNameSpace>
      <ElementSpace>baka</ElementSpace>
    </Card>
  );
}

import styled from "styled-components";

const Card = styled.div`
  position: relative;

  display: flex;

  margin: 0 2% 10px;

  border: 1px solid black;
  border-radius: 5px;

  height: 8%;
`;

const ElementNameSpace = styled.a`
  position: absolute;

  margin: 5% 0;
`;

interface Props {
  ElementName: string;
  Element: string;
}

export default function AccountElementsCard({ ElementName, Element }: Props) {
  return (
    <Card>
      <ElementNameSpace>baka</ElementNameSpace>
    </Card>
  );
}

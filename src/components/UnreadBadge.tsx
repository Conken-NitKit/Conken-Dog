import styled from "styled-components";

interface Props {
  Count: number;
}

const Badge = styled.div`
  position: absolute;

  display: inline-block;

  margin: 0px;

  top: -10%;
  left: 60%;

  border-radius: 50%;

  padding: 0px;

  width: 19px;
  height: 19px;

  background-color: red;

  text-align: center;

  line-height: 20px;

  color: white;
`;

export default function UnreadBadge({ Count }: Props) {
  return <div>{Count !== 0 && <Badge>{Count}</Badge>}</div>;
}

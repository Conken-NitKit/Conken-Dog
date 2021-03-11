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

  border-radius: 10px;

  min-width: 20px;
  height: 20px;

  background-color: red;

  text-align: center;

  line-height: 20px;

  color: white;

  font-size: 14px;
`;

export default function UnreadBadge({ Count }: Props) {
  return <div>{Count !== 0 && <Badge>{Count}</Badge>}</div>;
}

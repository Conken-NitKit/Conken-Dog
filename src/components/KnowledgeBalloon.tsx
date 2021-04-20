import styled from "styled-components";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";

const Wrapper = styled.div`
  position: absolute;
  z-index: 5000;
`;

const Container = styled.div`
  position: absolute;
  top: 28px;
  left: -16px;
  width: 104px;
  padding: 8px 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(32, 32, 32, 0.25), 0 0 1px rgba(32, 32, 32, 0.35);
  &::before {
    content: " ";
    position: absolute;
    top: -12px;
    right: 40%;
    z-index: 1;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-right: 1px solid rgba(34, 34, 34, 0.1);
    border-bottom: 1px solid rgba(34, 34, 34, 0.1);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
`;

const MenuPopover = styled.ul`
  position: relative;
  line-height: 1.5;
  margin: 8px auto;
  padding: 0;
`;

const MenuItem = styled.li`
  color: #454545;
  text-align: center;
  list-style: none;
`;

interface Props {
  knowledgeId: string;
  userList: string[];
}

export default function KnonwledgeBalloon({ knowledgeId, userList }: Props) {
  return (
    <Wrapper>
      <Container>
        <MenuPopover>
          {userList.map((userName, index) => (
            <MenuItem key={`${knowledgeId}/${index}`}>{userName}</MenuItem>
          ))}
        </MenuPopover>
      </Container>
    </Wrapper>
  );
}

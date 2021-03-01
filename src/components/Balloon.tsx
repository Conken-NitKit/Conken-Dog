import styled from "styled-components";
import * as H from "history";

import { signOut } from "../utils/users/signOut";

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  min-width: 160px;
  padding: 8px 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(32, 32, 32, 0.25), 0 0 1px rgba(32, 32, 32, 0.35);
  transform: translateX(-50%);
  z-index: 5000;
  &::before {
    content: " ";
    position: absolute;
    top: -12px;
    right: 48%;
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
  width: 240px;
`;

const MenuItem = styled.li`
  list-style: none;
`;

const UserLink = styled.a`
  font: 100%/1.5 "Lato", "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  flex-grow: 2;
  cursor: pointer;
`;

const UserName = styled.span`
  display: block;
  color: #2b546a;
  font-size: 1.1rem;
  font-weight: bold;
  word-break: break-all;
`;

const Summary = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #787c7b;
  word-break: break-all;
`;

const ListLink = styled.a`
  display: block;
  margin-top: 24px;
  color: #2b546a;
  cursor: pointer;
`;

const BalloonBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2500;
`;

interface Props {
  close: () => void;
  history: H.History;
}

export default function Ballooon({ close, history }: Props) {
  return (
    <Wrapper>
      <BalloonBackground onClick={close} />
      <Container>
        <MenuPopover>
          <MenuItem>
            <UserLink>
              <UserName>窪田秀哉</UserName>
              <Summary>自分のプロフィールを表示</Summary>
            </UserLink>
          </MenuItem>
          <MenuItem>
            <ListLink>いいねしたナレッジ</ListLink>
          </MenuItem>
          <MenuItem>
            <ListLink>ブックマークしたナレッジ</ListLink>
          </MenuItem>
          <MenuItem>
            <ListLink onClick={() => signOut(history)}>
              サインアウトする
            </ListLink>
          </MenuItem>
        </MenuPopover>
      </Container>
    </Wrapper>
  );
}

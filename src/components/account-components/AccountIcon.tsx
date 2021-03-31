import styled from "styled-components";

import TestIconSrc from "../../assets/img/icons/test-icon.png";
import IconIconSrc from "../../assets/img/icons/icon-icon.svg";
import DefaultIconSrc from "../../assets/img/icons/default-icon.svg";
import EditButtonSrc from "../../assets/img/icons/up-edit-button.svg";

const Container = styled.div`
  display: flex;

  margin-top: 4vh;
  margin-bottom: 8vh;
  margin-left: 11vw;

  border: 1px solid gainsboro;
  border-radius: 22vw;

  width: 55vw;

  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);
`;

const IconIconContainer = styled.div`
  display: flex;

  border-radius: 22vw 0 0 22vw;

  width: 33vw;

  background-color: rgba(48, 200, 214, 1);

  align-items: center;
`;

const IconIcon = styled.img`
  height: 11vw;
  width: 11vw;
`;

const IconContainer = styled.div`
  display: flex;

  position: relative;

  margin-left: -22vw;

  border-left: 1px solid gainsboro;
  border-radius: 22vw;

  height: 44vw;
  width: 44vw;

  justify-content: center;

  overflow: hidden;

  background-color: white;
`;

const Icon = styled.img`
  height: 44vw;
  width: 44vw;
`;

const EditButton = styled.button`
  position: absolute;

  border: none;
  border-top: 1px solid gainsboro;

  padding: 0;

  bottom: 0;

  height: 6.5vw;
  width: 31vw;

  outline: none;

  background-color: white;
`;

export default function AccountIconCard() {
  return (
    <Container>
      <IconIconContainer>
        <IconIcon src={IconIconSrc} />
      </IconIconContainer>
      <IconContainer>
        <Icon src={DefaultIconSrc} />
        <EditButton />
      </IconContainer>
    </Container>
  );
}

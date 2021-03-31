import { useContext } from "react";
import styled from "styled-components";
import EditButtonImage from "../../assets/img/icons/right-edit-button.svg";
import { AccountElementContext } from "../../contexts/AcountElementContext";

const Card = styled.div<{ isOpen: boolean }>`
  display: flex;
  display: -moz-flex;
  display: --webkit-flex;
  display: -o-flex;
  display: --ms-flex;

  margin: 0 2% 10px;

  border: 1px solid gainsboro;

  border-radius: 5px;

  height: 10%;

  align-items: center;

  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);

  transition: background-color 0.1s;
`;

const ElementNameSpace = styled.a`
  display: flex;
  display: -moz-flex;
  display: --webkit-flex;
  display: -o-flex;
  display: --ms-flex;

  margin: 0;

  padding-left: 5%;

  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  height: 100%;
  width: 73px;

  color: rgb(43, 84, 106);

  font-size: 20px;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;

  align-items: center;

  background-color: rgba(48, 200, 214, 1);
`;

const ElementSpace = styled.div<{ isOpen: boolean }>`
  display: flex;
  display: -moz-flex;
  display: --webkit-flex;
  display: -o-flex;
  display: --ms-flex;

  margin-left: 5%;

  border-radius: 4px;

  width: calc(95% - 125px);

  font-size: 20px;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;

  align-items: center;

  white-space: nowrap;

  overflow: hidden;

  box-shadow: -10px 0 5px -5px rgba(0, 0, 0, 0.2) inset;
`;

const EditButtonSpace = styled.div<{ isOpen: boolean }>`
  display: flex;
  display: -moz-flex;
  display: --webkit-flex;
  display: -o-flex;
  display: --ms-flex;

  margin: 0 0 0 auto;

  width: 40px;

  align-items: center;
  justify-content: center;
`;

const EditButton = styled.img`
  height: 20px;
  width: 20px;
`;

interface Props {
  Element: string;
}

export default function AccountElementsCard({ Element }: Props) {
  const { ElementName, isModalOpen, setIsModalOpen } = useContext(
    AccountElementContext
  );

  return (
    <Card isOpen={isModalOpen}>
      <ElementNameSpace>{ElementName}</ElementNameSpace>

      <ElementSpace
        onClick={() => {
          setIsModalOpen(true);
        }}
        isOpen={isModalOpen}
      >
        {Element}
      </ElementSpace>

      <EditButtonSpace
        onClick={() => {
          setIsModalOpen(true);
        }}
        isOpen={isModalOpen}
      >
        <EditButton src={EditButtonImage} />
      </EditButtonSpace>
    </Card>
  );
}

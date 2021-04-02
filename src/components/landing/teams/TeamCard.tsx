import styled from "styled-components";

const Card = styled.div`
  margin: 120px 0 0 44px;

  border-radius: 14px;

  height: 245px;
  width: 180px;

  background-color: white;
`;

const Circle = styled.div`
  margin: -68px 22.5px;

  border-radius: 50%;

  height: 135px;
  width: 135px;

  background-color: white;
`;

const Title = styled.h3<{ Color: string }>`
  display: box;

  margin: 45px 0 0 0;

  font-size: 30px;
  font-weight: 900;

  line-height: 30px;

  color: ${({ Color }) => Color};
  text-align: center;
`;

const Contents = styled.ul`
  margin: 25px 0 0 30px;

  padding: 0;

  font-weight: 500;
  font-size: 15px;

  line-height: 20px;

  list-style: none;
`;

interface Props {
  CardTitle: string;

  Color: string;

  CardContents: string[];
}

export const TeamCard = ({ CardTitle, Color, CardContents }: Props) => {
  return (
    <Card>
      <Circle />
      <Title Color={Color}>{CardTitle}</Title>
      <Contents>
        {CardContents.map((element) => {
          return <li>{element}</li>;
        })}
      </Contents>
    </Card>
  );
};

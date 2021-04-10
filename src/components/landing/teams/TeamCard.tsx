import styled from "styled-components";
import media from "styled-media-query";

const Card = styled.div`
  margin: 120px 22px 0;
  border-radius: 14px;

  height: 245px;
  width: 180px;
  background-color: white;

  ${media.between("medium", "large")`
	  margin: 95px 17px 0;
	  border-radius: 11px;
    height: 195px;
	  width: 145px;
  `};

  ${media.lessThan("medium")`
		margin: 14vw 1.3vw 0;
		border-radius: 3vw;
	  height: 28vw;
	  width: 42vw;
	`};
`;

const Circle = styled.div`
  margin: -68px 22.5px;
  border-radius: 50%;
  height: 135px;
  width: 135px;
  background-color: white;

  ${media.between("medium", "large")`
	  margin: -56px 20px;
	  height: 105px;
    width: 105px;
  `};

  ${media.lessThan("medium")`
		margin: -11vw 9.5vw;
    height: 21vw;
		width: 21vw;
  `};
`;

const Title = styled.h3<{ Color: string }>`
  display: box;
  margin: 45px 0 0 0;

  font-size: 30px;
  font-weight: 800;
  line-height: 30px;
  color: ${({ Color }) => Color};
  text-align: center;

  ${media.between("medium", "large")`
	  margin-top: 35px;

	  font-size: 25px;
	  font-weight: 700;
	  line-height: 25px;
  `}

  ${media.lessThan("medium")`
    margin-top: 2vw;
		font-size: 4vw;
		font-weight: 200;
		line-height: 5vw;
  `};
`;

const Contents = styled.ul`
  margin: 25px 0 0 30px;
  padding: 0;

  font-size: 15px;
  font-weight: 400;
  color: #444444;
  line-height: 20px;
  list-style: none;

  ${media.between("medium", "large")`
	  margin: 20px 0 0 25px;
	  font-size: 10px;
	  font-weight: 300;
	  line-height: 15px;
  `};

  ${media.lessThan("medium")`
	  margin: 3vw 0 0 9vw;
		font-size: 2vw;
		font-weight: 100;
		line-height: 3vw;
  `};
`;

interface Props {
  CardTitle: string;
  Color: string;
  CardContents: string[];
  SecondLine: boolean;
}

export const TeamCard = ({
  CardTitle,

  Color,

  CardContents,

  SecondLine,
}: Props) => {
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

import { Container } from "./Container";

interface Props {
  name: string;
  thumbnail: string;
  description1: string;
  description2: string;
}

export const Team = ({
  name,
  thumbnail,
  description1,
  description2,
}: Props) => {
  return (
    <Container>
      <img src={thumbnail} />
      <div>
        <h2>{`# ${name}`}</h2>
        <p>{description1}</p>
        <p>{description2}</p>
      </div>
    </Container>
  );
};

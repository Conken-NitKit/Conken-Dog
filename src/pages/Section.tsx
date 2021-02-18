import { ISection } from "../assets/sections";
import { Container } from "../layouts/Container";
import { Description } from "../styles/fonts/Description";
import { Heading1 } from "../styles/fonts/Heading1";

interface Props {
  value: ISection;
}

export default function Section({ value }: Props) {
  const generateMinute = () =>
    value.contentsList.reduce((sum, cur): number => sum + cur.requiredTime, 0);

  return (
    <Container>
      <Heading1>{value.title}</Heading1>
      <Description>{value.description}</Description>
      <p>
        {generateMinute() >= 60 && ` ${Math.floor(generateMinute() / 60)}時間`}
        {generateMinute() % 60 === 0 && ` ${generateMinute() % 60}分`}
        <br />
        <span>修了時間</span>
      </p>
      {value.contentsList.map((content, i) => (
        <div key={value.title + i.toString()}>
          <input type="checkbox" />
          <p>
            <a href={content.link}>{content.title}</a> |
            {content.requiredTime >= 60 &&
              ` ${Math.floor(content.requiredTime / 60)}時間`}
            {content.requiredTime % 60 !== 0 &&
              ` ${Math.floor(content.requiredTime % 60)}分`}
          </p>
        </div>
      ))}
    </Container>
  );
}

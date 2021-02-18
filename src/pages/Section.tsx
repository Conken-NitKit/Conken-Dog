import { ISection } from "../assets/sections";

interface Props {
  value: ISection;
}

export default function Section({ value }: Props) {
  const generateMinute = () =>
    value.contentsList.reduce((sum, cur): number => sum + cur.requiredTime, 0);

  return (
    <div>
      <h1>{value.title}</h1>
      <h3>{value.description}</h3>
      <p>
        {`${Math.floor(generateMinute() / 60)}時間 ${generateMinute() % 60}分`}
        <br />
        <span>終了時間</span>
      </p>
      {value.contentsList.map((content, i) => (
        <div key={value.title + i.toString()}>
          <input type="checkbox" />
          <p>
            <a href={content.link}>{content.title}</a> |
            {content.requiredTime >= 60 &&
              ` ${Math.floor(content.requiredTime / 60)}時間`}
            {` ${Math.floor(content.requiredTime % 60)}分`}
          </p>
        </div>
      ))}
    </div>
  );
}

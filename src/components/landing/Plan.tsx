import { Container } from "./Container";

interface Props {
  heading1: string;
  heading2: string;
  plan1: string;
  plan2: string;
  commonTitle: string;
  common: string;
  contentTitle1: string;
  content1: string;
  contentTitle2: string;
  content2: string;
}

export const Plan = ({
  heading1,
  heading2,
  plan1,
  plan2,
  commonTitle,
  common,
  contentTitle1,
  content1,
  contentTitle2,
  content2,
}: Props) => {
  return (
    <Container>
      <h2>選べる育成プラン</h2>
      <div>
         <p>{heading1}</p>
         <h3>{plan1}</h3>
         <h4>{commonTitle}</h4>
         <p>{common}</p>
         <h4>{contentTitle1}</h4>
         <p>{content1}</p>
      </div>
      <div>
         <p>{heading2}</p>
         <h3>{plan2}</h3>
         <h4>{commonTitle}</h4>
         <p>{common}</p>
         <h4>{contentTitle2}</h4>
         <p>{content2}</p>
      </div>
    </Container>
  );
};

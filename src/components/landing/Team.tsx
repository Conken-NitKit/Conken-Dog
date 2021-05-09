import { Container } from "./Container";
import styled from "styled-components";
import media from "styled-media-query";

interface Props {
  name: string;
  thumbnail: string;
  description1: string;
  description2: string;
}

const TeamContainer = styled(Container)`
  margin: 24px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${media.lessThan("medium")`
    margin: 12px auto;
    padding: 12px 0; 
  `};
`

const SentenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  ${media.lessThan("medium")`
    width: 200px;
  `};
`

const TeamName = styled.h2`
  color: #55DDDD;
  font-family: Roboto;
  font-weight: 900;
  font-size: 60px;
  margin: 6px 6px 0 6px;
  padding-left: 8px;
  ${media.lessThan("medium")`
    font-size: 24px;
    padding-left: 2px;
  `};
`

const TeamImg = styled.img`
  width: 400px;
  margin: 18px 24px 12px 24px;
  border-radius: 12px;
  ${media.lessThan("medium")`
    width: 180px;
    height: auto;
    margin: 28px 2px;
  `};
`

const Description = styled.p`
  color: #444444;
  font-family: Roboto;
  margin: 0 4px 8px 4px;
  padding-left: 28px;
  font-size: 20px;
  ${media.lessThan("medium")`
    font-size: 11px;
    padding-left: 14px;
  `};
`

export const Team = ({
  name,
  thumbnail,
  description1,
  description2,
}: Props) => {
  return (
    <TeamContainer>
      <TeamImg src={thumbnail} />
      <SentenceContainer>
        <TeamName>{`# ${name}`}</TeamName>
        <Description>{description1}</Description>
        <Description>{description2}</Description>        
      </SentenceContainer>
    </TeamContainer>
  );
};

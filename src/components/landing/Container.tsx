import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  margin: 0 auto;
  padding: 15px;

  ${media.lessThan("medium")`
    width: 88%;
  `}

  ${media.between("medium", "large")`
    width: 750px;
  `}

  ${media.greaterThan("large")`
    width: 940px;
  `}
`;

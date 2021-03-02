import styled from "styled-components";
import media from "styled-media-query";

export const ResponsiveWrapper = styled.div`
  position: relative;
  ${media.lessThan("medium")`
    height: calc((var(--vh, 1vh) * 100) - 56px);
    overflow-y: scroll;
  `}
`;

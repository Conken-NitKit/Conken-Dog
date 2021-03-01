import styled from "styled-components";
import media from "styled-media-query";

export const ResponsiveWrapper = styled.div`
  position: relative;
  ${media.lessThan("medium")`
    height: calc(100vh - 56px);
    overflow-y: scroll;
  `}
`;

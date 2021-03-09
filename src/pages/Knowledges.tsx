import NavigationBar from "../components/NavigationBar";
import { ResponsiveWrapper } from "../layouts/ResponsiveWrapper";
import KnowledgeContainer from "../components/KnowledgeContainer";
import styled from "styled-components";

const KnowledgesWrapper = styled.div`
  margin: 20px;
`;

export default function Knowledges() {
  return (
    <>
      <ResponsiveWrapper>
        <KnowledgesWrapper>
          <KnowledgeContainer />
        </KnowledgesWrapper>
      </ResponsiveWrapper>
      <NavigationBar />
    </>
  );
}

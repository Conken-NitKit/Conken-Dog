import { useState } from "react";
import styled from "styled-components";

import { IContent } from "../assets/sections";
import { Description } from "../styles/fonts/Description";
import { Heading1 } from "../styles/fonts/Heading1";

const ContentsList = styled.ul`
  background: #fff;
  border: solid 2px #f3eded;
  padding: 30px;
  border-radius: 6px;
`;

const ContentItem = styled.li`
  list-style: none;
  border-bottom: solid 1px #f3eded;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const ContentsLink = styled.a`
  color: rgb(88, 118, 163);
  padding-left: 8px;
  text-decoration: none;
`;

const DefaultCheckBox = styled.input`
  display: none;
`;

const CheckBox = styled.label<{ isChecked: boolean }>`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  margin-top: 16px;
  padding: 14px 14px;
  position: relative;
  width: auto;

  &::before {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    content: "";
    display: block;
    height: 16px;
    left: 5px;
    margin-top: -8px;
    position: absolute;
    top: 50%;
    width: 16px;
    ${(props) => props.isChecked && "border-color: #666;"}
  }
  &::after {
    border-right: 6px solid #fedd1e;
    border-bottom: 3px solid #fedd1e;
    content: "";
    display: block;
    height: 20px;
    left: 7px;
    margin-top: -16px;
    opacity: ${(props) => (props.isChecked ? 1 : 0)};
    position: absolute;
    top: 50%;
    transform: rotate(45deg) translate3d(0, 2px, 0)
      scale3d(${(props) => (props.isChecked ? "1, 1" : "0.7, 0.7")}, 1);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    width: 9px;
  }
`;

interface Props {
  content: IContent;
}

export const SectionItem = ({ content }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <ContentItem>
      <DefaultCheckBox type="checkbox" id={content.title} onClick={() => setIsChecked(!isChecked)}/>
      <CheckBox htmlFor={content.title} isChecked={isChecked}/>
      <Description>
        <ContentsLink href={content.link}>
          {content.title} |
          {content.requiredTime >= 60 &&
            `  ${Math.floor(content.requiredTime / 60)}時間`}
          {content.requiredTime % 60 !== 0 &&
            `  ${Math.floor(content.requiredTime % 60)}分`}
        </ContentsLink>
      </Description>
    </ContentItem>
  );
};

import styled from "styled-components";

import { IContent } from "../../assets/sections";
import { IUser } from "../../interfaces/User";

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
  padding: 14px 20px;
  position: relative;
  width: auto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

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
    border-right: 6px solid red;
    border-bottom: 3px solid red;
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

const ContentItemDescription = styled.div`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-size: 0.9rem;
  color: rgb(88, 118, 163);
  line-height: 1.8;
  letter-spacing: 0.04em;
  margin-bottom: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const MediaTypeTag = styled.span`
  line-height: 28px;
  font-size: 14px;
  padding: 5px 6px;
  margin: 0 0 0 11px;
  color: white;
  background-color: #999;
  border-radius: 4px;
`;

const TagContainer = styled.div`
  min-width: 150px;
`;

interface Props {
  content: IContent;
  user: IUser;
}

export const AdminSectionItem = ({ content, user }: Props) => {
  return (
    <ContentItem>
      <DefaultCheckBox type="checkbox" id={content.title} />
      <CheckBox
        htmlFor={content.title}
        isChecked={user.completionList.includes(content.link)}
      />
      <ContentItemDescription>
        <ContentsLink href={content.link} target={"_blank"}>
          {" " + content.title}
        </ContentsLink>
        <br />
        {content.requiredTime >= 60 &&
          ` ${Math.floor(content.requiredTime / 60)}時間`}
        {content.requiredTime % 60 !== 0 &&
          ` ${Math.floor(content.requiredTime % 60)}分`}
        <TagContainer>
          <MediaTypeTag>
            {content.mediaType.includes("VIDEO")
              ? "動画"
              : content.mediaType.includes("RADIO")
              ? "ラジオ"
              : "テキスト"}
          </MediaTypeTag>
          {!content.mediaType.includes("READ_ONLY") && (
            <MediaTypeTag>実践</MediaTypeTag>
          )}
          {content.mediaType.includes("USE_MY_PC") && (
            <MediaTypeTag>PC必須</MediaTypeTag>
          )}
          {content.mediaType.includes("USE_GIT") && (
            <MediaTypeTag>Gitで管理してみよう</MediaTypeTag>
          )}
        </TagContainer>
      </ContentItemDescription>
    </ContentItem>
  );
};

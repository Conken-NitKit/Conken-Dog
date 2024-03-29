import { useContext, useEffect, useRef, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";
import { defaultUserInfo, IUser } from "../interfaces/User";
import { fetchUser } from "../utils/users/fetchUser";
import LessonCard from "../components/LessonCard";
import { courseList } from "../assets/courses";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";
import media from "styled-media-query";
import { Container } from "../layouts/Container";
import { userContext } from "../contexts/userContext";
import { redirectNonAdmin } from "../utils/users/redirectNonAdmin";

const CategoryList = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding-inline-start: 0;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryTag = styled.li<{ isSelected: boolean }>`
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  font-weight: bold;
  list-style: none;
  white-space: nowrap;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: ${(props) => (props.isSelected ? "white" : "#AAA")};
  margin: 0 4px 4px;
  padding: 4px ${(props) => (props.isSelected ? 10 : 8)}px;
  background-color: ${(props) =>
    props.isSelected ? "#30c8d6" : "rgba(0, 0, 0, 0)"};
  box-shadow: 0 1px 8px -2px rgba(0, 0, 0, ${(props) => (props.isSelected ? 0.4 : 0)});
  border-radius: 13px;
  cursor: pointer;
  &::selection {
    background: none;
  }
`;

const SectionContainer = styled.div`
  outline: none;
  padding: 12px 0 48px;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
  ${media.greaterThan("medium")`
    padding-bottom: 0;
    overflow-y: scroll;
  `}
`;

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  padding: 0;
  tr {
    background-color: #fff;
  }
  tbody tr:hover {
    background-color: #fffae9;
  }
  th,
  td {
    padding: 0.35em 1em;
    border-bottom: 1px solid #eee;
  }
  thead {
    th {
      font-size: 0.9em;
      padding: 1em;
    }
    tr {
      background-color: #30c8d6;
      color: #fff;
    }
  }
  tbody td {
    font-size: 0.85em;
    padding: 16px 8px;
  }
`;

interface ParamTypes {
  id: string;
}

export default function Admin({ history }: RouteComponentProps) {
  const { id } = useParams<ParamTypes>();
  const { user, setUser } = useContext(userContext);
  const [watchedUser, setWatchedUser] = useState<IUser>(defaultUserInfo);
  const [courseIndex, setCourseIndex] = useState<number>(
    Number(localStorage.getItem("AdminCourseIndex")) ?? 0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const unSub = redirectNonAdmin(history, user, setUser);
    const f = async () => {
      console.log(id);
      const fetchedUser = await fetchUser(id);
      setWatchedUser(fetchedUser);
    };
    f();
    courseRef.current!.slickGoTo(
      Number(localStorage.getItem("AdminCourseIndex") ?? 0)
    );
    return () => {
      unSub();
    };
  }, []);

  const courseRef = useRef<Slick | null>();

  const slideChangeHandle = (_: number, next: number) => {
    localStorage.setItem("AdminCourseIndex", String(next));
    setCourseIndex(next);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: slideChangeHandle,
  };

  return (
    <Container>
      {watchedUser.displayName}
      <CategoryList>
        <CategoryTag
          key={`course/tag/0`}
          isSelected={courseIndex === 0}
          onClick={() => courseRef.current!.slickGoTo(0)}
        >
          行動ログ
        </CategoryTag>
        {courseList.map((course, index) => (
          <CategoryTag
            key={`course/tag/${index + 1}`}
            isSelected={courseIndex === index + 1}
            onClick={() => courseRef.current!.slickGoTo(index + 1)}
          >
            {course.name}
          </CategoryTag>
        ))}
      </CategoryList>

      <Slick ref={(slider) => (courseRef.current = slider)} {...settings}>
        <Table>
          <thead>
            <tr>
              <th scope={"col"} style={{width: "160px"}}>時刻</th>
              <th scope={"col"} style={{width: "740px"}}>行動履歴</th>
            </tr>
          </thead>
          {watchedUser.activityLog.map((logItem, index) => (
            <tbody key={`log/${index}`}>
              <tr>
                <td>
                  {new Date(logItem.timestamp).getFullYear()}年
                  {new Date(logItem.timestamp).getMonth() + 1}月
                  {new Date(logItem.timestamp).getDate()}日{" "}
                  {(
                    "00" + new Date(logItem.timestamp).getHours().toString()
                  ).slice(-2)}
                  :
                  {(
                    "00" + new Date(logItem.timestamp).getMinutes().toString()
                  ).slice(-2)}
                </td>
                <td>{logItem.targetLink}</td>
              </tr>
            </tbody>
          ))}
        </Table>
        {courseList.map((course, index) => (
          <SectionContainer key={index}>
            {course.sections.map((section, index) => (
              <LessonCard
                key={`course/admin-section/${index}`}
                section={section}
                propsUser={watchedUser}
                useFinishedFilter={true}
                metaName={course.metaName}
                index={index}
              />
            ))}
            {course.sections.map((section, index) => (
              <LessonCard
                key={`course/admin-section/${index}`}
                section={section}
                propsUser={watchedUser}
                useFinishedFilter={false}
                metaName={course.metaName}
                index={index}
              />
            ))}
          </SectionContainer>
        ))}
      </Slick>
    </Container>
  );
}

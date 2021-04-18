import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { defaultUserInfo, IUser } from "../interfaces/User";
import { fetchUser } from "../utils/users/fetchUser";
import Slick from "react-slick";
import LessonCard from "../components/LessonCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { courseList } from "../assets/courses";

import styled from "styled-components";
import media from "styled-media-query";
import { Container } from "../layouts/Container";

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

interface ParamTypes {
  id: string;
}

export default function Admin() {
  const { id } = useParams<ParamTypes>();
  const [user, setUser] = useState<IUser>(defaultUserInfo);
  const [courseIndex, setCourseIndex] = useState<number>(
    Number(localStorage.getItem("AdminCourseIndex")) ?? 0
  );

  useEffect(() => {
    const f = async () => {
      console.log(id);
      const fetchedUser = await fetchUser(id);
      setUser(fetchedUser);
    };
    f();
    courseRef.current!.slickGoTo(
      Number(localStorage.getItem("AdminCourseIndex") ?? 0)
    );
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
      <CategoryList>
        {courseList.map((course, index) => (
          <CategoryTag
            key={`course/tag/${index}`}
            isSelected={courseIndex === index}
            onClick={() => courseRef.current!.slickGoTo(index)}
          >
            {course.name}
          </CategoryTag>
        ))}
      </CategoryList>

      <Slick ref={(slider) => (courseRef.current = slider)} {...settings}>
        {courseList.map((course, index) => (
          <SectionContainer key={index}>
            {course.sections.map((section, index) => (
              <LessonCard
                key={`course/admin-section/${index}`}
                section={section}
                propsUser={user}
                useFinishedFilter={true}
                metaName={course.metaName}
                index={index}
              />
            ))}
            {course.sections.map((section, index) => (
              <LessonCard
                key={`course/admin-section/${index}`}
                section={section}
                propsUser={user}
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

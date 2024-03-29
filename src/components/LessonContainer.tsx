import { useEffect, useState, useRef } from "react";
import Slick from "react-slick";
import LessonCard from "../components/LessonCard";
import styled from "styled-components";
import media from "styled-media-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { courseList } from "../assets/courses";

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

const SectionContainer = styled.div<{ useFinishedFilter: boolean }>`
  outline: none;
  padding: 12px 0 48px;
  &::-webkit-scrollbar {
    display: none;
  }
  ${media.greaterThan("medium")`
    height: 532px;
    padding-bottom: 0;
    overflow-y: scroll;
  `}
`;

interface Props {
  useFinishedFilter: boolean;
}

export default function LessonContainer({ useFinishedFilter }: Props) {
  const [courseIndex, setCourseIndex] = useState<number>(
    Number(
      localStorage.getItem(
        useFinishedFilter ? "FinishedCourseIndex" : "courseIndex"
      )
    ) ?? 0
  );
  const courseRef = useRef<Slick | null>();

  const slideChangeHandle = (_: number, next: number) => {
    localStorage.setItem(
      useFinishedFilter ? "FinishedCourseIndex" : "courseIndex",
      String(next)
    );
    setCourseIndex(next);
  };

  useEffect(() => {
    setTimeout(
      () =>
        courseRef.current!.slickGoTo(
          Number(
            localStorage.getItem(
              useFinishedFilter ? "FinishedCourseIndex" : "courseIndex"
            ) ?? 0
          )
        ),
      100
    );
  }, []);

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
    <>
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
          <SectionContainer key={index} useFinishedFilter={useFinishedFilter}>
            {course.sections.map((section, index) => (
              <LessonCard
                key={`course/section/${index}`}
                section={section}
                useFinishedFilter={useFinishedFilter}
                metaName={course.metaName}
                index={index}
              />
            ))}
          </SectionContainer>
        ))}
      </Slick>
    </>
  );
}

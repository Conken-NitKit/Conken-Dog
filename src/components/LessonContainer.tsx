import { useEffect, useState, useRef } from "react";
import Slick from "react-slick";
import LessonCard from "../components/LessonCard";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { courceList } from "../assets/courses";
import { threadId } from "worker_threads";
import Slider from "./Slider";

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
  margin: 0 4px 0;
  padding: 4px ${(props) => (props.isSelected ? 10 : 8)}px;
  background-color: ${(props) =>
    props.isSelected ? "#30c8d6" : "rgba(0, 0, 0, 0)"};
  border-radius: 13px;
  cursor: pointer;
  &::selection {
    background: none;
  }
`;

const SectionContainer = styled.div`
  height: 540px;
  overflow-y: scroll;
  outline: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function LessonContainer() {
  const [watchedCourseIndex, setWatchedCourseIndex] = useState<number>(0);
  const [watchedCourseNav, setwatchedCourseNav] = useState<Slick | null>();
  const watchedCourseRef = useRef<Slick | null>();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setWatchedCourseIndex(next),
  };
  return (
    <>
      <CategoryList>
        {courceList.map((course, i) => (
          <CategoryTag
            isSelected={watchedCourseIndex === i}
            onClick={() => watchedCourseRef.current!.slickGoTo(i)}
          >
            {course.name}
          </CategoryTag>
        ))}
      </CategoryList>

      <Slick
        ref={(slider) => (watchedCourseRef.current = slider)}
        {...settings}
      >
        {courceList.map((course) => (
          <SectionContainer>
            {course.sections.map((section, i) => (
              <LessonCard
                section={section}
                metaName={course.metaName}
                index={i}
              />
            ))}
          </SectionContainer>
        ))}
      </Slick>
    </>
  );
}

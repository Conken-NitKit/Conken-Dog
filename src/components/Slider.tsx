import Slick from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideContainer = styled.div`
  background-color: gray;
  height: 296px;
`;

export default function Slider() {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    outoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slick {...settings}>
      {[...Array(10)].map((_, index) => (
        <SlideContainer key={`slider/${index}`}>
          <h1>{index}</h1>
        </SlideContainer>
      ))}
    </Slick>
  );
}

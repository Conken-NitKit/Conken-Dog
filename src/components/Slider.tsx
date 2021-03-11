import { useEffect, useState } from "react";
import Slick from "react-slick";
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import industryImg from "../assets/img/banner/industry.jpeg";
import carrierImg from "../assets/img/banner/carrier.jpeg";
import moneyImg from "../assets/img/banner/money.jpeg";

const SlideContainer = styled(Link)`
  height: 296px;
  cursor: pointer;
  ${media.lessThan("medium")`
    height: 30vw;
  `}
`;

const SlideImg = styled.img`
  height: 100%;
  object-fit: contain;
  ${media.lessThan("medium")`
    object-fit: cover;
  `}
`;

export default function Slider() {
  const [isGteMedium, setIsGteMedium] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsGteMedium(window.innerWidth >= 768);
    };
    setIsGteMedium(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contents = [
    {
      img: industryImg,
      link: "others/1",
    },
    {
      img: carrierImg,
      link: "others/7",
    },
    {
      img: moneyImg,
      link: "others/8",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    outoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slick {...settings} arrows={isGteMedium}>
      {contents.map((content, index) => (
        <SlideContainer key={`slider/${index}`} to={content.link}>
          <SlideImg src={content.img} />
        </SlideContainer>
      ))}
    </Slick>
  );
}

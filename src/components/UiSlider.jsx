import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CardUi from "./CardUi";

import airpodVideo from '../video/airpot.mp4';
import creativeVideo from '../video/Creative.mp4';
import foodVideo from '../video/food.mp4';
import coachVideo from '../video/coach.mp4';
import sportVideo from '../video/sport.mp4';
import appVideo from '../video/app.mp4';

// Custom Next Arrow
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
      <IoIosArrowForward className="text-black size-6" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
      <IoIosArrowBack className="text-black size-6" />
    </div>
  );
};

const UiSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          speed: 3000,
          autoplaySpeed: 5000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" w-[400px]  sm:w-[550px] md:w-[660px] lg:w-[1000px] xl:w-[1220px] mx-auto px-4">
      <Slider {...settings}>
        <CardUi src={airpodVideo} link="https://www.figma.com/design/TragmVUlobqEWCMp1O0ia1/premium?node-id=201-14&node-type=frame" title="AirPods" para="Explore in-depth reviews, news, and exclusive tips for AirPods." />
        <CardUi src={creativeVideo} link="https://www.figma.com/design/TragmVUlobqEWCMp1O0ia1/premium?node-id=3-198&node-type=frame" title="Creative Web Studio" para="Bringing your online vision to life with modern, user-friendly designs." />
        <CardUi src={foodVideo} link="https://www.figma.com/design/y62Tf4eQLxOHOn2vLkquH9/food-app?node-id=307-525&node-type=canvas" title="Food App" para="Get your favorite meals delivered fast with this seamless food ordering experience." />
        <CardUi src={coachVideo} link="https://www.figma.com/design/lmwElBhNBQlhTHDKzAxjgu/All-in-one?node-id=136-4759&node-type=canvas" title="Coach Web" para="Coaching to empower individuals and businesses to build stronger relationships." />
        <CardUi src={sportVideo} link="https://www.figma.com/design/lmwElBhNBQlhTHDKzAxjgu/All-in-one?node-id=136-2534&node-type=canvas" title="SportHub" para="Expert guidance and tips for swimming and basketball players." />
        <CardUi src={appVideo} link="https://www.figma.com/design/lmwElBhNBQlhTHDKzAxjgu/All-in-one?node-id=133-1506&node-type=canvas" title="App Only" para="Visually delightful cake and fashion-themed apps for seamless experiences." />
      </Slider>
    </div>
  );
};

export default UiSlider;

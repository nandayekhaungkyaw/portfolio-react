import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";
import CardUi from "./CardUi";

import airpodVideo from '../video/airpot.mp4';
import creativeVideo from '../video/Creative.mp4';
import foodVideo from '../video/food.mp4';
import coachVideo from '../video/coach.mp4';
import sportVideo from '../video/sport.mp4';
import appVideo from '../video/app.mp4';
// Custom Next Arrow

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    > <IoIosArrowForward className="text-black size-6  p-0 items-center text-center" />
</div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
      > <IoIosArrowBack 
 className="text-black size-6  p-0 items-center text-center " />
  </div>
  );
}
const UiSlider = () => {

  var settings = {
    
      dots: true,
      infinite: true,
      slidesToShow: 3,
      
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
    

   
    slidesToScroll: 1,
   
    pauseOnHover: true,
    rows: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container max-w-[1100px]  mx-auto">
     <div className="">
     <Slider {...settings} className="">
     <CardUi 
    src={airpodVideo} 
    link="https://www.figma.com/design/TragmVUlobqEWCMp1O0ia1/premium?node-id=201-14&node-type=frame&t=XaIJmSdz9gqBNxYF-0" 
    responsive={true} 
    title="AirPods" 
    para="AirPods Web is your ultimate destination for everything AirPods. Explore in-depth reviews, the latest news, and exclusive tips to get the most out of your AirPods experience." 
/>
<CardUi 
    src={creativeVideo} 
    link="https://www.figma.com/design/TragmVUlobqEWCMp1O0ia1/premium?node-id=3-198&node-type=frame&t=XaIJmSdz9gqBNxYF-0" 
    responsive={true} 
    title="Creative Web Studio" 
    para="At Creative Web Studio, we bring your online vision to life with modern, user-friendly designs that stand out. Our team specializes in crafting websites that are visually stunning." 
/>
<CardUi 
    src={foodVideo} 
    link="https://www.figma.com/design/y62Tf4eQLxOHOn2vLkquH9/food-app?node-id=307-525&node-type=canvas&t=isdvdGPn6uPAvJLi-0" 
    responsive={true} 
    title="Foood App" 
    para="Get your favorite meals delivered fast with this. Enjoy a seamless food ordering experience from local restaurants, straight to your door, anytime you crave it!,Dashboard,App,Web" 
/>
<CardUi 
    src={coachVideo} 
    link="https://www.figma.com/design/lmwElBhNBQlhTHDKzAxjgu/All-in-one?node-id=136-4759&node-type=canvas&t=RSnqpOfXYwJa9qGw-0" 
    responsive={false} 
    title="Coach Web" 
    para="Unlock the potential in your personal and professional life. I offer coaching that empowers individuals and businesses to build stronger relationships, overcome challenges" 
/>
<CardUi 
    src={sportVideo} 
    link="https://www.figma.com/design/lmwElBhNBQlhTHDKzAxjgu/All-in-one?node-id=136-2534&node-type=canvas&t=RSnqpOfXYwJa9qGw-0" 
    responsive={true} 
    title="SportHub" 
    para="Welcome to SportHub, Whether you're diving into the pool or hitting the court, we offer expert guidance, tips, and resources to help you improve your skills and stay ahead in your game." 
/>
<CardUi 
    src={appVideo} 
    link="https://www.figma.com/design/lmwElBhNBQlhTHDKzAxjgu/All-in-one?node-id=133-1506&node-type=canvas&t=RSnqpOfXYwJa9qGw-0" 
    responsive={false} 
    title="App Only" 
    para="From a visually delightful cake-themed app, where sweet creations come to life, to a sleek and stylish fashion app, showcasing the latest trends, each design is crafted for a seamless, experience." 
/>

      </Slider>
     </div>
    </div>
  );
};

export default UiSlider;

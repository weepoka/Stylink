import React from "react";
import ProductDetails from "../Product/ProductDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn  " onClick={onClick}>
      <button
        className="next right-[-15px] md:right-[-20px] z-[5] text-[20px]
        absolute top-[40%] md:w-[50px] md:h-[50px] h-[30px] w-[30px]  leading-[30px]
        md:leading-[50px] bg-[#0f3460] rounded-[50%] transition duration-500 ease-in-out flexCenter hover:bg-button"
      >
        <HiArrowNarrowRight className="right text-white md:text-[30px]" />
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button
        className="prev left-[-10px] md:left-[-20px]  z-[5] text-[20px]
        absolute top-[40%] md:w-[50px] md:h-[50px] h-[30px] w-[30px]  leading-[30px]
        md:leading-[50px] bg-[#0f3460] rounded-[50%] transition duration-500 ease-in-out flexCenter hover:bg-button"
      >
        <HiOutlineArrowNarrowLeft className="left text-white md:text-[30px] " />
      </button>
    </div>
  );
};

const FlashCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="py-10">
      {" "}
      <Slider {...settings} className="px-5">
        <div className="px-3 ">
          <ProductDetails />
        </div>
        <div className="px-3 ">
          <ProductDetails />
        </div>
        <div className="px-3">
          <ProductDetails />
        </div>
        <div className="px-3">
          <ProductDetails />
        </div>
        <div className="px-3 ">
          <ProductDetails />
        </div>
      </Slider>
    </div>
  );
};

export default FlashCard;

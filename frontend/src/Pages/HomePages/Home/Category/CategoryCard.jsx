import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../../assets/category/category-1.png";
import image2 from "../../../../assets/category/category-2.png";
const CategoryCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
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
  };

  return (
    <div className="overflow-hidden py-5">
      <Slider {...settings}>
        <div className="px-5">
          <div className="bg-white rounded-md p-4 ">
            <div className="relative w-full  flex">
              <span className="absolute left-0 bg-[#f6f9fc] text-black text-[12px] rounded-3xl py-[5px] px-[10px] m-[5px] top-[10px]">
                headPhone
              </span>
              <span className="right-0 absolute  bg-[#0f3460] text-white text-[12px] py-[5px]  rounded-3xl  px-[10px] m-[5px] top-[10px]">
                3k orders this week
              </span>
            </div>
            <div className="rounded-[10px]">
              <img src={image1} alt="" className="w-full rounded-[5px]" />
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="bg-white rounded-md p-4 ">
            <div className="relative w-full  flex">
              <span className="absolute left-0 bg-[#f6f9fc] text-black text-[12px] rounded-3xl py-[5px] px-[10px] m-[5px] top-[10px]">
                Watch
              </span>
              <span className="right-0 absolute  bg-[#0f3460] text-white text-[12px] py-[5px]  rounded-3xl  px-[10px] m-[5px] top-[10px]">
                3k orders this week
              </span>
            </div>
            <div className="rounded-[10px]">
              <img src={image2} alt="" className="w-full rounded-[5px]" />
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="bg-white rounded-md p-4 ">
            <div className="relative w-full  flex">
              <span className="absolute left-0 bg-[#f6f9fc] text-black text-[12px] rounded-3xl py-[5px] px-[10px] m-[5px] top-[10px]">
                headPhone
              </span>
              <span className="right-0 absolute  bg-[#0f3460] text-white text-[12px] py-[5px]  rounded-3xl  px-[10px] m-[5px] top-[10px]">
                3k orders this week
              </span>
            </div>
            <div className="rounded-[10px]">
              <img src={image1} alt="" className="w-full rounded-[5px]" />
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="bg-white rounded-md p-4 ">
            <div className="relative w-full  flex">
              <span className="absolute left-0 bg-[#f6f9fc] text-black text-[12px] rounded-3xl py-[5px] px-[10px] m-[5px] top-[10px]">
                headPhone
              </span>
              <span className="right-0 absolute  bg-[#0f3460] text-white text-[12px] py-[5px]  rounded-3xl  px-[10px] m-[5px] top-[10px]">
                3k orders this week
              </span>
            </div>
            <div className="rounded-[10px]">
              <img src={image1} alt="" className="w-full rounded-[5px]" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CategoryCard;

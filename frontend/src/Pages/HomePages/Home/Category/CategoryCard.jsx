import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../../assets/category/category-1.png";
import image2 from "../../../../assets/category/category-2.png";
import { AuthContext } from "../../../../Api/AuthProvider/AuthProvider";
import { getCategories } from "../../../../Api/ApiServices/ApiSerivces";
import { Link } from "react-router-dom";
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
  const { product } = useContext(AuthContext);
  const [category, setCategory] = useState([]);
  const [imageArray, setImageArray] = useState([image1, image2]);
  const [categoriesArray, setCategoriesArray] = useState([]);

  console.log(categoriesArray);
  useEffect(() => {
    getCategories(setCategory, setCategoriesArray);
  }, []);

  return (
    <div className="overflow-hidden py-5">
      <Slider {...settings}>
        {categoriesArray.map((categoryItem, i) => (
          <div key={i} className="px-5">
            <Link to={`category/${categoryItem.category}`}>
              <div className="bg-white rounded-md p-4 ">
                <div className="relative w-full  flex">
                  <span className="absolute left-0 bg-[#f6f9fc] text-black text-[12px] rounded-3xl py-[5px] px-[10px] m-[5px] top-[10px]">
                    {categoryItem.category}
                  </span>
                  <span className="right-0 absolute  bg-[#0f3460] text-white text-[12px] py-[5px]  rounded-3xl  px-[10px] m-[5px] top-[10px]">
                    3k orders this week
                  </span>
                </div>
                <div className="rounded-[10px]">
                  <img
                    src={imageArray[i % imageArray.length]}
                    alt=""
                    className="w-full rounded-[5px]"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCard;

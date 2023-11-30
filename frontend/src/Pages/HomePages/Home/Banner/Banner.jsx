import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import { AuthContext } from "../../../../Api/AuthProvider/AuthProvider";
import banner0 from "../../../../assets/banner/8642502.jpg";
import banner2 from "../../../../assets/banner/8642509.jpg";
import banner1 from "../../../../assets/banner/mega_sale.jpg";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  const { banners } = useContext(AuthContext);
  const Banner = banners.filter(
    (element) => element.megaOffer === false && element.offerDate === ""
  );

  const megaBanner = banners.filter((b) => b.megaOffer === true);
  // console.log(megaBanner);
  return (
    <div className=" homeSlide overflow-hidden pb-5 relative">
      <Slider {...settings}>
        <div className="w-full">
          <img src={banner0} alt="" className=" bg-cover h-[550px]  w-full" />
        </div>
        <div>
          <img src={banner1} alt="" className=" bg-cover h-[550px] w-full" />
        </div>
        <div>
          <img src={banner2} alt="" className=" bg-cover h-[550px] w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

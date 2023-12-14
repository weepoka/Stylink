import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaHeadset, FaIdCard, FaTruckFast } from "react-icons/fa6";

const Wrapper = () => {
  const data = [
    {
      cover: <FaTruckFast />,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FaIdCard />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FaShieldAlt />,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FaHeadset />,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="text-center bg-[#f6f9fc] py-20 ">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((val, index) => {
            return (
              <div data-aos="fade-up" className="bg-white p-3" key={index}>
                <div className="m-auto flexCenter w-[70px] h-[70px] leading-[70px] mb-[20px] rounded-full bg-gray-200">
                  <p className="text-[25px]  ">{val.cover}</p>
                </div>
                <h3>{val.title}</h3>
                <p className="text-gray-400">{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;

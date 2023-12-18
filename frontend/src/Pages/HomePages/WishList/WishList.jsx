import { Icon } from "@iconify/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Wish from "../../../Component/hompage/UserProfile/Wish";

const WishList = ({ activePage }) => {
  const { wishlistItems } = useSelector((state) => state?.wishlists);

  console.log(wishlistItems);
  return (
    <div>
      {" "}
      <div
        className="font-medium  bg-slate-100 py-5 
relative  capitalize px-5  flex items-center"
      >
        {/* ====> homepage Navigation */}
        <NavLink to="/" className="text-heading font-bold">
          <span className="text-sm">HOME</span>
        </NavLink>
        <span className="ml-1 flex items-center uppercase">
          <Icon icon="radix-icons:slash" width={20} /> {activePage}
        </span>
      </div>
      <>
        <div className=" dark:bg-gray-800">
          <div className="container mx-auto px-2 py-3">
            <h1 className="text-4xl text-center py-5  dark:text-gray-200">
              My Wishlists ❤️❤️❤️
            </h1>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2  gap-10 items-center justify-center">
              {wishlistItems?.map((wishlist) => {
                return <Wish key={wishlist?._id} wishlist={wishlist} />;
              })}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default WishList;

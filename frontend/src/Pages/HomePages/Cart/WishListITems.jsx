import { Icon } from "@iconify/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Wish from "../../../Component/hompage/UserProfile/Wish";
import { clearAllWishlist } from "../../../Redux/Store/wishSlice";

const WishListITems = () => {
  const dispatch = useDispatch();
  const wishListitems = useSelector((state) => state?.wishlists?.wishlistItems);
  console.log(wishListitems);
  const clearWishlists = () => {
    dispatch(clearAllWishlist());
  };
  return (
    <div>
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
            <Icon icon="radix-icons:slash" width={20} />
          </span>
        </div>
        <>
          <div className="h-screen dark:bg-gray-800">
            <div className="container mx-auto px-2 py-3">
              <h1 className="text-4xl text-center py-5  dark:text-gray-200">
                My Wishlists ❤️❤️❤️
              </h1>
              <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 items-center justify-center">
                {wishListitems?.map((wishlist) => {
                  return <Wish key={wishlist?._id} wishlist={wishlist} />;
                })}
              </div>
              <div>
                <button onClick={clearWishlists}>Clear All</button>
              </div>
            </div>
          </div>
          <div></div>
        </>
      </div>
    </div>
  );
};

export default WishListITems;

import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Wish from "../../../Component/hompage/UserProfile/Wish";
import {
  clearAllWishlist,
  removeWishItem,
} from "../../../Redux/Store/wishSlice";
import swal from "sweetalert";
const WishListITems = () => {
  const dispatch = useDispatch();
  const { wishList } = useParams();
  // console.log(wishList);
  const wishListitems = useSelector((state) => state?.wishlists?.wishlistItems);
  // console.log(wishListitems);
  // console.log("wishList", typeof wishListitems);
  // const clearWishlists = (wish) => {
  //   dispatch(clearAllWishlist(wish));
  // };
  const handleWishItemsRemove = (product) => {
    dispatch(removeWishItem(product));
  };
  const handleClearAll = () => {
    swal({
      title: "Are you sure?",
      text: "This will clear your entire wishlist. Are you sure you want to continue?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(clearAllWishlist());
        swal("Your entire wishlist has been cleared!", {
          icon: "success",
        });
      } else {
        swal("Your wishlist is safe!");
      }
    });
  };
  return (
    <div>
      <div className="container">
        {" "}
        <>
          <div className="h-screen dark:bg-gray-800">
            <div className="container mx-auto px-2 py-3">
              <h1 className="text-4xl text-center py-5  dark:text-gray-200">
                My Wishlists ❤️❤️❤️
              </h1>
              <div
                className="font-medium  bg-slate-100 py-5 
relative  capitalize px-5  flex items-center"
              >
                {/* ====> homepage Navigation */}
                <NavLink to="/" className="text-heading font-bold">
                  <span className="text-sm">HOME</span>
                </NavLink>
                <span className="ml-1 flex items-center uppercase">
                  <Icon icon="radix-icons:slash" width={20} /> {wishList}
                </span>
              </div>
              <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 items-center justify-center">
                {wishListitems?.map((wishlist) => {
                  return (
                    <Wish
                      key={wishlist?._id}
                      wishlist={wishlist}
                      handleWishItemsRemove={handleWishItemsRemove}
                    />
                  );
                })}
              </div>
              <div>
                {/* <button onClick={() => clearWishlists(wishListitems)}>
                  Clear All
                </button> */}
                <button onClick={handleClearAll}>Clear All</button>
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

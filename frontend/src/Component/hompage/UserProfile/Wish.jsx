import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import swal from "sweetalert";

import { FaTrash } from "react-icons/fa6";
import { add } from "../../../Redux/Store/cartSlice";
import {
  clearAllWishlist,
  removeWishItem,
} from "../../../Redux/Store/wishSlice";

const Wish = ({ wishlist }) => {
  const { _id, image, title, offerPrice, name, category } = wishlist || {};
  const [pdCount, setPdCount] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = (product) => {
    dispatch(add({ ...product, pdCount }));
    // console.log("product item send to cart :", product);
    navigate("/cart");
  };
  // remove wish item
  const handleWishItemsRemove = (product) => {
    dispatch(removeWishItem(product));
  };
  const handleRemove = (pdId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeWishItem(pdId));
        swal("Now! Your Selected product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Selected Product is safe!");
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center  bg-white rounded-lg shadow md:flex-row md:max-w-xl dark:bg-gray-900 ">
        <Link to={`/SingleProductDetails/${_id}`}>
          <img
            className="object-contain w-full rounded-t-lg h-96 mx-2 my-1 md:h-48 md:w-48 md:rounded-none md:rounded-l-lg"
            src={image}
            alt=""
          />
        </Link>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h3 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h3>
          <h4 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
            $ {offerPrice}
          </h4>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            {category}
          </p>
          <div className="flex flex-row  items-center py-1">
            <button
              onClick={() => addToCart(wishlist)}
              className="text-white bg-rose-600 hover:bg-rose-800 rounded-lg mx-2 px-2 md:whitespace-pre"
            >
              Add To Cart
            </button>
            <button
              onClick={() => handleWishItemsRemove(wishlist)}
              className="dark:text-rose-600"
            >
              <FaTrash className="text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wish;

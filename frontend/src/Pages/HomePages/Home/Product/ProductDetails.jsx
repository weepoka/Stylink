import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "../../../../Redux/Store/cartSlice";
const ProductDetails = () => {
  // const {
  //   _id,
  //   image,
  //   offerPrice,
  //   description,
  //   newArrival,
  //   offerPercentage,
  //   discountPrice,
  //   stock,
  //   oldPrice,
  //   name,
  // } = product;

  //   console.log(name.replace(/\s+/g, ""));
  //! AddToCart
  const dispatch = useDispatch();
  const [pdCount, setPdCount] = useState(1);
  const addToCart = (product) => {
    dispatch(add({ ...product, pdCount }));
  };
  return (
    <div className="bg-white">
      {" "}
      <div className="w-full">
        <div className="relative p-4 bg-white rounded shadow dark:bg-gray-700">
          <div className="block mb-2" href="#">
            <div className="relative group overflow-hidden">
              <div className="mb-5 overflow-hidden">
                <img
                  className="object-cover w-full mx-auto 
                  transition-all rounded h-72 group-hover:scale-110"
                  src="https://i.postimg.cc/mg7F7104/blue-t-shirt.jpg"
                  alt=""
                />
              </div>

              <div className="absolute px-4 py-1 text-xs text-white rounded top-3 left-3 sale bg-rose-500">
                New
                {/* {newArrival && (
                <div className="absolute px-4 py-1 text-xs text-white rounded top-3 left-3 sale bg-rose-500">
                  New
                </div>
              )}
              {offerPercentage > 0 && (
                // <div className="bg-red-600 absolute text-white p-2 font-bold text-lg left-0 top-0">

                // </div>
                <span class="absolute top-0 right-0 px-4 py-2 m-2 lg:px-2 lg:py-1 text-sm font-semibold text-gray-100 bg-red-600 rounded-md">
                  {Math.round(offerPercentage)}% OFF
                </span>
              )} */}
              </div>
            </div>
            <div className="h-[70px]">
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {" "}
                Pure Blue Soothing Tshirt
              </h3>
            </div>
            <div className="flex justify-between pb-3">
              <p className="text-lg font-bold text-button dark:text-blue-300 ">
                <span>
                  $150.00
                  {/* {offerPercentage || discountPrice ? (
                <span
                  className=" font-bold
                   text-[#ea6b28]"
                >
                  {offerPrice}
                </span>
              ) : (
                <span className="text-lg font-bold text-gray-900">
                  {oldPrice}
                </span>
              )} */}
                </span>
                <span
                  className="text-xs font-semibold
               text-gray-400 line-through "
                >
                  {" "}
                  2000
                  {/* {offerPercentage > 0 && (
                  <span className="line-through
                   font-bold text-gray-600 ml-2 ">
                    {oldPrice}
                  </span>
                )} */}
                </span>
              </p>
              {/* <p className="">
                {stock > "0" ? (
                  <button
                    className="text-green-500 text-[16px] dark:text-green-400 px-3 py-1  
                      "
                  >
                    In Stock
                  </button>
                ) : (
                  <button
                    className="text-green-500 text-[16px] dark:text-green-400 px-3 py-1  
                  "
                  >
                    Out of Stock
                  </button>
                )}
              </p> */}
              <p>In stock </p>
            </div>
            <div title="Add to wishlist" className="flex gap-3 mt-3  rating">
              <FaHeart size={30} className="hover:text-red-500 transition" />
              <span className="text-md text-gray-500"> wishList</span>
            </div>

            <button
              title="Add To Cart"
              className="absolute z-10 flex items-center justify-center p-1 text-center
               text-gray-100 bg-button rounded-full shadow-xl bottom-4 right-4 hover:bg-primary w-11 h-11 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-7 h-7"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

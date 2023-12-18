import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "../../../../Redux/Store/cartSlice";
import { addToWishList } from "../../../../Redux/Store/wishSlice";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {
  // if (!product) {
  //   return null; // or return a loading/error message as needed
  // }
  // console.log(product);
  const {
    _id,
    image,
    offerPrice,
    description,
    newArrival,
    offerPercentage,
    discountPrice,
    stock,
    oldPrice,
    name,
  } = product;

  //   console.log(name.replace(/\s+/g, ""));
  //! AddToCart
  const dispatch = useDispatch();
  const [pdCount, setPdCount] = useState(1);
  const addToCart = (product) => {
    dispatch(add({ ...product, pdCount }));
  };
  const addToWishlistHandler = (product) => {
    dispatch(addToWishList({ ...product, pdCount }));
  };
  return (
    <div data-aos="fade-up" className="bg-white w-full h-full">
      <Link to={`/SingleProductDetails/${_id}`}>
        <div className="w-full">
          <div className="relative p-4 bg-white rounded shadow dark:bg-gray-700">
            <div className="block mb-2" href="#">
              <div className="relative group overflow-hidden">
                <div className="mb-5 overflow-hidden">
                  <img
                    className="object-cover w-full mx-auto 
                  transition-all rounded h-72 group-hover:scale-110"
                    src={image}
                    alt=""
                  />
                </div>

                {newArrival === true ? (
                  <div
                    className="absolute px-4 py-1 text-xs text-white 
                  rounded top-3 left-3 sale bg-rose-500"
                  >
                    New
                  </div>
                ) : (
                  ""
                )}

                {offerPercentage > 0 && (
                  <div className="absolute top-0 right-0 px-4 py-2 m-2 lg:px-2 lg:py-1 text-sm font-semibold text-gray-100 bg-red-600 rounded-md">
                    {Math.round(offerPercentage)}% OFF
                  </div>
                )}
              </div>
              <div className="h-[70px]">
                <h3 className="mb-2 text-[15px] font-bold dark:text-white capitalize">
                  {name}
                </h3>
              </div>
              <div className="flex justify-between pb-3">
                <p className="text-lg font-bold  dark:text-blue-300 ">
                  <span>
                    {offerPercentage || discountPrice ? (
                      <span
                        className=" font-bold
                      text-button"
                      >
                        {offerPrice}
                      </span>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">
                        {oldPrice}
                      </span>
                    )}
                  </span>
                  <span
                    className="text-xs font-semibold
               text-gray-400 line-through "
                  >
                    {offerPercentage > 0 && (
                      <span
                        className="line-through
                   font-bold text-gray-600 ml-2 "
                      >
                        {oldPrice}
                      </span>
                    )}
                  </span>
                </p>
                <p className="">
                  {stock > "0" ? (
                    <button
                      className="text-green-500 text-[15px] dark:text-green-400 px-3 py-1  
                      "
                    >
                      In Stock
                    </button>
                  ) : (
                    <button
                      className="text-green-500 text-[15px] dark:text-green-400 px-3 py-1  
                  "
                    >
                      Out of Stock
                    </button>
                  )}
                </p>
              </div>
              <button
                onClick={() => addToWishlistHandler(product)}
                title="Add to wishlist"
                className="flex gap-3 mt-3 group cursor-pointer rating"
              >
                <FaHeart
                  size={30}
                  className="group-hover:text-red-500 transition"
                />
                <span className="text-md text-gray-500 group-hover:text-red-500">
                  {" "}
                  wishList
                </span>
              </button>

              <button
                title="Add To Cart"
                onClick={() => addToCart(product)}
                className="absolute z-10 flex items-center justify-center p-1 text-center
               text-gray-100 bg-button rounded-full shadow-xl bottom-4 right-4 hover:bg-primary w-11 h-11 "
              >
                <FaShoppingCart size={23} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductDetails;

import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import cart_logo from "../../../../assets/icon/shopping-cart 1.png";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link, NavLink, useSearchParams, useParams } from "react-router-dom";
import { AuthContext } from "../../../../Api/AuthProvider/AuthProvider";
import ProductDetails from "./ProductDetails";
import { Icon } from "@iconify/react";
import ProductMoreInfo from "./ProductMoreInfo";
import ProductReview from "./ProductReview";
import { add } from "../../../../Redux/Store/cartSlice";
import CartAmountToggle from "../../Cart/CartAmountToggle";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const SingleProductDetails = () => {
  const [isShown, setIsShown] = useState(true);
  const [isShown1, setIsShown1] = useState(true);
  const [tab, setTab] = useState("moreInfo");

  const handleClickHide = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };
  const handleClickHide1 = (event) => {
    // 👇️ toggle shown state
    setIsShown1((current) => !current);
  };
  const dispatch = useDispatch();
  // const { id } = useSearchParams();
  const { id } = useParams();
  const { profile } = useContext(AuthContext);
  console.log(id);
  const [product, setProduct] = useState({});
  // const { product } = useContext(AuthContext);
  console.log("product:", product);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const {
    _id,
    image,
    imageUrls,
    brand,
    description,
    offerPercentage,
    offerPrice,
    oldPrice,
    category,
    featureDatas,
    stock,
    name,
    productPin,
  } = product;
  console.log(_id);
  const [sliderImage, setSliderImage] = useState(image);

  const [pdCount, setPdCount] = useState(1);

  const getSingleProduct = async () => {
    let result = await fetch(`${apiUrl}/products/${id}`);
    result = await result.json();
    setProduct(result);
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  const handleClick = (image) => {
    setSliderImage(image);
  };

  //! AddToCart
  const addToCart = (product) => {
    dispatch(add({ ...product, pdCount }));
    console.log("product item send to cart :", product);
  };

  //? Counting item
  const setDecrease = () => {
    pdCount > 1 ? setPdCount(pdCount - 1) : setPdCount(1);
  };

  const setIncrease = () => {
    pdCount < stock ? setPdCount(pdCount + 1) : setPdCount(stock);
  };

  // Load product data
  useEffect(() => {
    fetch(`${apiUrl}/products/displayProducts`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProduct(data.data);
      })
      .catch((error) => console.error(error));
  }, []);
  // related products
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  const filteredItems = relatedProduct.filter((items) => {
    return (
      //   String(items.id) === ProductId
      items.category === category
      // items.tag === "PartyDresses"
    );
  });
  const shuffledNames = shuffleArray(filteredItems);
  const [noOfElement, setNoOfElement] = useState(8);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };
  // console.log(shuffledNames);
  return (
    <div className="container">
      {" "}
      <div className="font-medium mt-10 bg-slate-100 py-5 relative  capitalize px-5 flex items-center">
        {/* ====> homepage Navigation */}
        <NavLink to="/" className="text-heading">
          <span className="text-sm">HOME</span>
        </NavLink>
        <span className="ml-1 flex items-center">
          <Icon icon="radix-icons:slash" width={20} /> {category}
        </span>
      </div>
      <div className="mt-10 max-w-screen-2xl mx-auto">
        {/* Single Product information section */}
        <section className="">
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-5 md:px-10">
            {/* image section */}
            <div className="main cursor-pointer ">
              <div className="flex justify-center bg-white shadow border p-5">
                <img
                  src={sliderImage ? sliderImage : image}
                  height="300"
                  width="500"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex justify-center mt-5">
                {imageUrls?.map((data, i) => (
                  <div className="w-[100px] h-[70] border mr-px" key={i}>
                    <img
                      // className={sliderData.id === i ? "clicked" : ""}
                      src={data}
                      onClick={() => handleClick(data)}
                      // height='70'
                      // width='100'
                      className="h-full object-contain p-2"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* single product description */}
            <div className="antialiased col-span-2">
              <div className="mt-10">
                <div className="max-w-7xl mx-auto md:px-4  ">
                  <div className="flex flex-col md:flex-row md:mx-4">
                    <div className="md:flex-1 px-4 relative">
                      <h2
                        className="mb-2 leading-tight relative
                 tracking-tight font-bold text-gray-800 capitalize text-xl md:text-xl"
                      >
                        {name}{" "}
                      </h2>

                      <div className="flex flex-wrap gap-5 items-center  my-4">
                        <div
                          className="flex flex-wrap
                   text-sm "
                        >
                          {offerPrice ? (
                            <div
                              className=" rounded-2xl flexCenter bg-[#f5f6fc] 
                      py-1 px-3 mr-5"
                            >
                              <p className="mr-1  flexCenter">
                                <span> Price:</span> <TbCurrencyTaka />{" "}
                                <span className=" font-bold text-gray-600 text-sm">
                                  {" "}
                                  {offerPrice}
                                </span>
                              </p>

                              {offerPercentage > "0" ? (
                                <span className="badge badge-sm indicator-item text-md">
                                  Save {Math.round(offerPercentage)}%
                                </span>
                              ) : (
                                <span className=""></span>
                              )}
                            </div>
                          ) : (
                            <div className="rounded-lg  py-1 flexCenter  ">
                              <p className="mr-1 ">
                                <TbCurrencyTaka />
                              </p>
                              <p className="  text-gray-700 text-sm text-center">
                                {" "}
                                F{oldPrice}
                              </p>
                            </div>
                          )}
                        </div>
                        {offerPrice ? (
                          <div
                            className=" rounded-2xl   flexCenter
                    
                    bg-[#f5f6fc]  "
                          >
                            {offerPercentage > "0" ? (
                              <div
                                className=" py-1 px-2  flex justify-center rounded-2xl items-center 
                          bg-[#f5f6fc]
                         text-gray-700 text-sm  text-center"
                              >
                                <p className="mr-1  flexCenter">
                                  Regular Price: <TbCurrencyTaka className="" />
                                </p>
                                <p className="text-sm font-bold ">
                                  {" "}
                                  {oldPrice}
                                </p>
                              </div>
                            ) : (
                              <div
                                className=" flex py-1 px-2 rounded-2xl  
                          justify-center items-center
                         bg-[#f5f6fc] text-gray-700 text-sm text-center"
                              >
                                <p className=" flexCenter font-bold">
                                  Regular Price: <TbCurrencyTaka />
                                </p>
                                <p className="text-sm font-bold"> {oldPrice}</p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            className=" flexCenter rounded-2xl  py-1 px-2
                         bg-[#f5f6fc] text-gray-700 text-sm text-center"
                          >
                            <p className=" flexCenter font-bold">
                              Regular Price: <TbCurrencyTaka />
                            </p>
                            <p className="text-sm font-bold"> {oldPrice}</p>
                          </div>
                        )}
                        <div
                          className=" flexCenter rounded-2xl  py-1 px-2
                         bg-[#f5f6fc] text-gray-700 text-sm text-center"
                        >
                          <p className=" flexCenter">Product Pin:</p>
                          <p className="text-sm font-bold ml-2">
                            {" "}
                            {productPin}
                          </p>
                        </div>
                        <div
                          className=" flexCenter rounded-2xl  py-1 px-2
                         bg-[#f5f6fc] text-gray-700 text-sm text-center"
                        >
                          <p className=" flexCenter ">In Stock:</p>
                          <p className="text-sm font-bold ml-2">
                            {stock > 0 ? (
                              "In Stock"
                            ) : (
                              <span className="text-red-500 text-sm">
                                Out of Stock
                              </span>
                            )}
                          </p>
                        </div>
                        <div
                          className=" flexCenter rounded-2xl  py-1 px-2
                         bg-[#f5f6fc] text-gray-700 text-sm text-center"
                        >
                          <p className=" flexCenter ">Brand :</p>
                          <p className="text-sm font-bold ml-2 capitalize">
                            {" "}
                            {brand}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="overflow-x-auto mt-5">
                          <table className="table table-compact w-full">
                            <thead>
                              <tr>
                                <th className="bg-white border-none rounded-none tracking-widest">
                                  Key Features
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              {featureDatas?.slice(0, 1).map((item, index) => (
                                <div key={index} className="py-2">
                                  {Object?.entries(item?.features).map(
                                    ([key, value]) => (
                                      <tr key={key}>
                                        <td className="border-none"> {key}</td>
                                        <td className="border-none">{value}</td>
                                      </tr>
                                    )
                                  )}
                                </div>
                              ))}
                            </tbody>
                          </table>
                          <div id="view-more">
                            <HashLink
                              to="#view-more"
                              // onClick={handleClickHide}
                              className="font-bold text-button decoration-sky-500"
                            >
                              View More Info
                            </HashLink>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center items-center gap-2 md:flex-row py-4 space-x-10">
                        <div className="md:w-1/3">
                          {/* qtn count */}

                          <CartAmountToggle
                            count={pdCount}
                            setDecrease={setDecrease}
                            setIncrease={setIncrease}
                          />
                        </div>
                        {/*  Add to Cart btn  */}

                        {profile?.email ? (
                          <>
                            {stock > "0" ? (
                              <button
                                onClick={() => addToCart(product)}
                                type="button"
                                className="p-3 flex items-center rounded bg-gray-900
                           text-white font-semibold hover:bg-button"
                              >
                                <img
                                  className="w-8 mr-4"
                                  src={cart_logo}
                                  alt="cart_logo"
                                />
                                Add to Cart
                              </button>
                            ) : (
                              <button
                                // onClick={() => addToCart(product)}
                                type="button"
                                className="p-3 disabled flex items-center rounded bg-gray-500
                           text-white font-semibold"
                              >
                                <img
                                  className="w-8 mr-4"
                                  src={cart_logo}
                                  alt="cart_logo"
                                />
                                Add to Cart
                              </button>
                            )}
                          </>
                        ) : (
                          <>
                            <Link
                              to="/login"
                              className=" px-4 py-2 rounded-md text-white bg-black hover:bg-button"
                            >
                              Login
                            </Link>
                          </>
                        )}

                        {/* //! End code */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* details, Reviews */}
          </div>
          <section className="bg-slate-100  mt-20" id="view-more">
            <div className="p-5 ">
              <div className=" border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("moreInfo")}
                  className={`${
                    tab === "moreInfo" &&
                    "border-b border-solid border-gray-500"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor`}
                >
                  Description
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={` ${
                    tab === "feedback" &&
                    "border-b border-solid border-gray-500"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>
              <div className="mt-[30px]">
                {tab === "moreInfo" && <ProductMoreInfo product={product} />}
                {tab === "feedback" && <ProductReview product={product} />}
              </div>
            </div>
          </section>
        </section>
      </div>
      {/* related products */}
      <section className="container py-10">
        <h1 className="text-[26px] text-center py-14 font-bold">
          Related Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
          {shuffledNames.map((product) => (
            <ProductDetails
              key={product._id}
              product={product}
            ></ProductDetails>
          ))}
        </div>
        <div className="text-center mt-5">
          <button
            onClick={() => loadMore()}
            className="px-3 py-2 bg-heading  text-white hover:bg-black hover:text-white"
          >
            More products
          </button>
        </div>
      </section>
    </div>
  );
};

export default SingleProductDetails;

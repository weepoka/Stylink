import React, { useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";
import "./SubNavbar.css";
import { FaGreaterThan } from "react-icons/fa";
// import CategoryFilter from "../../Home/Products/CategoryFilter";
// import Desktop from "./../../Home/CategoryProducts/Desktop/Desktop";
import { getCategories } from "../../Api/ApiServices/ApiSerivces";

const SubNavbar = () => {
  const [category, setCategory] = useState([]);
  const [categoriesArray, setCategoriesArray] = useState([]);
  // console.log(categoriesArray);
  useEffect(() => {
    getCategories(setCategory, setCategoriesArray);
  }, []);
  // active class link
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#006fba" : "black",
    };
  };
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
    setSubMenuVisible(true);
  };

  const handleMouseLeave = () => {
    // Keep the submenu open as long as the mouse is over the main button or the submenu
    timeoutRef.current = setTimeout(() => {
      setSubMenuVisible(false);
    }, 300);
  };

  const handleSubMenuEnter = () => {
    // Clear the timeout to prevent hiding the submenu
    clearTimeout(timeoutRef.current);
  };

  const handleSubMenuLeave = () => {
    // Continue with the regular leave logic
    setSubMenuVisible(false);
  };

  useEffect(() => {
    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutRef.current);
  }, []);
  return (
    <>
      <div className="border-b pb-2 sticky  top-0 z-[99999] bg-white">
        {/* <div className="py-5 max-w-screen-2xl mx-auto  text-white  max-sm:hidden sm:hidden md:block ">
          <div className="flexCenter gap-10 z-10 text-gray-900 font-bold w-full ">
            product category list
            <div className=" z-10">
              <div className=" z-10">
                <ul className="flexCenter capitalize  gap-5 lg:gap-10  z-[500]">
                  //!new updated code==>
                  {categoriesArray?.map((item) => (
                    <>
                      <li tabIndex={0} className="dropdown px-3">
                        <Link
                          style={{ navLinkStyles }}
                          to={`category/${item.category}`}
                        >
                          {item.category}
                        </Link>

                        <ul class=" relative dropdown-nav w-[140px] cursor-pointer">
                          {item.subcategories?.map((sub, idx) => (
                            <li className=" w-full px-2  mt-5 " key={idx}>
                              <Link
                                style={{ navLinkStyles }}
                                to={{
                                  pathname: `category/${item.category}`,
                                  search: `?subcategory=${sub}`,
                                }}
                                className="flex items-center cursor-pointer my-2 font-bold"
                              >
                                <span className=" font-bold text-sm">
                                  {sub}
                                </span>
                                <MdOutlineArrowRight className="text-2xl" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div
          className=" container text-white max-sm:hidden
         sm:hidden md:block"
        >
          <div className="flexCenter gap-10 z-10 text-gray-900 font-bold w-full">
            <div className="z-10">
              <div className="z-10">
                <div
                  className="relative inline-block"
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="flexCenter capitalize gap-5 lg:gap-10 z-[500]">
                    {categoriesArray?.map((item) => (
                      <li
                        key={item.category}
                        tabIndex={0}
                        className=" px-3"
                        onMouseEnter={() => handleMouseEnter(item.category)}
                      >
                        <Link
                          style={{ navLinkStyles }}
                          to={`category/${item.category}`}
                        >
                          {item.category}
                        </Link>
                        {subMenuVisible &&
                          hoveredCategory === item.category && (
                            <div
                              className="absolute z-50 mt-2 py-2 bg-white border rounded shadow-lg"
                              onMouseEnter={handleSubMenuEnter}
                              onMouseLeave={handleSubMenuLeave}
                            >
                              {item.subcategories?.map((sub, idx) => (
                                <li className=" w-full px-4  mt-2 " key={idx}>
                                  <Link
                                    style={{ navLinkStyles }}
                                    to={{
                                      pathname: `category/${item.category}`,
                                      search: `?subcategory=${sub}`,
                                    }}
                                    className="flex items-center cursor-pointer
                                     my-2 font-bold  text-gray-800   hover:scale-105 transition duration-300"
                                  >
                                    <span className=" font-bold text-sm ">
                                      {sub}
                                    </span>
                                    <MdOutlineArrowRight className="text-2xl" />
                                  </Link>
                                </li>
                              ))}
                            </div>
                          )}
                      </li>
                    ))}
                  </ul>
                  <div className="">
                    {" "}
                    <ul className="flex">
                      {/* <!--Hoverable Link--> */}
                      <li className="hoverable  ">
                        <Link
                          href="#"
                          className="relative block py-6 px-4 lg:p-6 text-[17px] lg:text-base font-bold text-black hover:text-[#0672b8] "
                        >
                          Brands
                        </Link>
                        <div className="p-3 mega-menu mb-10 sm:mb-0  overflow-y-auto h-[90vh] md:h-[40vh] ">
                          <div className="max-w-screen-2xl mx-auto w-full flex flex-wrap justify-between bg-white shadow-xl px-5 py-2">
                            <div className="w-full text-black mb-0">
                              <h2 className="font-bold text-2xl text-start ">
                                All Brands
                              </h2>
                              <div className="w-20 mb-6 border-b border-primaryBrands dark:border-gray-400"></div>
                            </div>
                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6">
                              <div className="">
                                <h3 className="font-bold text-xl text-primaryBrands text-bold px-1">
                                  #
                                </h3>
                                <div className="w-5 mb-6 border-b border-secondaryBrands dark:border-gray-400"></div>
                              </div>
                              <ul className="text-secondaryBrands ">
                                <li className="hover:text-primaryBrands mb-1">
                                  <Link to="category">Sunrise</Link>{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    25
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  Lipton{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    256
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  Himalaya{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    325
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  ponds{" "}
                                  <span className="px-1 text-black text-[13px] py-[1px] rounded bg-pink-200">
                                    125
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  lotus{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    400
                                  </span>{" "}
                                </li>
                              </ul>
                            </ul>
                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6">
                              <div className="">
                                <h3 className="font-bold text-xl text-primaryBrands text-bold px-1">
                                  #
                                </h3>
                                <div className="w-5 mb-6 border-b border-secondaryBrands dark:border-gray-400"></div>
                              </div>
                              <ul className="text-secondaryBrands ">
                                <li className="hover:text-primaryBrands mb-1">
                                  <Link>Sunrise</Link>{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    25
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  Lipton{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    256
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  Himalaya{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    325
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  ponds{" "}
                                  <span className="px-1 text-black text-[13px] py-[1px] rounded bg-pink-200">
                                    125
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  lotus{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    400
                                  </span>{" "}
                                </li>
                              </ul>
                            </ul>
                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6">
                              <div className="">
                                <h3 className="font-bold text-xl text-primaryBrands text-bold px-1">
                                  #
                                </h3>
                                <div className="w-5 mb-6 border-b border-secondaryBrands dark:border-gray-400"></div>
                              </div>
                              <ul className="text-secondaryBrands ">
                                <li className="hover:text-primaryBrands mb-1">
                                  <Link>Sunrise</Link>{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    25
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  <Link> Lipton </Link>
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    256
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  Himalaya{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    325
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  ponds{" "}
                                  <span className="px-1 text-black text-[13px] py-[1px] rounded bg-pink-200">
                                    125
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  lotus{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    400
                                  </span>{" "}
                                </li>
                              </ul>
                            </ul>
                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6">
                              <div className="">
                                <h3 className="font-bold text-xl text-primaryBrands text-bold px-1">
                                  #
                                </h3>
                                <div className="w-5 mb-6 border-b border-secondaryBrands dark:border-gray-400"></div>
                              </div>
                              <ul className="text-secondaryBrands ">
                                <li className="hover:text-primaryBrands mb-1">
                                  <Link>Sunrise</Link>{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    25
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  Lipton{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    256
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  Himalaya{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    325
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  ponds{" "}
                                  <span className="px-1 text-black text-[13px] py-[1px] rounded bg-pink-200">
                                    125
                                  </span>{" "}
                                </li>
                                <li className="hover:text-primaryBrands mb-1">
                                  lotus{" "}
                                  <span className="px-1 text-black py-[1px] text-[13px] rounded bg-pink-200">
                                    400
                                  </span>{" "}
                                </li>
                              </ul>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //* first div end */}

        {/* new code for sub menu */}

        {/* //* Hamburger menu div start */}
        <div className="navbar  bg-base-100  md:hidden ">
          {/* //! new dynamic line */}
          <div className="flex-none z-10  w-full">
            <div className="dropdown ">
              <label tabIndex={0} className=" btn-circle cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3  p-2
                 shadow bg-base-100 rounded-box w-52"
              >
                {/* //*dropdown menu started */}
                {/* {category?.map((item, index) => (
                  <li tabIndex={0} key="index" className="flex">
                    <Link to={`category/${item}`} className="p-0, m-0">
                      <p className="flexCenter">
                        {item}
                        <span>
                          <MdOutlineArrowRight className="text-xl" />
                        </span>
                      </p>
                    </Link>
                    <span className="dropHidden absolute left-[80%] ">
                      {" "}
                      <FaGreaterThan className="text-white" />
                    </span>
                   
                  </li>
                ))} */}
                {/* //!new updated code==> */}
                {categoriesArray?.map((item, index) => (
                  <li tabIndex={0} key={index} className="flex">
                    <Link to={`category/${item.category}`} className="p-0, m-0">
                      <p className="flexCenter">
                        {item.category}
                        <span>
                          <MdOutlineArrowRight className="text-xl" />
                        </span>
                      </p>
                    </Link>
                    <span className="dropHidden absolute left-[80%] ">
                      {" "}
                      <FaGreaterThan className="text-white" />
                    </span>
                    <ul className="w-full bg-base-100 ">
                      {item.subcategories?.map((sub, idx) => (
                        <li
                          className=" w-full text-center hover:bg-gray-500 hover:text-white"
                          key={idx}
                        >
                          <Link
                            style={{ navLinkStyles }}
                            to={{
                              pathname: `category/${item.category}`,
                              search: `?subcategory=${sub}`,
                            }}
                            className="flex items-center cursor-pointer my-2 font-bold"
                            // className="xl:px-10"
                          >
                            <span className=" font-bold text-sm">{sub}</span>
                            <MdOutlineArrowRight className="text-2xl" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;

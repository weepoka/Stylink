import React, { useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";
import "./SubNavbar.css";
import { FaCaretDown, FaGreaterThan } from "react-icons/fa";
// import CategoryFilter from "../../Home/Products/CategoryFilter";
// import Desktop from "./../../Home/CategoryProducts/Desktop/Desktop";
import { getCategories } from "../../Api/ApiServices/ApiSerivces";
import { Icon } from "@iconify/react";

const SubNavbar = () => {
  const [category, setCategory] = useState([]);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [openNav, setOpenNav] = React.useState(false);
  console.log(categoriesArray);
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

  return (
    <>
      <div className="border-b py-5 sticky   top-0 z-[99999] bg-white">
        {/* desktop version subnav start */}
        <nav className="container  ">
          <div className="flex items-center lg:justify-center  text-blue-gray-900">
            <div className="flex items-center gap-10">
              <div className="mr-4 hidden lg:block">
                <ul
                  className="mt-2 mb-4 flex flex-col gap-4 md:mb-0 md:mt-0 md:flex-row
                 md:items-center md:gap-6"
                >
                  {categoriesArray?.map((item) => (
                    <li key={item.category} className=" ">
                      <Link
                        style={{ navLinkStyles }}
                        to={`category/${item.category}`}
                      >
                        <div className="relative   group cursor-pointer ">
                          <div className="flex items-center capitalize justify-center gap-2 hover:text-heading font-semibold">
                            {item.category} <FaCaretDown />
                          </div>
                          <div
                            className="absolute w-[160px] p-3 top-10 text-center invisible 
            group-hover:visible group-hover:transition-all transition-all duration-200 group-hover:duration-200
             bg-white rounded shadow"
                          >
                            {item.subcategories?.map((sub, idx) => (
                              <li key={idx}>
                                <div className="relative group2   ">
                                  <div className="hover:text-button text-sm flex items-center py-1">
                                    {sub}{" "}
                                    <MdOutlineArrowRight className="text-2xl" />
                                  </div>
                                  <div
                                    className="absolute w-[150px] top-0 left-[140px]  invisible group2-hover:visible
                           group-hover:transition-all transition-all duration-200 group-hover:duration-200 bg-white rounded shadow"
                                  >
                                    <div className="hover:text-button py-1">
                                      Item1
                                    </div>
                                    <div className="hover:text-button py-1">
                                      Item2
                                    </div>
                                    <div className="hover:text-button py-1">
                                      Item3
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                // h-6 w-6
                className="ml-auto  p-4 text-inherit cursor-pointer
               hover:bg-transparent focus:bg-transparent
                active:bg-transparent lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  // <Icon icon="basil:cross-outline" color="red" width={45} />
                  ""
                ) : (
                  <Icon icon="quill:hamburger" color="#000" width={45} />
                )}
              </div>
            </div>
            <div
              className={
                openNav
                  ? `fixed top-[0%] w-[100%] md:hidden flex justify-center items-start flex-col text-center h-screen
                   bg-[#ecf0f3] left-0 right-0 ease-in-out duration-500`
                  : "fixed top-[-100%] left-0 right-0  p-10 h-screen bg-[#ecf0f3] ease-in-out duration-500"
              }
            >
              <div className="flex  items-center absolute top-10 right-10 justify-end">
                <div
                  onClick={() => setOpenNav(!openNav)}
                  className="cursor-pointer"
                >
                  {/* <Icon icon="basil:cross-outline" color="red" width={45} /> */}
                  <Icon icon="game-icons:rose" color="red" width={45} />
                </div>
              </div>
              {/* mobile menu links */}
              <div className="px-8 ">
                <ul
                  className="mt-2 mb-4 
                  flex flex-col
                   gap-4
                   "
                >
                  {categoriesArray?.map((item) => (
                    <li key={item.category} className=" ">
                      <Link
                        style={{ navLinkStyles }}
                        to={`category/${item.category}`}
                        onClick={() => setOpenNav(false)}
                      >
                        <div className="relative   group cursor-pointer ">
                          <div
                            className="flex 
                             capitalize 
                          justify-start gap-2 hover:text-heading 
                          font-semibold"
                          >
                            {item.category} <FaCaretDown />
                          </div>
                          <div
                            className="absolute w-[160px] p-3 top-6
                            text-center invisible  left-8  z-[99]
            group-hover:visible group-hover:transition-all
             transition-all duration-200 group-hover:duration-200
             bg-white rounded shadow"
                          >
                            {item.subcategories?.map((sub, idx) => (
                              <li key={idx}>
                                <div className="relative group2   ">
                                  <div className="hover:text-button text-sm flex items-center py-1">
                                    {sub}{" "}
                                    <MdOutlineArrowRight className="text-2xl" />
                                  </div>
                                  <div
                                    className="absolute w-[150px] top-0 left-[140px]  invisible group2-hover:visible
                           group-hover:transition-all transition-all duration-200 group-hover:duration-200 bg-white rounded shadow"
                                  >
                                    <div className="hover:text-button py-1">
                                      Item1
                                    </div>
                                    <div className="hover:text-button py-1">
                                      Item2
                                    </div>
                                    <div className="hover:text-button py-1">
                                      Item3
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 px-8 mt-5">
                <Link href="">
                  <Icon icon="simple-icons:youtube" color="red" width={30} />
                </Link>
                <Link href="">
                  <Icon icon="logos:facebook" color="red" width={30} />
                </Link>
                <Link href="">
                  <Icon icon="bi:instagram" color="red" width={30} />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SubNavbar;

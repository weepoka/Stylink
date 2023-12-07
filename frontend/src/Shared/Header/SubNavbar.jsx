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
      <div className="border-b py-5 sticky   top-0 z-[99999] bg-white">
        {/* <div
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
                                     my-2 font-bold  text-gray-800   hover:scale-105 transition
                                      duration-300"
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
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* //* first div end */}
        <nav className="container  ">
          <div className="flex items-center lg:justify-center  text-blue-gray-900">
            <div className="flex items-center gap-10">
              <div className="mr-4 hidden md:block">
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
                  {/* <li>
                    <div className="relative w-[110px] group cursor-pointer ">
                      <div className="flex items-center justify-center gap-2 hover:text-heading font-semibold">
                        Menu <FaCaretDown />{" "}
                      </div>
                      <div
                        className="absolute w-[110px] top-10 text-center invisible 
            group-hover:visible group-hover:transition-all transition-all duration-200 group-hover:duration-200
             bg-white rounded shadow"
                      >
                        <div className="hover:text-button py-1">Item1</div>
                        <div className="relative group2 ">
                          <div className="hover:text-button py-1">Menu</div>
                          <div
                            className="absolute w-[110px] top-0 left-[110px]  invisible group2-hover:visible
                           group-hover:transition-all transition-all duration-200 group-hover:duration-200 bg-white rounded shadow"
                          >
                            <div className="hover:text-button py-1">Item1</div>
                            <div className="hover:text-button py-1">Item2</div>
                            <div className="hover:text-button py-1">Item3</div>
                          </div>
                        </div>
                        <div className="hover:text-button py-1">Item3</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="relative w-[110px] group cursor-pointer ">
                      <div className="flex items-center justify-center gap-2 hover:text-heading font-semibold">
                        Menu <FaCaretDown />{" "}
                      </div>
                      <div
                        className="absolute w-[110px] top-10 text-center invisible 
            group-hover:visible group-hover:transition-all transition-all duration-200 group-hover:duration-200
             bg-white rounded shadow"
                      >
                        <div className="hover:text-button py-1">Item1</div>
                        <div className="relative group2 ">
                          <div className="hover:text-button py-1">Menu</div>
                          <div
                            className="absolute w-[110px] top-0 left-[110px]  invisible group2-hover:visible
                           group-hover:transition-all transition-all duration-200 group-hover:duration-200 bg-white rounded shadow"
                          >
                            <div className="hover:text-button py-1">Item1</div>
                            <div className="hover:text-button py-1">Item2</div>
                            <div className="hover:text-button py-1">Item3</div>
                          </div>
                        </div>
                        <div className="hover:text-button py-1">Item3</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="relative w-[110px] group cursor-pointer ">
                      <div className="flex items-center justify-center gap-2 hover:text-heading font-semibold">
                        Menu <FaCaretDown />{" "}
                      </div>
                      <div
                        className="absolute w-[110px] top-10 text-center invisible 
            group-hover:visible group-hover:transition-all transition-all duration-200 group-hover:duration-200
             bg-white rounded shadow"
                      >
                        <div className="hover:text-button py-1">Item1</div>
                        <div className="relative group2 ">
                          <div className="hover:text-button py-1">Menu</div>
                          <div
                            className="absolute w-[110px] top-0 left-[110px]  invisible group2-hover:visible
                           group-hover:transition-all transition-all duration-200 group-hover:duration-200 bg-white rounded shadow"
                          >
                            <div className="hover:text-button py-1">Item1</div>
                            <div className="hover:text-button py-1">Item2</div>
                            <div className="hover:text-button py-1">Item3</div>
                          </div>
                        </div>
                        <div className="hover:text-button py-1">Item3</div>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>

              <div
                // h-6 w-6
                className="ml-auto  p-4 text-inherit cursor-pointer
               hover:bg-transparent focus:bg-transparent
                active:bg-transparent md:hidden"
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
                  ? "fixed top-[0%] w-[100%] md:hidden flexCenter flex-col text-center h-screen bg-[#ecf0f3] left-0 right-0 ease-in-out duration-500"
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
              <div className="mr-8 ">
                <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  {/* {links.map((link, i) => (
                  <li key={i}>
                    {" "}
                    <Link
                      href={`${link.href}`}
                      onClick={() => setOpenNav(false)}
                      className={`${
                        link?.href === currentPath
                          ? "text-secondary"
                          : "text-primary"
                      }  hover:text-secondary text-xl transition-colors`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))} */}

                  <li className="py-2">
                    <div className="relative w-[110px] group cursor-pointer ">
                      <div className="flex items-center justify-center gap-2 hover:text-button font-bold">
                        Menu <FaCaretDown />{" "}
                      </div>
                      <div
                        className="absolute w-[100px] text-center invisible left-14  z-[99]
            group-hover:visible group-hover:transition-all  transition-all duration-200 group-hover:duration-200 bg-white rounded shadow"
                      >
                        <div className="hover:text-button py-1">Item1</div>
                        <div className="relative group2 ">
                          <div className="hover:text-button py-1">Menu</div>
                          <div
                            className="absolute w-[100px] top-0 left-[100px] z-[99]  
                          invisible group2-hover:visible group-hover:transition-all transition-all
                           duration-200 group-hover:duration-200 bg-white rounded shadow"
                          >
                            <div className="hover:text-button py-1">Item1</div>
                            <div className="hover:text-button py-1">Item2</div>
                            <div className="hover:text-button py-1">Item3</div>
                          </div>
                        </div>
                        <div className="hover:text-button py-1">Item3</div>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="relative w-[110px] group cursor-pointer ">
                      <div className="flex items-center justify-center gap-2 hover:text-button font-bold">
                        Menu <FaCaretDown />{" "}
                      </div>
                      <div
                        className="absolute w-[100px] text-center invisible left-14  z-[99]
            group-hover:visible group-hover:transition-all  transition-all duration-200 group-hover:duration-200 bg-white
            rounded shadow"
                      >
                        <div className="hover:text-button py-1">Item1</div>
                        <div className="relative group2 ">
                          <div className="hover:text-button py-1">Menu</div>
                          <div
                            className="absolute w-[100px] top-0 left-[100px] z-[99]  
                          invisible group2-hover:visible group-hover:transition-all transition-all
                           duration-200 group-hover:duration-200 bg-white shadow"
                          >
                            <div className="hover:text-button py-1">Item1</div>
                            <div className="hover:text-button py-1">Item2</div>
                            <div className="hover:text-button py-1">Item3</div>
                          </div>
                        </div>
                        <div className="hover:text-button py-1">Item3</div>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="relative w-[110px] group cursor-pointer ">
                      <div className="flex items-center justify-center gap-2 hover:text-button font-bold">
                        Menu <FaCaretDown />{" "}
                      </div>
                      <div
                        className="absolute w-[100px] text-center invisible left-14  z-[99]
            group-hover:visible group-hover:transition-all  transition-all duration-200 group-hover:duration-200 bg-white shadow"
                      >
                        <div className="hover:text-button py-1">Item1</div>
                        <div className="relative group2 ">
                          <div className="hover:text-button py-1">Menu</div>
                          <div
                            className="absolute w-[100px] top-0 left-[100px] z-[99]  
                          invisible group2-hover:visible group-hover:transition-all transition-all
                           duration-200 group-hover:duration-200 bg-white shadow"
                          >
                            <div className="hover:text-button py-1">Item1</div>
                            <div className="hover:text-button py-1">Item2</div>
                            <div className="hover:text-button py-1">Item3</div>
                          </div>
                        </div>
                        <div className="hover:text-button py-1">Item3</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex gap-4  mt-5">
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

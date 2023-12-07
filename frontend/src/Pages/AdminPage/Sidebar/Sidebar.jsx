import React, { useContext, useState } from "react";
import { TbShoppingBag } from "react-icons/tb";
import { HiMenuAlt3 } from "react-icons/hi";
import { FcImageFile } from "react-icons/fc";
import { FaFileImage } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { BiCartAdd } from "react-icons/bi";
import { BsCartCheck, BsEye } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../../Api/AuthProvider/AuthProvider";
import { logOut } from "../../../Api/ApiServices/Auth";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { profile } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };
  const menus = [
    { name: "Dashboard", link: "/admin/dashboard", icon: MdOutlineDashboard },
    { name: "Orders", link: "/admin/orders", icon: BsCartCheck },
    { name: "Products", link: "/admin/products", icon: TbShoppingBag },
    { name: "Banner", link: "/admin/adminBanners", icon: FaFileImage },
    {
      name: "Add Products",
      link: "/admin/addProducts",
      icon: BiCartAdd,
      margin: true,
    },
    { name: "Add Banner", link: "/admin/addBanner", icon: FcImageFile },
    // { name: "File Manager", link: "/", icon: FiFolder },
    // { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Users", link: "/admin/users", icon: AiOutlineUser, margin: true },
    {
      name: "Account Setting",
      link: "/profile/accountSettings",
      icon: RiSettings4Line,
    },
  ];
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (menuIndex) => {
    setActiveLink(menuIndex);
    // Additional logic or actions on link click if needed
  };
  return (
    <div>
      {" "}
      <section className="flex gap-6">
        <div
          className={`bg-[#f9fafb] min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-900 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex-col border-b  md:flexCenter px-4 ">
            <div className="flexCenter">
              <img
                src={profile?.image}
                alt=""
                className={` ${
                  open ? "w-12 h-12" : "w-7 h-7"
                } rounded-full dark:bg-gray-500 `}
              />
            </div>
            <div className="px-1 pb-2">
              <h2
                className={`${
                  open ? "text-lg  text-center py-2" : "text-sm py-2 hidden"
                }`}
              >
                Welcome
              </h2>
              <h2
                className={`${
                  open
                    ? "text-lg text-center font-semibold py-1"
                    : "text-sm py-2"
                }`}
              >
                {profile?.name}
              </h2>
              <p className="text-center">
                <Link
                  to="/profile"
                  title="Profile"
                  className={`${
                    open
                      ? "text-lg text-center font-semibold py-1"
                      : "text-sm text-center py-2"
                  }`}
                >
                  {open ? "   View profile" : <BsEye />}
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <NavLink
                to={menu?.link}
                key={i}
                onClick={() => handleLinkClick(i)}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2
                 hover:bg-adminBg rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre
                   text-gray-900 rounded-md drop-shadow-lg 
                   px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                    group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </NavLink>
            ))}
          </div>
          <div
            onClick={handleLogout}
            className="p-2 flex items-start cursor-pointer font-semibold  gap-3 pt-5"
          >
            <IoIosLogOut size={22} />{" "}
            {open ? <p className="text-sm">logout</p> : ""}
          </div>
        </div>
        {/* <div className="m-3 text-xl text-gray-900 font-semibold">
          REACT TAILWIND
        </div> */}
      </section>
    </div>
  );
};

export default Sidebar;

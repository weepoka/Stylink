import React, { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbShoppingBag } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../Api/AuthProvider/AuthProvider";
import { logOut } from "../../../Api/ApiServices/Auth";
const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/admin/dashboard", icon: MdOutlineDashboard },
    { name: "Orders", link: "/admin/orders", icon: BsCartCheck },
    { name: "Products", link: "/admin/products", icon: TbShoppingBag },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  const { profile } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
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
          <div className="flex-col md:flex justify-center items-center px-4 ">
            <div className="flex justify-center items-center">
              <img
                src={profile?.image}
                alt=""
                className={` ${
                  open ? "w-12 h-12" : "w-7 h-7"
                } rounded-full dark:bg-gray-500 `}
              />
            </div>
            <div className="px-1">
              <h2
                className={`${
                  open ? "text-lg  text-center py-2" : "text-sm py-2"
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
                  className={`${
                    open
                      ? "text-lg text-center font-semibold py-1"
                      : "text-sm text-center py-2"
                  }`}
                >
                  View profile
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-adminBg rounded-md`}
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
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
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
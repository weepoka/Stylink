import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams, NavLink, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import {
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiTwotoneDelete,
} from "react-icons/ai";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/Logo/stylink.png";
import { remove } from "../../Redux/Store/cartSlice";
import { AuthContext } from "../../Api/AuthProvider/AuthProvider";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.cartTotal);
  // console.log({ total });
  const [isDivVisible, setIsDivVisible] = useState(false);

  const toggleDiv = () => {
    setIsDivVisible(!isDivVisible);
  };
  const { profile, setProfile } = useContext(AuthContext);

  const { product } = useContext(AuthContext);

  const [searchParamsF] = useSearchParams();
  const searchTerm =
    searchParamsF.get("search") === null ? "" : searchParamsF.get("search");

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  const handleLogOut = () => {
    logOut();
    setProfile(null);
  };

  //!========> Popup menu item <=============
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //! =======> Delet Product <=========
  const removePd = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <div className=" bg-white z-[99999] py-1 border-b text-white  ">
        <div className="lg:block hidden container ">
          <div className=" ">
            <div className="flexBetween  mx-auto  gap-5 ">
              <div>
                <Link to="/" className="normal-case text-2xl font-bold">
                  <img src={logo} alt="" className="w-32" />
                </Link>
              </div>

              <div className="lg:block hidden ">
                <div className="lg:flex mt-5 xl:w-96 w-full relative ">
                  <input
                    type="search"
                    name="search"
                    value={value}
                    onChange={onChange}
                    className="border-2 border-gray-400 px-5  pr-12 py-[6px] 
                    focus:outline-none w-full text-gray-900 rounded-full"
                    placeholder="Search for products..."
                  />
                  <Link
                    to={`/category`}
                    className="  text-gray-700 text-[26px]   absolute right-[12px] 
                     top-[55%]  -translate-y-1/2"
                  >
                    <button onClick={() => onSearch(value)}>
                      <BsSearch size={22} />
                    </button>
                  </Link>
                </div>
                <div className="search1 ">
                  <div className="dropdown1 md:w-[382px] mt-5  overflow-y-auto  rounded-md ">
                    {product
                      .filter((item) => {
                        const searchTerm = value.toLowerCase();
                        const fullName = item.name.toLowerCase();

                        return (
                          searchTerm &&
                          fullName.includes(searchTerm.toLowerCase()) &&
                          fullName !== searchTerm
                        );
                      })
                      // .slice(0, 10)
                      .map((item) => (
                        <Link
                          key={item._id}
                          to={`/SingleProductDetails/${item._id}`}
                        >
                          <div
                            onClick={() => onSearch(item.name)}
                            className="dropdown1-row "
                            key={item._id}
                          >
                            <div className="flex border-b border-b-gray-300 ">
                              <img
                                src={item.image}
                                alt=""
                                className="w-10 mr-3 ml-3 py-3"
                              />
                              <div className=" ml-3 font-bold text-gray-900 py-3">
                                {" "}
                                {item.name} <br />
                                <span className="text-red-500 flex items-center">
                                  <TbCurrencyTaka />{" "}
                                  {item.offerPrice
                                    ? item.offerPrice
                                    : item.oldPrice}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              <div className="lg:block hidden">
                <div className="flexCenter ">
                  <NavLink to="/profile" className="ml-5">
                    {profile?._id && (
                      <div className="flexCenter gap-3  mr-3">
                        {profile?.image ? (
                          <img
                            src={profile.image}
                            className="w-[40px] h-[40px] rounded-full bg-white border"
                            alt="profile img"
                            title="profile img"
                          />
                        ) : (
                          <FaUserAlt
                            className="text-black  text-center text-md
                           items-center "
                          ></FaUserAlt>
                        )}
                        <NavLink
                          to="/profile"
                          className="text-black  min-w-max"
                        >
                          {profile?.name}
                        </NavLink>
                        {profile?.isAdmin && profile?.role === "admin" && (
                          <div className="ml-4 bg-primaryBrands rounded p-2">
                            <NavLink to="/admin">Dashboard</NavLink>
                          </div>
                        )}
                      </div>
                    )}
                  </NavLink>
                  <div className="flexCenter">
                    <Link tabIndex={0} className=" text-white mr-5 ">
                      {profile?.email ? (
                        <div>
                          <span
                            onClick={handleLogOut}
                            className="bg-button px-2 py-2 rounded-full"
                          >
                            logout
                          </span>
                        </div>
                      ) : (
                        <div className="flexCenter gap-4 md:gap-8  ">
                          <div className="md:flexCenter  gap-3 hidden">
                            <div
                              className="rounded-full border-2
                               border-gray-900 text-gray-500 text-[32px] w-[40px]
            h-[40px] grid place-items-center
            "
                            >
                              <AiOutlineUser
                                size={25}
                                className="text-gray-900"
                              />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">
                                <Link to="/login">Account</Link>
                              </p>
                              <p className="flex items-center gap-1 text-gray-900">
                                <Link to="/signup">Registration</Link> Or
                                <Link to="/login">Login</Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-[32px]  relative">
                <Link to="/cart">
                  <AiOutlineShoppingCart color="#000" />
                  <div
                    className="absolute top-[-15px] right-[-10px] bg-primary
     w-[25px] h-[25px] rounded-full text-white
      text-[14px] grid place-items-center"
                  >
                    {items?.length}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* mobile part */}
        <div className="block lg:hidden">
          <div
            className="grid grid-cols-1 lg:grid-cols-4 place-content-center 
        place-items-center items-center mb-2 gap-3"
          >
            <div className=" lg:col-span-2">
              <Link to="/" className="normal-case text-2xl font-bold">
                <img src={logo} alt="" className="w-36 " />
              </Link>
            </div>
            {/* //^ ========>Profile section */}
            <div className=" lg:col-span-2">
              <div className=" flex-col flexCenter">
                {profile?.image ? (
                  <img
                    src={profile?.image}
                    className="w-[70px] h-[70px] rounded-full"
                    alt="profile"
                    title="profile img"
                  />
                ) : (
                  <FaUserAlt
                    className=" text-black  text-center text-xl hidden
                   items-center "
                  ></FaUserAlt>
                )}
                <NavLink to="/profile" className="flexCenter">
                  {profile?._id && (
                    <div className="flexCenter gap-2  lg:mr-3">
                      <div className="flex flex-col">
                        <div className=" flex-col flexCenter gap-2">
                          <div className="pt-2">
                            <NavLink
                              to="/profile"
                              className=" min-w-max text-black   capitalize"
                            >
                              {profile?.name}
                            </NavLink>
                          </div>
                          <div className=" gap-5 flexCenter pb-3">
                            {profile?.isAdmin && profile?.role === "admin" && (
                              <div className="lg:ml-4 bg-secondary rounded px-2 py-1 ">
                                <NavLink to="/admin">Dashboard</NavLink>
                              </div>
                            )}
                            <div className="">
                              {profile?.email ? (
                                <div>
                                  <NavLink
                                    className="bg-blue-500 py-[6px] px-2   rounded"
                                    onClick={handleLogOut}
                                  >
                                    logout
                                  </NavLink>
                                </div>
                              ) : (
                                <div className="py-3 flex justify-center w-10 z-[9999]">
                                  <div className="flex gap-4 md:gap-8 items-center  ">
                                    <div className="flex  gap-3 ">
                                      <div
                                        className="rounded-full border-2 border-gray-600 text-gray-500 text-[32px] w-[50px]
                      h-[50px] grid place-items-center
                      "
                                      >
                                        <AiOutlineUser className="text-gray-600" />
                                      </div>
                                      <div>
                                        <p className="font-bold text-gray-600">
                                          <Link to="/login">Account</Link>
                                        </p>
                                        <p
                                          className="flex items-center 
                                        gap-1 text-gray-600"
                                        >
                                          <Link to="/signup">Registration</Link>{" "}
                                          Or
                                          <Link to="/login">Login</Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </NavLink>
              </div>
            </div>
          </div>

          <div
            className="grid  place-content-center pb-2 
        lg:pb-0 items-center gap-5"
          >
            <div className="">
              {/* //~ search bar */}
              <div className="flex  xl:w-96 w-full ">
                <input
                  type="search"
                  name="search"
                  value={value}
                  onChange={onChange}
                  className="border-2 border-gray-50 px-6 py-2 focus:outline-none w-full text-gray-700"
                  placeholder="Search for products..."
                />
                <Link
                  to={`/searchProduct`}
                  className="bg-[#15415e] text-white text-[26px]  grid place-items-center px-4"
                >
                  <button onClick={() => onSearch(value)}>
                    <BsSearch />
                  </button>
                </Link>
              </div>
              <div className="search1">
                {/* //!==========>Search bar dropdown section */}
                <div className="dropdown1 md:w-[380px] w- mt-12">
                  {product
                    ?.filter((item) => {
                      const searchTerm = value.toLowerCase();
                      const fullName = item.name.toLowerCase();

                      return (
                        searchTerm &&
                        fullName.includes(searchTerm.toLowerCase()) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((item) => (
                      <Link
                        to={`/SingleProductDetails/${item._id}`}
                        key={item._id}
                      >
                        <div
                          onClick={() => onSearch(item.name)}
                          className="dropdown1-row"
                          key={item._id}
                        >
                          <div className="flex border-b border-b-gray-300 ">
                            <img
                              src={item.image}
                              alt=""
                              className="w-10 mr-3 ml-3 py-3"
                            />
                            <div className=" ml-3 font-bold text-gray-900 py-3">
                              {" "}
                              {item.name} <br />
                              <span className="text-red-500 flex items-center">
                                <TbCurrencyTaka /> {item.oldPrice}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //!Cart Item List */}
        <div className="fixed top-[45%] right-2 z-[9999] rounded bg-gray-300 px-3 py-2">
          <div className="flex flex-col gap-2 ">
            <div onClick={toggleDiv} className="relative cursor-pointer">
              <HiOutlineShoppingBag size={25} color="#403bf4" />
              <p
                className=" text-white font-bold 
              flexCenter text-[12px] lg:text-[14px]"
              >
                Tk. {total}
              </p>
              <div className="bg-[#403bf4] rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                {items.length ? items.length : 0}
              </div>
            </div>

            {isDivVisible && (
              <div className="absolute right-10 -top-0 z-[999] bg-[#f8f8f8] ">
                {items?.length ? (
                  <div className="max-w-md mx-auto p-2 ">
                    <AiOutlineClose
                      size={20}
                      onClick={() => setIsDivVisible(false)}
                      className="absolute top-2 right-2 fill-black hover:fill-[#403bf4]
                    hover:scale-125 duration-700 cursor-pointer"
                    />

                    <div className="mt-5  ">
                      <div>
                        <div
                          className="flex font-bold text-md px-5 border-b-2
                         border-b-gray-900 pb-3"
                        >
                          <h2>Photo</h2>
                          <h2 className="pl-[40px]">Category Name</h2>
                        </div>
                        <div
                          style={{
                            width: 250,
                            height: 250,
                            color: "blue",
                          }}
                          className="overflow-y-auto"
                        >
                          <div className="z-[9999999]">
                            {items?.map((e) => {
                              console.log(e.img);
                              return (
                                <>
                                  <div
                                    key={e?._id}
                                    className="flexCenter p-5 border-b z-[99999]"
                                  >
                                    <div className="flexCenter ">
                                      <NavLink to="cart" onClick={handleClose}>
                                        <img
                                          className="object-contain w-20 "
                                          src={e?.item?.image}
                                          alt="pic"
                                        />
                                      </NavLink>
                                    </div>
                                    <div className="mx-5 sm:mr-0 px-2 py-3 w-full bg-slate-50 rounded ">
                                      <p className="font-semibold">
                                        {e?.item?.name}
                                      </p>
                                      <p>
                                        Price:{" "}
                                        <span className="text-sm">৳</span>{" "}
                                        {e?.item?.offerPrice
                                          ? e?.item?.offerPrice
                                          : e?.item?.oldPrice}
                                      </p>

                                      <div className="flex justify-end">
                                        <p
                                          onClick={() => removePd(e)}
                                          className="mr-5"
                                        >
                                          <AiTwotoneDelete className="fill-red-600 cursor-pointer text-xl " />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                            {/* </Scrollbars> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="py-2 text-center text-xl font-semibold">
                      Total : {total}
                    </p>
                    <div className="">
                      <NavLink to="cart">
                        <button className="inline-block my-1 p-2 w-full bg-[#403bf4] text-white duration-700 hover:bg-[#403bf4] hover:rounded-3xl">
                          View Cart
                        </button>
                      </NavLink>

                      <NavLink to="/">
                        <button className="p-2 w-full bg-[#605bf1] text-white duration-700  hover:rounded-3xl">
                          Home
                        </button>
                      </NavLink>
                    </div>
                  </div>
                ) : (
                  <div className="flexCenter p-2 z-[9999999] w-32">
                    <AiOutlineClose
                      onClick={() => setIsDivVisible(false)}
                      className="absolute top-2 right-2 fill-black
                     hover:fill-red-600 hover:scale-125 duration-700 cursor-pointer"
                    />
                    <p className="md:text-lg text-red-500 md:font-semibold">
                      Your Cart is Empty !
                    </p>
                    <FaCartShopping />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

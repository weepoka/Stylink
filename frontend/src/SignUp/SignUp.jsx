import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { BsEye, BsEyeSlash, BsFillTelephoneFill } from "react-icons/bs";
import { FaDatabase, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/Logo/stylink.png";

import { toast } from "react-hot-toast";

import { userRegister } from "../Api/ApiServices/Auth";
import Loading from "../Component/Loading/Loading";
const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  // const { createUser, updateUserProfile, verifyEMail } =
  //   useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/login";
  //create a state for terms and conditions
  const [accepted, setAccepted] = useState(false);
  const userInfo = {
    name,
    email,
    password,
    confirmPassword,
    phone: Number(phone),
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(userInfo);

    if (password !== confirmPassword) {
      return setError("confirm password does not match");
    }

    userRegister(userInfo, setError, toast, setSuccess, setLoading);
  };
  const handleAccepted = (event) => {
    console.log(event.target.checked);
    setAccepted(event.target.checked);
  };
  const [showPassword, setShowPassword] = useState(false);
  console.log(showPassword);
  const handlePasswordToggle = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };
  return (
    <>
      <section className=" font-poppins">
        <div className="flex items-center justify-center h-screen mx-auto max-w-7xl">
          <div className="flex-1">
            <div className="flex flex-wrap ">
              <div className="w-full py-6 bg-gray-100 shadow-md lg:py-7 lg:w-1/2 dark:bg-gray-900">
                <div className="max-w-md mx-auto">
                  <div className="px-4 my-7 ">
                    <div className="mb-7">
                      <span className="flex items-center justify-center w-20 h-20 mx-auto text-gray-900 bg-green-600 rounded-lg dark:bg-green-600 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="text-gray-200 bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <h2 className="mb-3 text-2xl font-bold text-center text-gray-800 dark:text-gray-400">
                      SignUp your Account
                    </h2>
                    <p className="text-base text-center text-gray-500 mb-7 dark:text-gray-400">
                      Please fill your credentials
                    </p>
                    <form onSubmit={handleSignUp} className="">
                      {/*//!Name field */}
                      <div className="relative pb-3">
                        <input
                          onChange={(e) => setName(e.target.value)}
                          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                          type="text"
                          name="name"
                          placeholder="name"
                          required
                        />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                          <FaUser
                            className="h-7 w-7 mb-3 ml-3 text-gray-400 p-1"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                      {/*//!Email field */}
                      <div className="relative">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                          type="email"
                          name="email"
                          placeholder="email"
                          required
                        />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                      </div>
                      <div className="relative mt-3">
                        {/*//!Password field */}
                        <input
                          onChange={(e) => setPassord(e.target.value)}
                          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="password"
                          required
                        />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                          </svg>
                        </div>
                        {showPassword ? (
                          <div className="absolute right-3 inset-y-0 flex items-center">
                            <BsEye
                              onClick={handlePasswordToggle}
                              className="h-7 w-7 mt-3 ml-3 text-gray-400 p-1"
                              fill="currentColor"
                            />
                          </div>
                        ) : (
                          <div className="absolute right-3 inset-y-0 flex items-center">
                            <BsEyeSlash
                              onClick={handlePasswordToggle}
                              className="h-7 w-7 mt-3 ml-3 text-gray-400 p-1"
                              fill="currentColor"
                            />
                          </div>
                        )}
                      </div>
                      <div className="relative mt-3">
                        {/*//!Password field */}
                        <input
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                          type={showPassword ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="confirm password"
                          required
                        />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                          </svg>
                        </div>
                        {showPassword ? (
                          <div className="absolute right-3 inset-y-0 flex items-center">
                            <BsEye
                              onClick={handlePasswordToggle}
                              className="h-7 w-7 mt-3 ml-3 text-gray-400 p-1"
                              fill="currentColor"
                            />
                          </div>
                        ) : (
                          <div className="absolute right-3 inset-y-0 flex items-center">
                            <BsEyeSlash
                              onClick={handlePasswordToggle}
                              className="h-7 w-7 mt-3 ml-3 text-gray-400 p-1"
                              fill="currentColor"
                            />
                          </div>
                        )}
                      </div>

                      <div className="relative pt-3 flex">
                        {/* //! phone number */}
                        <input
                          onChange={(e) => setPhone(e.target.value)}
                          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                          name="phone"
                          type="tel"
                          placeholder="Phone Number"
                          maxLength="11"
                          required
                        />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                          <BsFillTelephoneFill
                            className="h-7 w-7 mt-3 ml-3 text-gray-400 p-1"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                      <div className="form-control text-gray-900 pt-3">
                        <label
                          onClick={handleAccepted}
                          className="label cursor-pointer "
                        >
                          <input type="checkbox" className="checkbox" />
                          <span className="label-text text-gray-900 pl-2">
                            <span className="text-gray-900">
                              Accept{" "}
                              <Link to="/terms">Terms and conditions</Link>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button
                          type="submit"
                          disabled={!accepted}
                          className={`text-white py-3 w-full  px-3 rounded-lg
                           ${
                             accepted ? "bg-button" : "bg-gray-900"
                           } duration-300 `}
                        >
                          {loading ? <Loading /> : "Sign Up"}
                        </button>
                      </div>

                      {error && <p className="text-red-600">{error}</p>}
                      {success && (
                        <p className="text-black text-[18px] font-bold">
                          {success}
                        </p>
                      )}

                      <p className="text-sm text-gray-700 dark:text-gray-400 pt-3">
                        {" "}
                        Have an account?
                        <Link
                          to="/login"
                          className="text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                        >
                          Sign In here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="relative items-center justify-center hidden w-full lg:flex lg:w-1/2 ">
                <div className="absolute inset-0 z-10 bg-gray-900 opacity-40"></div>
                <img
                  className="absolute inset-0 z-0 object-cover w-full h-full ml-auto"
                  src="https://images.pexels.com/photos/7321/sea-water-ocean-horizon.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
                />
                <div className="top-0 z-10 max-w-xl mx-auto mb-12 text-center ">
                  <h2 className="mb-4 text-4xl font-bold text-gray-100 dark:text-gray-300 ">
                    Welcome to our community and join with us
                  </h2>
                  <div className="max-w-lg mx-auto mb-6">
                    <p className="pt-6 font-medium text-gray-300 dark:text-gray-300">
                      lorem ipsum dor amet sidcuscd andih wkoidus iusoyions
                      hejitywa qopasation dummy text ipsum
                    </p>
                  </div>
                  <a
                    href="https://www.facebook.com/people/Stylink-Tech/61553197613641/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-6 py-2 font-medium bg-green-600 text-gray-50 dark:text-gray-300"
                  >
                    Join now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;

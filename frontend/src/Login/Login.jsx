import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/Logo/stylink.png";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Api/AuthProvider/AuthProvider";
import { signIn } from "../Api/ApiServices/Auth";
import loginImage from "../assets/banner/soft-wave-with-bubble-blue-ocean-white-sand-tropical-beach-summer-season-simple-beach-background-summer-bubble-blue-wave-from-sea-sand-beach-summer-background.jpg";
const Login = () => {
  const { setProfile } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({}); //create for store getting email for reset
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //login part
  const handleLogin = async (event) => {
    console.log(user);
    setError("");
    event.preventDefault();
    setLoading(true);
    try {
      const res = await signIn(user);
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        setError(data.message);
      }
      if (res.ok) {
        navigate(from, { replace: true });
        toast.success("successfully logged in");
        setProfile(data.data.user);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  //get email
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    user[name] = value;
  };
  return (
    <>
      <section className="h-full lg:h-screen font-poppins ">
        <div className="relative z-10 flex justify-center h-screen py-7 lg:py-16 dark:bg-gray-800 2xl:py-44">
          <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 lg:bottom-0 lg:h-auto lg:w-full">
            <div className="absolute inset-0 lg:bg-[#00000066] "></div>
            <img
              src={loginImage}
              alt=""
              className="hidden object-cover w-full h-full lg:block"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="relative max-w-6xl px-4 mx-auto">
              <div className="max-w-xl mx-auto lg:max-w-5xl">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                    <h2 className="text-4xl font-bold leading-loose text-left text-gray-100 dark:text-gray-300 mb-9 lg:text-6xl ">
                      Welcome and join our community
                    </h2>
                    <p className="text-lg text-left text-gray-200 dark:text-gray-300 ">
                      You are welcome here!
                    </p>
                  </div>
                  <div className="w-full px-4 lg:w-2/5">
                    <div className="p-6 shadow-md lg:p-9 bg-gray-50 dark:bg-gray-900 ">
                      <h2 className="mb-4 text-xl font-bold lg:mb-8 lg:text-3xl dark:text-gray-400">
                        Login our account
                      </h2>
                      <form action="" className="p-0 m-0">
                        <div>
                          <label
                            for=""
                            className="text-lg font-medium text-gray-700 dark:text-gray-400"
                          >
                            Email:
                          </label>
                          <input
                            type="email"
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                            name="email"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="mt-5">
                          <div>
                            <label
                              for=""
                              className="text-lg font-medium text-gray-700 dark:text-gray-400 "
                            >
                              Password:
                            </label>
                            <div className="relative flex items-center mt-2">
                              <input
                                type={visible ? "text" : "password"}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                                name="password"
                                placeholder="Enter password"
                              />
                              <div className="absolute right-2 inset-y-[-32px] flex items-center">
                                {visible ? (
                                  <AiOutlineEye
                                    className="absolute right-2 top-12 cursor-pointer"
                                    size={18}
                                    onClick={() => setVisible(false)}
                                  />
                                ) : (
                                  <AiOutlineEyeInvisible
                                    className="absolute right-2 top-12 cursor-pointer"
                                    size={18}
                                    onClick={() => setVisible(true)}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 text-right">
                          <Link
                            to="/resetPassword"
                            className="text-sm font-semibold text-blue-700
                            dark:text-blue-300 dark:hover:text-blue-500"
                          >
                            forgot password?
                          </Link>
                        </div>
                        <button
                          className="w-full px-4 py-3 mt-5 font-semibold text-gray-200 bg-blue-500 rounded-lg dark:bg-blue-500 hover:text-blue-200 "
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Login ..." : "Login"}
                        </button>
                        <div>
                          <p className="text-red-600">{error}</p>
                        </div>
                        <div className="flex flex-wrap items-center mt-3 text-sm text-gray-700 lg:text-base lg:mt-5 dark:text-gray-400">
                          Need an account?
                          <Link
                            to="/signup"
                            className="ml-2 text-base font-semibold text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                          >
                            Create an account
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

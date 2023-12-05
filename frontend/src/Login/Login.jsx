import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/Logo/stylink.png";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Api/AuthProvider/AuthProvider";
import { signIn } from "../Api/ApiServices/Auth";

const Login = () => {
  const { setProfile } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({}); //create for store getting email for reset
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
    <div>
      <div className="my-5">
        <div className="">
          <div className="p-0 lg:w-1/2 mx-auto">
            <div className="bg-white  p-8 rounded-xl">
              <p className="text-center text-2xl pb-3  text-gray-900 font-bold">
                Sign in with
              </p>
              <img src={logo} alt="" className="w-48 mx-auto" />
            </div>
            <div className="bg-slate-300 rounded-xl py-12 px-4 lg:px-20 ">
              <p className="text-center text-2xl text-gray-600 font-bold">
                Login
              </p>
              {/* //* Form */}
              <Form className="mt-6" onSubmit={handleLogin}>
                <div className="relative ">
                  {/*//!Email field */}
                  <input
                    onChange={handleInputChange}
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    type="text"
                    name="email"
                    placeholder="Email"
                    // className="input input-bordered"
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
                    onChange={handleInputChange}
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline "
                    type={visible ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    // className="input input-bordered"
                    required
                  />

                  <div className="absolute left-10 inset-y-[-32px] flex items-center">
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

                <div className="flex items-center justify-center my-5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="text-white py-3 rounded-lg bg-gray-900 duration-300 hover:bg-[#ea6b28] w-full"
                  >
                    {loading ? "Login ..." : "Login"}
                  </button>
                </div>
                <div>
                  <div>
                    <p className="text-red-600">{error}</p>
                  </div>{" "}
                  <p className="text-center">
                    <>
                      <Link to="/resetPassword">
                        <button className="btn btn-link ">
                          Forget Password ?
                        </button>
                      </Link>
                    </>
                  </p>
                  <p className="text-center text-gray-500  font-medium">
                    New to StyLink Tech ?
                    <Link
                      className="text-[#ea6b28] font-bold ml-2"
                      to="/signup"
                    >
                      SignUp
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

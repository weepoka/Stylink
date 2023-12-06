import React from "react";
import { useContext } from "react";
import { useState } from "react";

import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import resetImage from "../assets/images/password-reset.png";
import { toast } from "react-hot-toast";
import { facebookLogin, googleLogin } from "../Api/ApiServices/Auth";

const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const ResetPassword = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("");

  const [user, setUser] = useState({}); //create for store getting email for reset
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //facebook sign in
  const handleFacebookSignIn = () => {
    facebookLogin();
  };

  //google sign in
  const handleGoogleSignIn = () => {
    googleLogin();
  };

  //login part
  const handleForgetPassword = async (event) => {
    console.log(user);
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${apiUrl}/user/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        setColor("red");
        setMessage(data.message);
      }
      if (res.ok) {
        setColor("green");
        setMessage(data.message);
      }
    } catch (error) {
      setMessage(error.message);
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
  //password reset
  //forget password

  return (
    <div className="py-20 bg-[#f3f4f6]">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-[#f7f7ff] hidden lg:block lg:w-1/2 bg-no-repeat bg-center
               bg-contain rounded-l-lg"
              style={{
                backgroundImage: `url( "${resetImage}")`,
              }}
            ></div>

            <div className="w-full lg:w-1/2 bg-[#f7f7ff] p-5 rounded-lg lg:rounded-l-none shadow">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below
                  and we'll send you a link to reset your password!
                </p>
              </div>
              <form
                onSubmit={handleForgetPassword}
                className="px-8 pt-6 pb-8 mb-4  rounded"
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter Email Address..."
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    disabled={loading}
                  >
                    {loading ? "loading..." : "Reset Password "}
                  </button>
                </div>
                <div>
                  <p className={`text-${color}-600`}>{message}</p>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/signup"
                  >
                    Create an Account!
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/login"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const AccountSettings = ({ activePage }) => {
  const [inputs, setInputs] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  console.log(inputs);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handlePasswordToggle = (e) => {
    e.preventDefault();
    setShowPassword((prevPassword) => !prevPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("password Update Successfully");
    console.log(inputs);
    setInputs({});
  };
  return (
    <div>
      {" "}
      <div
        className="font-medium  bg-slate-100 py-5 
relative  capitalize px-5  flex items-center"
      >
        {/* ====> homepage Navigation */}
        <NavLink to="/" className="text-heading font-bold">
          <span className="text-sm">HOME</span>
        </NavLink>
        <span className="ml-1 flex items-center uppercase">
          <Icon icon="radix-icons:slash" width={20} /> {activePage}
        </span>
      </div>
      <div className="px-5">
        <form onSubmit={handleSubmit} className="py-5">
          <div className="  mb-5 ">
            <label htmlFor=""> Old Password</label>
            <div className="relative flex flex-col pt-1">
              <input
                type={showPassword ? "text" : "Password"}
                name="oldPassword"
                value={inputs.oldPassword || ""}
                className="w-full py-4 rounded-lg px-7 dark:text-gray-300 dark:bg-gray-800 border"
                placeholder="Old password"
                onChange={handleChange}
                required
              />
              {showPassword ? (
                <BsEyeSlash
                  className="absolute right-0 mr-3 mt-5 cursor-pointer"
                  onClick={handlePasswordToggle}
                />
              ) : (
                <BsEye
                  className="absolute right-0 mr-3 mt-5 cursor-pointer"
                  onClick={handlePasswordToggle}
                />
              )}
            </div>
          </div>
          <div className="  mb-5 ">
            <label htmlFor=""> New Password</label>
            <div className="relative flex flex-col pt-2">
              <input
                type={showPassword ? "text" : "Password"}
                name="newPassword"
                value={inputs.newPassword || ""}
                onChange={handleChange}
                className="w-full py-4 rounded-lg px-7 dark:text-gray-300 dark:bg-gray-800 border"
                placeholder="New password"
                required
              />
              {showPassword ? (
                <BsEyeSlash
                  className="absolute right-0 mr-3 mt-5 cursor-pointer"
                  onClick={handlePasswordToggle}
                />
              ) : (
                <BsEye
                  className="absolute right-0 mr-3 mt-5 cursor-pointer"
                  onClick={handlePasswordToggle}
                />
              )}
            </div>
          </div>

          <div className="flexCenter pt-5">
            <button
              className="w-52   py-4 mb-4 font-semibold text-gray-200 bg-green-600 rounded-lg px-7 dark:text-gray-300 dark:bg-green-600 hover:text-blue-200 "
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;

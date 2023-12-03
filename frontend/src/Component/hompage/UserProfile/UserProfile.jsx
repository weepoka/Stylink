import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Api/AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { FaUserAlt } from "react-icons/fa";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const UserProfile = ({ activePage }) => {
  // console.log(image);
  const { profile } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch(`${apiUrl}/order/${profile?._id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setOrders(data.data));
  }, [profile?._id]);
  return (
    <div>
      {" "}
      <div
        className="font-medium  bg-slate-100 py-5 
      relative  capitalize px-5 flex items-center"
      >
        {/* ====> homepage Navigation */}
        <NavLink to="/" className="text-heading font-bold">
          <span className="text-sm">HOME</span>
        </NavLink>
        <span className="ml-1 flex items-center uppercase">
          <Icon icon="radix-icons:slash" width={20} /> {activePage}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-5">
        <div className="md:col-span-2 flex items-center justify-center ">
          {profile?.image ? (
            <img src={profile.image} alt="" className="w-72 rounded-xl" />
          ) : (
            <FaUserAlt className=" text-3xl" title="image" />
          )}
        </div>
        <div className="md:col-span-3">
          <h1 className="font-bold text-xl text-center md:text-start mb-3">
            Profile Details
          </h1>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-3  gap-10 py-3">
            <div>
              <h2 className="font-bold">Name</h2>
              <p className="pt-2">{profile?.name}</p>
            </div>
            <div>
              <h2 className="font-bold">Email </h2>
              <p className="pt-2 text-sm">{profile?.email}</p>
            </div>
            <div>
              <h2 className="font-bold ">Contact No </h2>
              <p className="pt-2">{profile?.phone}</p>
            </div>
            <div>
              <h2 className="font-bold">Address </h2>
              <p className="pt-2">
                {profile?.address ? profile?.address : "none"}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:justify-start md:items-start items-center pt-10">
            <button className="px-5 py-2 bg-button rounded-md text-white flex items-center gap-3">
              <Link to={`/profile/${profile?._id}`}>Edit</Link>
              <Icon icon="fa-solid:edit" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

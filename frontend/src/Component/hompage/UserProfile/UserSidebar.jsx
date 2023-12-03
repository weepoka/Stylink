import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UserSidebar = ({ activePage, profile }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flexCenter flex-col gap-5 py-5">
        {profile?.image ? (
          <img src={profile.image} alt="" className="w-72 rounded-Full" />
        ) : (
          <FaUserAlt className=" text-3xl" title="image" />
        )}
        {profile?.name ? <p>{profile?.name}</p> : "Rabbinur"}
      </div>

      {activePage === "userProfile" ? (
        <div className="flexStart gap-3 bg-primary text-white hover:bg-secondary hover:text-white p-3">
          <FaUserAlt />
          <span>My Profile</span>
        </div>
      ) : (
        <Link to="/profile/userProfile" className="">
          {" "}
          <div className="flexStart gap-3 hover:bg-secondary hover:text-white p-3">
            <FaUserAlt />
            <span>My Profile</span>
          </div>
        </Link>
      )}
      {activePage === "myOrders" ? (
        <div className="flexStart gap-3 hover:bg-secondary bg-primary text-white hover:text-white p-3">
          <FaBagShopping />
          <span>My Orders</span>
        </div>
      ) : (
        <Link to="/profile/myOrders" className="">
          <div className="flexStart gap-3 hover:bg-secondary hover:text-white p-3">
            <FaBagShopping />
            <span>My orders</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default UserSidebar;

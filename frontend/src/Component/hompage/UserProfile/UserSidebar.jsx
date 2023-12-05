import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { TbShoppingCartCancel } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserSidebar = ({ activePage, profile }) => {
  return (
    <div className="w-full flex flex-col p-3">
      <div className="flexCenter flex-col gap-5 py-5">
        {profile?.image ? (
          <img src={profile.image} alt="" className="w-72 rounded-Full" />
        ) : (
          <FaUserAlt className=" text-3xl" title="image" />
        )}
        {profile?.name ? <p>{profile?.name}</p> : "Rabbinur Muktar"}
      </div>
      {/* use profile code start */}
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

      {/* My orders code start */}
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
      {/* My cancelation code start */}
      {activePage === "myCancellations" ? (
        <div className="flexStart gap-3 hover:bg-secondary bg-primary text-white hover:text-white p-3">
          <TbShoppingCartCancel />
          <span>My Cancellations</span>
        </div>
      ) : (
        <Link to="/profile/myCancellations" className="">
          <div className="flexStart gap-3 hover:bg-secondary hover:text-white p-3">
            <TbShoppingCartCancel />
            <span>My Cancellations</span>
          </div>
        </Link>
      )}
      {/* my wishlist start */}
      {activePage === "myWishlist" ? (
        <div className="flexStart gap-3 hover:bg-secondary bg-primary text-white hover:text-white p-3">
          <FaHeart />
          <span>My Wishlist</span>
        </div>
      ) : (
        <Link to="/profile/myWishlist" className="">
          <div className="flexStart gap-3 hover:bg-secondary hover:text-white p-3">
            <FaHeart />
            <span>My Wishlist</span>
          </div>
        </Link>
      )}
      {/* my account settings start */}
      {activePage === "accountSettings" ? (
        <div className="flexStart gap-3 hover:bg-secondary bg-primary text-white hover:text-white p-3">
          <AiFillSetting />
          <span>Password Change</span>
        </div>
      ) : (
        <Link to="/profile/accountSettings" className="">
          <div className="flexStart gap-3 hover:bg-secondary hover:text-white p-3">
            <AiFillSetting />
            <span>Password Change</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default UserSidebar;

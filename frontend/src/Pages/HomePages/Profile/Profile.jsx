import { useContext, useEffect, useState } from "react";

import { FaUserAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import Order from "./Order";
import { AuthContext } from "../../../Api/AuthProvider/AuthProvider";
import UserSidebar from "../../../Component/hompage/UserProfile/UserSidebar";
import UserProfile from "../../../Component/hompage/UserProfile/UserProfile";
import Orders from "./Orders";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
import WishList from "./../WishList/WishList";
import ProductCancelation from "../../../Component/hompage/UserProfile/ProductCancelation";
import AccountSettings from "../../../Component/hompage/UserProfile/AccountSettings";
const Profile = () => {
  const { activePage } = useParams();

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
    <div className="container py-5">
      <div className=" px-5 md:px-0">
        <div>
          <div className="font-bold text-[30px]   py-5 relative  capitalize px-5 flex  justify-center items-center">
            My Profile
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-5">
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

          <div className="font-medium mt-10 bg-slate-100 py-5 relative  capitalize px-5 flex items-center">
            <NavLink to="/" className="text-heading font-bold">
              <span className="text-sm">HOME</span>
            </NavLink>
            <span className="ml-1 flex items-center uppercase font-bold">
              <Icon icon="radix-icons:slash" width={20} /> My Order list
            </span>
          </div>

          <div className="my-20">
            {orders?.map((order, i) => (
              <Order order={order} key={i} />
            ))}
          </div> */}
        </div>
      </div>

      <div className="md:flex flex-col md:flex-row  w-full gap-10 justify-start ">
        <div className="w-full lg:w-[20%] rounded h-[500px] border shadow ">
          <UserSidebar activePage={activePage} profile={profile} />
        </div>
        <div className="w-full md:w-[80%] rounded min-h-[50vh] mt-10 md:mt-0 border p-3">
          {activePage === "userProfile" && (
            <UserProfile activePage={activePage} />
          )}
          {activePage === "myOrders" && (
            <Order profile={profile} activePage={activePage} />
          )}
          {activePage === "myWishlist" && (
            <WishList profile={profile} activePage={activePage} />
          )}
          {activePage === "myCancellations" && (
            <ProductCancelation profile={profile} activePage={activePage} />
          )}
          {activePage === "accountSettings" && (
            <AccountSettings profile={profile} activePage={activePage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Order from "./Order";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Profile = () => {
  // console.log(image);
  const { profile } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/order/${profile?._id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setOrders(data.data));
  }, [profile?._id]);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-5 md:px-0">
        <div>
          <div className="font-medium mt-10 bg-slate-100 py-5 relative  capitalize px-5 flex items-center">
            {/* ====> homepage Navigation */}
            <NavLink to="/" className="text-[#ea6b28]">
              <span className="text-sm">HOME</span>
            </NavLink>
            <span className="ml-1 flex items-center uppercase">
              <Icon icon="radix-icons:slash" width={20} /> My Profile
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
                <button className="px-5 py-2 bg-[#ea6b28] rounded-md text-white flex items-center gap-3">
                  <Link to={`/profile/${profile?._id}`}>Edit</Link>
                  <Icon icon="fa-solid:edit" />
                </button>
              </div>
            </div>
          </div>

          <div className="font-medium mt-10 bg-slate-100 py-5 relative  capitalize px-5 flex items-center">
            {/* ====> homepage Navigation */}
            <NavLink to="/" className="text-[#ea6b28]">
              <span className="text-sm">HOME</span>
            </NavLink>
            <span className="ml-1 flex items-center uppercase font-bold">
              <Icon icon="radix-icons:slash" width={20} /> My Order list
            </span>
          </div>

          <div className="my-20">
            {orders?.map((order) => (
              <Order order={order} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

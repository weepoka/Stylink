import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Order from "./Order";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Loading from "../../Loading/Loading";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const Update = () => {
  const { profile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [profileData, setUserData] = useState({});
  const [image, setImage] = useState();

  const updateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    let formDataObj = new FormData();

    formDataObj.append("profile", JSON.stringify(profileData));

    if (image) {
      formDataObj.append("image", image);
    }

    console.log({ profileData });

    try {
      let response;
      if (image && image.name) {
        response = await fetch(`${apiUrl}/user/${profile?._id}`, {
          method: "PUT",
          body: formDataObj,
          credentials: "include",
        });
      } else {
        response = await fetch(`${apiUrl}/user/${profile?._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profileData),
          credentials: "include",
        });
      }

      const data = await response.json();

      if (response.ok) {
        toast.success("Profile updated successfully");
        // Reset form and image state or perform other actions
      } else {
        alert("Update failed");
        console.error("Update failed");
      }
    } catch (error) {
      console.error("Error uploading data and images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...profileData, [name]: value });
  };

  return (
    <div>
      <div className="max-w-screen-2xl p-5 mx-auto px-5 md:px-0">
        <div>
          <h1 className="text-2xl py-2 text-center font-bold">My Profile</h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10">
            <div className="col-span-2 flex justify-center items-center">
              <FaUserAlt className="text-white text-center text-xl mr-2" />{" "}
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="col-span-3">
              <h1 className="font-bold text-center md:text-start">
                Profile Details
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-3">
                {/* Name */}
                <div>
                  <h2 className="font-bold">Name</h2>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    defaultValue={profile?.name}
                    className="rounded-sm my-1 p-2"
                  />
                </div>
                {/* Email */}
                <div>
                  <h2 className="font-bold">
                    Email{" "}
                    <label
                      htmlFor="email"
                      className="border-l text-blue-500 pl-1"
                    >
                      Change
                    </label>
                  </h2>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="email"
                    name="email"
                    defaultValue={profile?.email}
                    className="rounded-sm my-1 p-2"
                  />
                </div>
                {/* Contact No */}
                <div>
                  <h2 className="font-bold">
                    Contact No{" "}
                    <label
                      htmlFor="phone"
                      className="border-l text-blue-500 pl-1"
                    >
                      Change
                    </label>
                  </h2>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="phone"
                    name="phone"
                    defaultValue={profile?.phone}
                    className="rounded-sm my-1 p-2"
                  />
                </div>
                {/* Address */}
                <div>
                  <h2 className="font-bold">
                    Address{" "}
                    <span className="border-l text-blue-500 pl-1">Change</span>
                  </h2>
                  <textarea
                    onChange={handleInputChange}
                    type="text"
                    id="address"
                    name="address"
                    placeholder="address"
                    defaultValue={profile?.address}
                    className="rounded-sm my-1 p-2"
                  />
                </div>
                {/* Gender */}
              </div>
              <div className="flex flex-col md:justify-start md:items-start items-center pt-10">
                <button
                  disabled={loading}
                  onClick={updateProfile}
                  className="px-10 cursor-pointer py-2 bg-blue-600 text-white"
                >
                  {loading ? <Loading /> : "Update"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;

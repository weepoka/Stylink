import React, { useState } from "react";
import { toast } from "react-toastify";

const CheckOutpage = ({ user, setOrder, setDetailState, closeModal }) => {
  //   const { name, email, phone } = user;
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [details, setDetails] = useState({});
  const handleDetails = (e) => {
    e.preventDefault();
    console.log(details);

    if (!details.contactNumber) {
      return setError("please provide phone number");
    }
    if (!details.area) {
      return setError("please provide the area");
    }
    if (!details.address) {
      return setError("please provide your delivery address");
    }
    if (!details.city) {
      return setError("please provide your delivery city");
    }

    setDisabled(false);
    setOrder(details);
    setDetailState(true);

    // Close the modal by unchecking the checkbox
    const modalCheckbox = document.getElementById("my-modal-5");
    if (modalCheckbox) {
      modalCheckbox.checked = false;
    }

    toast.success("Address has been added Successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const inputChage = (e) => {
    setError("");
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
    console.log({ details });
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <form className="mt-6" autoComplete="off" onSubmit={handleDetails}>
            <div>
              <h1 className="font-bold pb-2 text-lg lg:text-xl">
                Contact Info
              </h1>
              {/*//!Name field */}
              <div className="relative pb-3">
                <input
                  autoSave="off"
                  autoComplete="off"
                  defaultValue={name}
                  onChange={inputChage}
                  className="appearance-none border-2 pl-12
                  shadow-sm 
                   focus:outline-none  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                />
              </div>

              <div className="flex gap-5 md:flex-row flex-col w-full">
                {/*//!Email field */}
                <div className="relative w-full">
                  <input
                    // value={email}
                    autoComplete="off"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none border pl-12
                   border-gray-100 shadow-sm focus:shadow-md
                    focus:placeholder-gray-600  transition 
                     rounded-md w-full py-3 text-gray-600 
                     leading-tight focus:outline-none
                      focus:ring-gray-600 focus:shadow-outline"
                    type="email"
                    name="email"
                    // disabled
                    placeholder="email"
                    required
                  />
                </div>
                <div className="relative w-full ">
                  {/* //! phone number */}
                  <input
                    autoComplete="off"
                    // defaultValue={phone}
                    onChange={inputChage}
                    className="appearance-none border 
                  pl-12 border-gray-100 shadow-sm 
                  focus:shadow-md focus:placeholder-gray-600
                    transition  rounded-md w-full py-3
                     text-gray-600 leading-tight 
                     focus:outline-none focus:ring-gray-600
                      focus:shadow-outline"
                    name="contactNumber"
                    type="tel"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{5}"
                    placeholder="Phone Number"
                    // maxLength="11"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold py-2 mt-5 text-lg lg:text-xl">
                Shipping Info
              </h1>
              <div className="relative mt-1">
                {/*//!Address field */}
                <input
                  autoComplete="off"
                  onChange={inputChage}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  type="text"
                  name="address"
                  placeholder="address"
                  required
                />
              </div>
              <div className="flex gap-5 md:flex-row flex-col">
                <div className="relative mt-3 w-full">
                  {/*//!Area field */}
                  <input
                    autoComplete="off"
                    onChange={inputChage}
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    type="text"
                    name="area"
                    placeholder="area"
                    required
                  />
                </div>

                <div className="relative pt-3 flex w-full">
                  {/* //! City  */}
                  <input
                    autoComplete="off"
                    onChange={inputChage}
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    name="city"
                    type="text"
                    placeholder="city"
                    maxLength="11"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="text-red-500 my-2">
              <p>{error}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOutpage;

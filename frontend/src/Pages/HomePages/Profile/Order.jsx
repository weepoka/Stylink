import React, { useContext, useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
import { Link, NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Stepper, Step } from "react-form-stepper";
import { AuthContext } from "../../../Api/AuthProvider/AuthProvider";
import { Icon } from "@iconify/react";

function CustomStepper(props) {
  return (
    <Stepper
      {...props}
      connectorStateColors={true}
      connectorStyleConfig={{
        completedColor: "#006fba",
        activeColor: "#006fba",
        disabledColor: "#eee",
      }}
      styleConfig={{
        activeBgColor: "#237e3d",
        completedBgColor: "#262262",
        inactiveBgColor: "#eee",
        activeTextColor: "#fff",
        completedTextColor: "#fff",
        inactiveTextColor: "#444",
      }}
    />
  );
}
const Order = ({ order, activePage }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeText, setActiveText] = useState("");
  // const { orderStatus } = order;
  const orderStatus = "Shipped";
  const steps = [
    { label: "Processing" },
    { label: "Shipped" },
    { label: "Delivered" },
  ];

  useEffect(() => {
    statusGenrate(orderStatus);
  }, [orderStatus]);
  const statusGenrate = (orderStatus) => {
    switch (orderStatus) {
      case "Processing":
        return setActiveStep(0);
      case "Shipped":
        return setActiveStep(1);
      case "Delivered":
        return setActiveStep(2);

      default:
        return null;
    }
  };
  return (
    <div className=" ">
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
      <div className="max-w-screen-2xl mx-auto px-5 md:px-0 pt-5">
        <div className="max-w-7xl mx-auto relative">
          <div className="px-4 mb-6 lg:mb-0">
            <h2 className="mb-1 text-lg font-semibold tracking-wide dark:text-gray-300">
              Your order has been{" "}
              <span className="text-button">{orderStatus}</span>
            </h2>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">
              by Pathao on 10th feb, 2022
            </p> */}
          </div>
          <div className="py-10">
            <CustomStepper
              className="text-heading"
              steps={steps}
              activeStep={activeStep}
            ></CustomStepper>

            {/* <div>{orderStatus}</div> */}
          </div>

          <div className="flex md:justify-between flex-col md:flex-row gap-2 border-b-[1px] ">
            <div className="pb-1">
              <h3 className="font-semibold text-[12px]">
                Order Number{" "}
                <span className="text-button ">: {order?._id}</span>
              </h3>
              <p className="font-semibold text-[12px]">
                Placed on : {order?.updatedAt?.toLocaleString()}
              </p>
            </div>
            <div>
              <Link to={`/order/${order?._id}`} className="">
                <button
                  className="text-[#fff] rounded-full  font-bold flex justify-center 
                items-center gap-2 shadow-md bg-button px-4 py-1"
                >
                  Invoice <FaDownload />
                </button>
              </Link>
            </div>
          </div>
          <div className="overflow-auto h-[600px]">
            {order?.products?.map((product) => (
              <div
                key={product._id}
                className="grid grid-cols-1 md:grid-cols-6 md:gap-12 border-b  gap-2 py-3"
              >
                <div>
                  <img src={product.image} alt="" className="w-24 rounded-xl" />
                </div>
                <div className="">
                  <h1 className="font-bold pb-1">Product Name</h1>
                  <p>{product?.name}</p>
                </div>
                <div>
                  <h1 className="font-bold pb-1 capitalize">orderStatus</h1>
                  <p>
                    <p>{orderStatus}</p>
                  </p>
                </div>
                <div>
                  <h1 className="font-bold pb-1">Quantity</h1>
                  <p>
                    <>{product?.quantity}</>
                  </p>
                </div>
                <div>
                  <h1 className="font-bold pb-1">Price</h1>
                  <p className="flex justify-start items-center">
                    {" "}
                    <TbCurrencyTaka className="font-bold" /> {order?.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="p-2">
            <hr />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Order;

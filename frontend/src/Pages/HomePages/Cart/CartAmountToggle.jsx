import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";

const CartAmountToggle = ({ count, setDecrease, setIncrease }) => {
  return (
    <>
      <div className=" p-4 flexBetween border-red-600-300  bg-gray-100 rounded text-black ">
        <button onClick={() => setDecrease()}>
          <HiOutlineMinus />{" "}
        </button>
        <span className="px-3">{count}</span>
        <button onClick={() => setIncrease()}>
          {" "}
          <HiOutlinePlus />{" "}
        </button>
      </div>
    </>
  );
};

export default CartAmountToggle;

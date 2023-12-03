import { Icon } from "@iconify/react";
import React from "react";
import { NavLink } from "react-router-dom";

const ProductCancelation = ({ activePage }) => {
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
    </div>
  );
};

export default ProductCancelation;

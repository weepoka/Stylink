import React from "react";
import newImg from "../../../../assets/icon/new.png";
import ProductDetails from "../Product/ProductDetails";
const NewArival = () => {
  return (
    <div>
      <div className="bg-[#f6f9fc] relative py-10">
        <section className="container ">
          <div className="flexStart gap-2 ">
            <img src={newImg} alt="" />
            <h1 className="bold-32 text-primary">New Arrival</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10">
            <ProductDetails />
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewArival;

import React from "react";
import { FaBorderAll } from "react-icons/fa6";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="bg-[#f6f9fc] relative py-10">
      <section className="container ">
        <div className="flexStart gap-2 ">
          <FaBorderAll size={25} className="text-red-500" />
          <h1 className="bold-32 text-primary">Category</h1>
        </div>
        <div>
          <CategoryCard />
        </div>
      </section>
    </div>
  );
};

export default Category;

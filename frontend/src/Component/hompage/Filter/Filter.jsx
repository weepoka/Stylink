import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Api/AuthProvider/AuthProvider";

import discount from "../../../assets/discount/discount offer-01-01.png";
import mobileDiscount from "../../../assets/discount/mobile discount-01.png";
import { MdFirstPage, MdLastPage, MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import ProductDetails from "../../../Pages/HomePages/Home/Product/ProductDetails";
import Pagination from "../pagination/Pagination";

const FilterProduct = ({ newArrival, offerPercentage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  //   let categories = [];
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { product } = useContext(AuthContext);
  // const categoriesWithOffer = Array.from(
  //   new Set(
  //     product
  //       .filter((item) => item.offerPercentage > 0)
  //       .map((item) => item.category)
  //   )
  // );

  //   // Get categories based on conditions
  //   if (newArrival) {
  //     categories = Array.from(
  //       new Set(
  //         product.filter((item) => item.newArrival).map((item) => item.category)
  //       )
  //     );
  //   } else if (offerPercentage) {
  //     categories = Array.from(
  //       new Set(
  //         product
  //           .filter((item) => item.offerPercentage > 0)
  //           .map((item) => item.category)
  //       )
  //     );
  //   } else {
  //     categories = Array.from(new Set(product.map((item) => item.category)));
  //   }

  useEffect(() => {
    // Get categories based on conditions
    if (newArrival) {
      setCategories(
        Array.from(
          new Set(
            product
              .filter((item) => item.newArrival)
              .map((item) => item.category)
          )
        )
      );
    } else if (offerPercentage) {
      setCategories(
        Array.from(
          new Set(
            product
              .filter((item) => item.offerPercentage > 0)
              .map((item) => item.category)
          )
        )
      );
    } else {
      setCategories(Array.from(new Set(product.map((item) => item.category))));
    }
  }, [newArrival, offerPercentage, product]);
  const categoriess = ["All Categories", ...categories];
  // Get categories based on conditions

  // const discountProduct = product.filter(
  //   (item) =>
  //     item.offerPercentage > 0 &&
  //     (selectedCategory === "All Categories" ||
  //       selectedCategory === "" ||
  //       item.category === selectedCategory)
  // );
  const discountProduct = product.filter((item) => {
    const isNewArrivalValid =
      !newArrival ||
      (item.newArrival &&
        (selectedCategory === "All Categories" ||
          selectedCategory === "" ||
          item.category === selectedCategory));
    const isOfferValid =
      !offerPercentage ||
      (item.offerPercentage > 0 &&
        (selectedCategory === "All Categories" ||
          selectedCategory === "" ||
          item.category === selectedCategory));

    return isNewArrivalValid && isOfferValid;
  });
  console.log("discount product", discountProduct);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = discountProduct.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChangeItemsPerPage = (e) => {
    const { value } = e.target;
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };
  const handleChangeCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    setCurrentPage(1);
  };
  const totalPages = Math.ceil(discountProduct.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };
  return (
    <div className="bg-[#f7f7ff]">
      <div>
        <img src={discount} alt="" className="object-cover hidden lg:block " />
        <img src={mobileDiscount} alt="" className="w-full lg:hidden block " />
      </div>

      <section className="container py-10">
        <div className="flexCenter px-5 bg-white rounded-xl py-3">
          <div className="ml-3 flex flex-wrap gap-5 capitalize">
            {categoriess.map((category) => (
              <h1
                key={category}
                onClick={() => handleChangeCategory(category)}
                className={`cursor-pointer ${
                  selectedCategory === category ? "font-bold text-heading" : ""
                }`}
              >
                {category}
              </h1>
            ))}
          </div>
        </div>
        <div className="flexBetween flex-wrap">
          <div className="  px-5 pt-5">
            <h1 className="capitalize py-5 text-heading bold-20 md:bold-32">
              {newArrival ? "New Arrival" : ""}
              {offerPercentage ? "Flash Deals" : ""}
            </h1>
            <div className="bg-button w-20 md:w-40 h-[2px] "></div>{" "}
          </div>
          {/* items per page dropdown */}
          <div className="flexCenter hidden md:block px-5 pt-5 md:pt-0  ">
            <label className="mb-0 font-bold text-md">Items per page:</label>
            <div className="form-control ml-3">
              <select
                onChange={handleChangeItemsPerPage}
                className="w-full border h-10 p-2"
                type="text"
                required
                name="itemsPerPage"
                value={itemsPerPage}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>
        <div className="px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10">
          {currentItems?.map((product) => (
            <ProductDetails
              key={product._id}
              product={product}
            ></ProductDetails>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
        />
      </section>
    </div>
  );
};

export default FilterProduct;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Api/AuthProvider/AuthProvider";
import ProductDetails from "../Home/Product/ProductDetails";
import discount from "../../../assets/discount/discount offer-01-01.png";
import mobileDiscount from "../../../assets/discount/mobile discount-01.png";
const Discount = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { product } = useContext(AuthContext);
  const categoriesWithOffer = Array.from(
    new Set(
      product
        .filter((item) => item.offerPercentage > 0)
        .map((item) => item.category)
    )
  );
  const categories = ["All Categories", ...categoriesWithOffer];
  console.log("categories", categories);
  const discountProduct = product.filter(
    (item) =>
      item.offerPercentage > 0 &&
      (selectedCategory === "All Categories" ||
        selectedCategory === "" ||
        item.category === selectedCategory)
  );
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
          <div className="ml-3 flex gap-5 capitalize">
            {categories.map((category) => (
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
        <div className="flexBetween">
          <div className="  px-5 pt-5">
            <h1 className=" py-5 text-heading bold-32">Flash Deals </h1>
            <div className="bg-button w-72 h-[2px] "></div>
          </div>
          {/* items per page dropdown */}
          <div className="flexCenter px-5 ">
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
        <div className="flex justify-center mt-8">
          <div className="flex justify-center mt-8">
            <button
              onClick={goToFirstPage}
              className="mx-2 px-3 py-2 text-white duration-300 bg-button hover:bg-gray-900"
              disabled={currentPage === 1}
            >
              First
            </button>
            <button
              onClick={prevPage}
              className="mx-2 px-3 py-2 text-white duration-300 bg-button hover:bg-gray-900"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: Math.min(3, totalPages) }).map((_, index) => {
              const pageNumber = currentPage - 1 + index + 1;
              return (
                pageNumber <= totalPages && (
                  <button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={`mx-2 px-3 py-2 text-white duration-300 bg-button hover:bg-gray-900 ${
                      currentPage === pageNumber ? "bg-gray-900" : ""
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              );
            })}
            <button
              onClick={nextPage}
              className="mx-2 px-3 py-2 text-white duration-300 bg-button hover:bg-gray-900"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
            <button
              onClick={goToLastPage}
              className="mx-2 px-3 py-2 text-white duration-300 bg-button hover:bg-gray-900"
              disabled={currentPage === totalPages}
            >
              Last
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discount;

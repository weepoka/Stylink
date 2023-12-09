import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Api/AuthProvider/AuthProvider";
import ProductDetails from "./ProductDetails";
import { MdFirstPage, MdLastPage, MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const Products = () => {
  const [productCategory, setProductCategory] = useState([]);

  const [filterProductCategory, setFilterProductCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedPrice, setSelectedPrice] = useState();
  const [searchParams] = useSearchParams();

  const { product } = useContext(AuthContext);

  useEffect(() => {
    setProductCategory(product);
  }, [product]);
  // console.log("products", product);

  // const min_price =
  //   searchParams.get("min_price") === null ? "" : searchParams.get("min_price");
  // const max_price =
  //   searchParams.get("max_price") === null ? "" : searchParams.get("max_price");
  // const search =
  //   searchParams.get("search") === null ? "" : searchParams.get("search");

  // check price and search items

  // check price and search items
  // useEffect(() => {
  //   filterProducts();
  // }, [search, min_price, max_price, productCategory]);

  // const filterProducts = () => {
  //   if (search.length || min_price.length || max_price.length) {
  //     const min = parseFloat(min_price);
  //     const max = parseFloat(max_price);

  //     const filtered = productCategory.filter((product) => {
  //       if (min > 0 && min > product.oldPrice) {
  //         return false;
  //       }

  //       if (max > 0 && max < product.oldPrice) {
  //         return false;
  //       }

  //       if (
  //         search.length > 0 &&
  //         !product.name.toLowerCase().includes(search.toLowerCase())
  //       ) {
  //         return false;
  //       }

  //       return true;
  //     });
  //     setFilterProductCategory(filtered);
  //     setCurrentPage(1);
  //   } else {
  //     setFilterProductCategory(productCategory);
  //   }
  // };

  // console.log(selectedPrice);
  useEffect(() => {
    filterProducts();
  }, [searchParams, productCategory, itemsPerPage]);
  const filterProducts = () => {
    if (
      searchParams.get("search") ||
      searchParams.get("min_price") ||
      searchParams.get("max_price")
    ) {
      const min = parseFloat(searchParams.get("min_price")) || 0;
      const max = parseFloat(searchParams.get("max_price")) || Number.MAX_VALUE;

      const filtered = productCategory.filter((product) => {
        if (min > 0 && min > product.oldPrice) {
          return false;
        }

        if (max > 0 && max < product.oldPrice) {
          return false;
        }

        if (
          searchParams.get("search") &&
          !product.name
            .toLowerCase()
            .includes(searchParams.get("search").toLowerCase())
        ) {
          return false;
        }

        return true;
      });

      setFilterProductCategory(filtered);
      setCurrentPage(1);
    } else {
      setFilterProductCategory(productCategory);
    }
  };
  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(e.target.value);

    setSelectedPrice(value);
  };
  const priceFilterList = () => {
    if (!selectedPrice) {
      return filterProductCategory;
    }
    if (selectedPrice === "Low") {
      return filterProductCategory.sort((a, b) => a.oldPrice - b.oldPrice);
    }
    if (selectedPrice === "High") {
      return filterProductCategory.sort((a, b) => b.oldPrice - a.oldPrice);
    }
    if (selectedPrice === "Offer") {
      return filterProductCategory.filter((a) => a.offerPercentage);
    }
    if (selectedPrice === "Newest") {
      return filterProductCategory.filter((a) => a.newArrival);
    }
    return;
  };
  // console.log({ selectedPrice }, { productCategory });
  // console.log(priceFilterList());

  var filteredList = useMemo(priceFilterList, [
    selectedPrice,
    productCategory,
    filterProductCategory,
  ]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChangeItemsPerPage = (e) => {
    const { value } = e.target;
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const totalPages = Math.ceil(filterProductCategory.length / itemsPerPage);

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
    <div className=" bg-[#f6f9fc]">
      {/* [products] text*/}
      <div className=" container py-10 ">
        <div className="  my-10">
          <h2 className="pb-2 md:px-8 text-xl font-bold text-center md:text-left text-gray-800 md:text-3xl dark:text-gray-400">
            Featured Products
          </h2>
          {/* <div className="w-60 mb-6 border-b border-button dark:border-gray-400"></div> */}
        </div>
        <div className=" my-10 ">
          <div className="flex flex-wrap md:px-8  gap-2 md:gap-10 items-center justify-center md:justify-between my-5 ">
            <div className="md:pt-3">
              <h2 className="text-center text-sm  md:text-md">
                Showing Products:{" "}
                <span className="text-heading ml-2 font-bold text-md">
                  {currentItems.length}
                </span>
              </h2>
            </div>
            {/* items per page dropdown */}
            <div className="flexCenter hidden">
              <label className="mb-0 font-bold text-xs md:text-md">
                Items per page:
              </label>
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
            {/* price filtering */}
            <div className="flexCenter ">
              <label className="mb-0 font-bold text-xs md:text-xl">
                Filter:
              </label>
              <div className="form-control ml-3  ">
                <select
                  onChange={handleChange}
                  className="w-full border h-10 p-2"
                  type="text"
                  required
                  name="category"
                >
                  <option value="">Default</option>
                  <option value="Low">Low To high</option>
                  <option value="High">High To Low</option>
                  <option value="Offer">Offer</option>
                  <option value="Newest">Newest</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
        </div>

        {/* prodcuts images */}

        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
          {currentItems?.map((product) => (
            <ProductDetails
              key={product._id}
              product={product}
            ></ProductDetails>
          ))}
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="flex justify-center gap-2 md:gap-5 mt-8">
            <div className=" flex flex-col md:flex-row gap-2">
              <button
                onClick={goToFirstPage}
                className="mx-2 px-3 py-2 text-white duration-300 bg-button hover:bg-gray-900"
                disabled={currentPage === 1}
              >
                <MdFirstPage />
              </button>
              <button
                onClick={prevPage}
                className="mx-2 px-3 py-2 text-white duration-300 bg-button hover:bg-gray-900"
                disabled={currentPage === 1}
              >
                <GrFormPrevious />
              </button>
            </div>
            <div className="flexCenter">
              {Array.from({ length: Math.min(3, totalPages) }).map(
                (_, index) => {
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
                }
              )}
            </div>
            <div className=" flex flex-col md:flex-row gap-2">
              <button
                onClick={nextPage}
                className="mx-2 px-3 py-2 text-white duration-300 bg-button hover:bg-gray-900"
                disabled={currentPage === totalPages}
              >
                <MdNavigateNext />
              </button>
              <button
                onClick={goToLastPage}
                className="mx-2 px-3 py-2 text-white duration-300 bg-button hover:bg-gray-900"
                disabled={currentPage === totalPages}
              >
                <MdLastPage />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

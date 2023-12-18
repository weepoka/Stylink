import React, { useMemo } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { MdFirstPage, MdLastPage, MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";
import { getProductsByCategory } from "../../../Api/ApiServices/ApiSerivces";
import ProductDetails from "../Home/Product/ProductDetails";
import Pagination from "../../../Component/hompage/pagination/Pagination";
const CategoryProducts = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const queryParams = new URLSearchParams(location.search);
  const subCategory = queryParams.get("subcategory");

  const { id } = useParams();

  // console.log(subCategory);

  const [selectedCategory, setSelectedCategory] = useState();
  // console.log(selectedCategory);
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    getProductsByCategory(setSelectedProduct, id, subCategory);
    // filtered();
  }, [id, subCategory]);

  // filtering  by
  const [selectedPrice, setSelectedPrice] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(e.target.value);

    setSelectedPrice(value);
  };
  const priceFilterList = () => {
    if (!selectedPrice) {
      return selectedProduct;
    }
    if (selectedPrice === "Low") {
      return selectedProduct.sort((a, b) => a.oldPrice - b.oldPrice);
    }
    if (selectedPrice === "High") {
      return selectedProduct.sort((a, b) => b.oldPrice - a.oldPrice);
    }
    if (selectedPrice === "Offer") {
      return selectedProduct.filter((a) => a.offerPercentage);
    }
    if (selectedPrice === "Newest") {
      return selectedProduct.filter((a) => a.newArrival);
    }
    return selectedProduct;
  };

  //price range selection
  const [price, setPrice] = useState(500000);
  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e) => {
    setPrice(e.target.value);
  };

  // console.log(range);

  var filteredList = useMemo(priceFilterList, [selectedPrice, selectedProduct]);

  const range = filteredList.filter((item) => {
    return item.oldPrice < parseInt(price, 10);
  });

  // console.log({ range });

  const getUniqueData = (data, property) => {
    let newVal = data.map((curEle) => {
      return curEle[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };
  const BrandData = getUniqueData(selectedProduct, "brand");

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(name, value);
    setSelectedCategory(value);
  };
  const updateProduct = range.filter((item) => {
    // console.log(item);
    if (!selectedCategory) {
      // console.log(selectedCategory);
      return item;
    }
    if (selectedCategory === "All") {
      return item;
    }
    return item.brand === selectedCategory;
  });
  const brandElements = BrandData.map((curEl, index) => {
    return (
      <button
        value={curEl}
        key={index}
        name="brand"
        className="py-1 capitalize"
      >
        {curEl}
      </button>
    );
  });
  // console.log(selectedProduct);
  // console.log(brandElements, "brandElement");
  // console.log(updateProduct.length, "update product");
  const [stocks, setStock] = useState(false);
  // console.log(stocks, "stocks product");
  const handleChecked = (event) => {
    if (event.target.checked) {
      setStock(true);
    }
    if (!event.target.checked) {
      setStock(false);
    }
  };

  //in stock filtering
  const instock = updateProduct.filter((product) => {
    let value = Number(product.stock);

    if (!stocks) {
      return product;
    }

    if (stocks) {
      return Number(product.stock) > 0;
    }
    return product;
  });

  // open hamburger product
  let [open, setOpen] = useState(false);
  let [openhum, setOpenHum] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = instock.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChangeItemsPerPage = (e) => {
    const { value } = e.target;
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const totalPages = Math.ceil(currentItems.length / itemsPerPage);

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
    <div className="max-w-screen-2xl  mx-auto py-5 px-5 ">
      <div className="md:px-10  flex items-center px-2 bg-slate-100 py-5 mb-5 ">
        <div className="flex items-center ">
          <h2 className="text-center  ">
            <NavLink
              to="/"
              className="text-gray-400 hover:border-b-2 hover:text-heading duration-300"
            >
              <AiFillHome className="md:mr-3 md:text-xl" />
            </NavLink>
          </h2>{" "}
          <Icon icon="tdesign:slash" width={30} />
        </div>

        <p className="text-heading md:ml-2 font-bold capitalize  md:text-xl">
          {id}
        </p>
      </div>
      <div
        className="
      md:flex gap-10 relative"
      >
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute left-3 top-2 cursor-pointer block md:hidden"
        >
          {" "}
          {open ? (
            <ImCross className="md:ml-2" />
          ) : (
            <div className="flex items-center gap-3 bg-gray-300  px-2 text-[#000]">
              <GiHamburgerMenu className="" />{" "}
              <h1 className="normal-case">Filter</h1>
            </div>
          )}
          {/* <GiHamburgerMenu name={open ? "close" : "menu"}></GiHamburgerMenu> */}
        </div>
        <div
          className={`border md:pb-0 pb-12 absolute md:static   bg-white  left-0 z-10
           w-60 md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
             open ? "left-0 top-20  " : "left-[-500px] top-20"
           }`}
        >
          <div className="w-48 md:w-80 pb-10  sticky top-24">
            <div className="p-4">
              <h1 className="mb-3 text-center">
                {" "}
                <span className="text-gray-700 font-bold text-xl">
                  Price Range
                </span>
              </h1>
              <div className="flex justify-center py-3">
                <input
                  type="range"
                  min={0}
                  max={500000}
                  step={100}
                  className="w-[250px] "
                  onInput={handleInput}
                />
              </div>
              <div className="flex justify-between mt-5">
                <p className="border py-2 px-6">0</p>
                <p className="border p-2">{price}</p>
              </div>
            </div>
            <div className="p-4 price-range-shadow">
              <Accordion preExpanded={["a"]} allowZeroExpanded>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="font-bold">Availability</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="form-control mt-5 ">
                      <label
                        className=" flex items-center cursor-pointer "
                        onChange={handleChecked}
                      >
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary mr-3 hover:text-gray-500"
                        />
                        <span className="text-heading text-md font-semibold hover:text-gray-500">
                          In Stock
                        </span>
                      </label>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="price-range-shadow mt-5 py-3">
              <h3 className="py-3 px-8 text-xl font-bold text-gray-700">
                Brand
              </h3>
              <div className="  px-8 relative">
                <label
                  className="cursor-pointer  flex flex-col justify-start items-start  text-[15px] text-secondary"
                  name="brand"
                  onClick={updateFilterValue}
                >
                  {brandElements}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="w-full z-1 ">
            <div className="mb-5 py-2 bg-slate-100">
              <div
                className="flex flex-wrap gap-5 md:gap-10 items-center justify-center 
              md:justify-between my-5 pt-5 md:pt-0 "
              >
                <div>
                  <h1 className=" text-xs md:text-[14px] flex gap-2 md:items-center md:flex-col md:px-10">
                    {" "}
                    <span>{currentItems.length} Items</span>
                  </h1>
                </div>
                {/* items per page dropdown */}
                <div className="flexCenter  px-5  md:pt-0  ">
                  <label className="mb-0 text-xs md:text-[14px]">
                    Items per page:
                  </label>
                  <div className="form-control ml-3">
                    <select
                      onChange={handleChangeItemsPerPage}
                      className="w-full text-xs border h-10 p-2"
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
                <div className="flex flex-col md:flex-row  justify-center items-center  mr-3 md:mr-0 md:px-3">
                  <label className="mb-0  text-xs md:text-[15px] hidden md:block">
                    Filter:
                  </label>
                  <div className="form-control md:ml-3  ">
                    <select
                      onChange={handleChange}
                      className="md:w-full w-28 text-[15px]  py-2 border px-2"
                      type="text"
                      required
                      name="category"
                    >
                      <option value="">Default</option>
                      <option value="Low">Lowest Price</option>
                      <option value="High">Highest Price</option>
                      <option value="Offer">Offer</option>
                      <option value="Newest">Newest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {currentItems.length >= 1 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5  price-range-shadow p-2">
                {currentItems.map((product) => {
                  return (
                    <ProductDetails
                      key={product._id}
                      product={product}
                    ></ProductDetails>
                  );
                })}
              </div>
            ) : (
              <div className="mt-20 py-15 px-0 text-center">
                <div>
                  <h2 className="text-3xl text-gray-500 py-10">
                    {" "}
                    Not Found. Search Again..
                  </h2>

                  <NavLink to="/">
                    <button className="py-2 px-4 rounded bg-gray-500 text-white font-semibold ">
                      Go to Home
                    </button>
                  </NavLink>
                </div>
              </div>
            )}
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
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;

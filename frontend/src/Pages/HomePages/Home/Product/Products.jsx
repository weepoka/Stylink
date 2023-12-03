import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Api/AuthProvider/AuthProvider";
import ProductDetails from "./ProductDetails";

const Products = () => {
  const [productCategory, setProductCategory] = useState([]);
  const [filterProductCategory, setFilterProductCategory] = useState([]);
  const [noOfElement, setNoOfElement] = useState(8);
  const [selectedPrice, setSelectedPrice] = useState();
  const [searchParams] = useSearchParams();

  const { product } = useContext(AuthContext);

  useEffect(() => {
    setProductCategory(product);
  }, [product]);
  // console.log("products", product);

  // console.log("productCategory", productCategory);
  // console.log("product", product);

  // console.log(product);
  // // Load product data
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_SERVER}/products/displayProducts`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setProduct(data.data);
  //       setProductCategory(data.data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
  // console.log(productCategory);

  // category filter

  //check category

  //for searching for products

  //more product show

  // console.log(searchParams);

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
    // console.log("click");
  };

  //  console.log(products);

  // console.log(`searchParams`, searchParams.get("min_price"));
  // console.log(`searchParams`, searchParams.get("max_price"));
  // console.log(`searchParams`, searchParams.get("search"));
  const min_price =
    searchParams.get("min_price") === null ? "" : searchParams.get("min_price");
  const max_price =
    searchParams.get("max_price") === null ? "" : searchParams.get("max_price");
  const search =
    searchParams.get("search") === null ? "" : searchParams.get("search");

  // check price and search items

  // check price and search items
  useEffect(() => {
    filterProducts();
  }, [search, min_price, max_price, productCategory]);

  const filterProducts = () => {
    if (search.length || min_price.length || max_price.length) {
      const min = parseFloat(min_price);
      const max = parseFloat(max_price);

      const filtered = productCategory.filter((product) => {
        if (min > 0 && min > product.oldPrice) {
          return false;
        }

        if (max > 0 && max < product.oldPrice) {
          return false;
        }

        if (
          search.length > 0 &&
          !product.name.toLowerCase().includes(search.toLowerCase())
        ) {
          return false;
        }

        return true;
      });
      setFilterProductCategory(filtered);
    } else {
      setFilterProductCategory(productCategory);
    }
  };

  // console.log(selectedPrice);
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
  const slice = filteredList?.slice(0, noOfElement);
  // console.log(slice);
  return (
    <div className=" bg-[#f6f9fc]">
      {/* [products] text*/}
      <div className=" container py-10 ">
        <div className="  my-10">
          <h2 className="pb-2 md:px-8 text-xl font-bold text-left text-gray-800 md:text-3xl dark:text-gray-400">
            Featured Products
          </h2>
          {/* <div className="w-60 mb-6 border-b border-button dark:border-gray-400"></div> */}
        </div>
        <div className=" my-10 ">
          <div className="flex md:px-8  gap-10 items-center justify-between my-5 ">
            <div className="pt-3">
              <h2 className="text-center  text-md">
                Showing Products:{" "}
                <span className="text-heading ml-2 font-bold text-md">
                  {slice.length}
                </span>
              </h2>
            </div>

            {/* price filtering */}
            <div className="flex justify-center items-center ">
              <label className="mb-0 font-bold text-xl">Filter:</label>
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
          {/* {slice?.map((product) => (
            <ProductDetails
              key={product._id}
              product={product}
            ></ProductDetails>
          ))} */}
          <ProductDetails />
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => loadMore()}
            className="px-3 py-2 text-white duration-300
             bg-button hover:bg-gray-900"
          >
            More products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

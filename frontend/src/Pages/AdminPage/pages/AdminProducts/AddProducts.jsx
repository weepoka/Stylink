import React, { useContext, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { SiMinutemailer } from "react-icons/si";

import { toast } from "react-hot-toast";

import { Icon } from "@iconify/react";

import { AuthContext } from "./../../../../Api/AuthProvider/AuthProvider";
import { category } from "../../../../Api/ApiServices/FakeApi";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
// Constants for error messages
const ERROR_MESSAGES = {
  IMAGE_REQUIRED: "Please provide product image",
  INVALID_REGULAR_PRICE: "Please provide a valid regular price",
  IMAGE_LIMIT_EXCEEDED: "Image cannot be more than 3",
};

const AddProducts = () => {
  // MODAL opening state
  const [openModal, setOpenModal] = useState();
  const [openFeatureModel, setFeatureModel] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [offerPrice, setOfferPrice] = useState(0);
  const [selectedSubcategoryIndex, setSelectedSubcategoryIndex] = useState(0);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [subCategory, setSubCategory] = useState("");
  const [categoryData, setCategory] = useState(category);
  const [descriptionData, setDescriptionData] = useState([]);
  const [description, setDescription] = useState("");
  const [descriptionTitle, setDescriptionTitle] = useState("");
  const [newArrival, setNewArrival] = useState(false);
  const { setReFetch } = useContext(AuthContext);
  console.log(categoryData);
  // feature states for featured products
  const [header, setFeatureHeading] = useState("");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [features, setFeatures] = useState({});
  const [featureDatas, setFeatureDatas] = useState([]);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // formRef.current.reset();
      if (!selectedImages.length) {
        setError(ERROR_MESSAGES.IMAGE_REQUIRED);
        return;
      }

      const formDataObj = new FormData();
      // formData.featureDatas = featureDatas;
      // formData.subcategory = subCategory;
      formData.newArrival = newArrival;
      formData.descriptionData = descriptionData;

      formDataObj.append("product", JSON.stringify(formData));

      selectedImages.forEach((image) => {
        formDataObj.append("images", image);
      });
      console.log(formData);
      // return;
      const response = await fetch(`${apiUrl}/products`, {
        method: "POST",
        body: formDataObj,
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // document.getElementById("myForm").reset();
        // document.getElementById("total").value = 0;
        toast.success("Product added");
        setSelectedImages([]);
        console.log("Data and images uploaded successfully");
        setReFetch((prev) => !prev);
        return;
      }
      //  else {
      //   //   console.error("Upload failed");
      //   // }
    } catch (error) {
      toast.error("Product upload failed");
      console.error("Error uploading data and images:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // | Image add and remove functionality ------start--------
  const handleRemoveSelectedImage = (index) => {
    const images = [...selectedImages];
    const deletedImage = images.splice(index, 1);
    setSelectedImages(images);
  };

  const handleImageChange = (e) => {
    let files = e.target.files;
    console.log({ files });
    const imageList = [];
    const newLength = files.length + selectedImages.length;

    const isImageQuantityValid =
      files.length > 3 || selectedImages.length > 3 || newLength > 3;

    if (isImageQuantityValid) {
      setSelectedImages([]);
      e.target.value = "";
      return alert(ERROR_MESSAGES.IMAGE_LIMIT_EXCEEDED);
    }

    setSelectedImages([...selectedImages, ...files]);
  };

  // | Image add and remove functionality ------end--------

  // | handle discount functionality ---------start------
  const handleDiscount = (e) => {
    const { name, value } = e.target;

    // Get input elements by their IDs
    let discountPriceInput = document.getElementById("discountPrice");
    let offerPercentageInput = document.getElementById("discount");
    let regularPriceInput = document.getElementById("price");

    // Convert regularPriceInput value to a number
    let regularPrice = Number(regularPriceInput.value);

    // Initialize variables
    let newPrice = 0;
    let percentage = 0;
    let discountPrice = 0;

    // Check if regularPrice is a valid number
    if (!regularPrice || isNaN(regularPrice)) {
      alert(ERROR_MESSAGES.INVALID_REGULAR_PRICE);
      return;
    }

    if (name === "offerPercentage") {
      newPrice = regularPrice - (regularPrice * Number(value)) / 100;
      discountPrice = regularPrice - newPrice;

      // Update discountPriceInput and totalInput values
      discountPriceInput.value = Math.round(discountPrice);

      const newOfferPrice = Number(value) === 0 || !value ? 0 : newPrice;
      // Set values in the formData object
      formData.discountPrice = 0;
      formData.offerPrice = newOfferPrice;
      formData.offerPercentage = Number(value);

      // Update state variables
      setOfferPrice(newOfferPrice);
    } else if (name === "discountPrice") {
      newPrice = regularPrice - Number(value);
      percentage = (value / regularPrice) * 100;

      // Update offerPercentageInput and totalInput values
      offerPercentageInput.value = Math.round(percentage);

      // Set values in the formData object
      const newOfferPrice = Number(value) === 0 || !value ? 0 : newPrice;
      formData.discountPrice = Math.round(value);
      formData.offerPrice = newOfferPrice;
      formData.offerPercentage = 0;

      // Update state variables
      setOfferPrice(newOfferPrice);
    }
  };

  // | handle discount functionality ---------end------

  // | Handeing input change ----start---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(formData);
    setFormData({ ...formData, [name]: value });
    // setSubCategory(
    //   categoryData[selectedCategoryIndex]?.subCategory[selectedSubcategoryIndex]
    // );
  };

  // | Handeing input change ----end---

  const handleCategoryChange = (event) => {
    const newIndex = event.target.selectedIndex;
    setSelectedCategoryIndex(newIndex);

    setSelectedSubcategoryIndex(0); // Reset subcategory index when category changes
  };

  const handleSubcategoryChange = (event) => {
    const newIndex = event.target.selectedIndex;
    setSelectedSubcategoryIndex(newIndex);
    // setSelectedSubcategoryIndex(0);
  };

  // |Feature adding functionality-------start---------
  const addsingleFeature = (e) => {
    e.preventDefault();
    if (!key || !value) return alert("please provide key and value");
    setFeatures((prev) => ({
      ...prev, // Spread the previous state object
      [key]: value, // Add the new key-value pair
    }));

    setKey("");
    setValue("");
  };

  const addFeature = (e) => {
    e.preventDefault();
    if (key || value) return alert("please click on the add More ");
    if (!header)
      return alert("please add some key and vlaue and feature header");
    const data = [...featureDatas];
    const axistingFeatureObj = data.find(
      (item) => item.header.toLowerCase() === header.toLowerCase()
    );
    if (axistingFeatureObj) {
      const axistingFeatures = { ...axistingFeatureObj.features };
      axistingFeatureObj.features = { ...axistingFeatures, ...features };
      setFeatureDatas(data);
      setFeatureHeading("");
      setFeatures({});
      return;
    }

    setFeatureDatas([...featureDatas, { header, features: { ...features } }]);

    setFeatureHeading("");
    setFeatures({});
  };
  console.log(featureDatas);

  const featureItems = [];

  for (const feature in features) {
    featureItems.push(
      <div className="flex text-left" key={feature}>
        <p className="flex-1 border px-5 py-1"> {feature} </p>
        <p className="flex-1 border px-5 py-1">{features[feature]}</p>
      </div>
    );
  }

  // |Feature adding ---------End---------

  // | Description Handle function------start-----
  const handleDesctiptionData = () => {
    if (!description || !descriptionTitle)
      return alert("please check your description or title");

    setDescriptionData([
      ...descriptionData,
      { title: descriptionTitle, description },
    ]);
    setDescription("");
    setDescriptionTitle("");
  };

  console.log(descriptionData);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleFeatureModel = () => {
    setFeatureModel(true);
  };

  return (
    <div className="md:p-20 p-2 w-full xl:max-w-6xl">
      <div>
        <h1 className="text-2xl font-bold text-center pb-5">Add Products</h1>
      </div>
      <div className="">
        <form
          onSubmit={handleSubmit}
          id="myForm"
          ref={formRef}
          encType="multipart/form-data"
        >
          <div className="shadow pb-5">
            <div className="bg-gray-900 text-white py-2 mb-10">
              <h3 className="font-bold text-xl tracking-wide pl-5">
                Product Information
              </h3>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex  items-center justify-between gap-20">
                <label className="mb-2 md:text-lgl block text-gray-500">
                  Product Name
                </label>
                <input
                  autoComplete="off"
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  required
                  className="border py-2 px-5 rounded w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                  placeholder="Product name"
                />
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex  items-center justify-between gap-20">
                <label className="mb-2 md:text-lgl block text-gray-500">
                  Brand
                </label>
                <input
                  autoComplete="off"
                  onChange={handleInputChange}
                  className="border py-2 px-5 rounded w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                  name="brand"
                  required
                  type="text"
                  placeholder="Brand name"
                ></input>
              </div>
            </div>

            <div className="form-group mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-20">
                <label className="mb-2 md:text-lgl py-2 block text-gray-500">
                  Category
                </label>
                <select
                  autoComplete="off"
                  required
                  onChange={(e) => {
                    handleCategoryChange(e);
                    handleInputChange(e);
                  }}
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                  type="text"
                  name="category"
                >
                  <option>Select Category</option>
                  {categoryData.map((item, idx) => (
                    <option key={idx} value={item.category}>
                      {item.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-20">
                <label
                  htmlFor="subcategory"
                  className="mb-2 md:text-lgl py-2 block text-gray-500"
                >
                  Sub-Category
                </label>
                <input
                  onChange={(e) => {
                    // handleSubcategoryChange(e);
                    handleInputChange(e);
                  }}
                  type="text"
                  name="subcategory"
                  id="subcategory"
                  placeholder="Sub-category name"
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                />
                {/* <select
                  autoComplete="off"
                  required
                  onChange={(e) => {
                    handleSubcategoryChange(e);
                    handleInputChange(e);
                  }}
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                  type="text"
                  name="subcategory"
                  placeholder="Sub-category name"
                >
                  <option>Select Subcategory</option>
                  {categoryData[selectedCategoryIndex]?.subCategory.map(
                    (subCategory, idx) => (
                      <option key={idx} value={subCategory}>
                        {subCategory}
                      </option>
                    )
                  )}
                </select> */}
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-20">
                <label className="mb-2 md:text-lgl py-2 block text-gray-500">
                  Stock Quantity
                </label>
                <input
                  autoComplete="off"
                  min={0}
                  onChange={handleInputChange}
                  type="number"
                  name="stock"
                  required
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                  placeholder="Quantity (ex. 20)"
                />
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-20">
                <label className="mb-2 md:text-lgl py-2 block text-gray-500">
                  Product Serial No.
                </label>
                <input
                  autoComplete="off"
                  onChange={handleInputChange}
                  type="text"
                  name="productPin"
                  required
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                  placeholder="Product serial No."
                />
              </div>
            </div>
          </div>

          <div className="shadow pb-5 my-10">
            <div className="bg-gray-900 text-white py-2 my-10">
              <h3 className="font-bold text-xl tracking-wide pl-5">
                New Products
              </h3>
            </div>

            <div className="p-5">
              <div className="border md:border-none">
                <input
                  autoComplete="off"
                  onChange={handleInputChange}
                  className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600   mt-5"
                  type="checkbox"
                  name="newArrival"
                ></input>
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  New product
                  <span className="text-sm text-gray-500 ml-3">
                    (If you product is new, then click here)
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="shadow pb-5 my-10">
            <div className="bg-gray-900 text-white py-2 my-10">
              <h3 className="font-bold text-xl tracking-wide pl-5">
                Product Price
              </h3>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-20">
                <label
                  htmlFor="price"
                  className="mb-2 md:text-lgl py-2 block text-gray-500"
                >
                  Regular Price
                </label>
                <input
                  autoComplete="off"
                  min={0}
                  onChange={handleInputChange}
                  type="number"
                  name="oldPrice"
                  id="price"
                  required
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                  placeholder="Regular price"
                />
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-5">
                <label
                  htmlFor="discount"
                  className="mb-2 md:text-lgl py-2 block text-gray-500"
                >
                  Percentage
                </label>
                <input
                  autoComplete="off"
                  min={0}
                  onChange={(e) => {
                    // handleInputChange(e);
                    handleDiscount(e);
                  }}
                  type="number"
                  name="offerPercentage"
                  id="discount"
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                  placeholder="offer (%)"
                />
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-5">
                <label
                  htmlFor="discountPrice"
                  className="mb-2 md:text-lgl py-2 block text-gray-500"
                >
                  Discount Price
                </label>
                <input
                  autoComplete="off"
                  onChange={(e) => {
                    // handleInputChange(e);
                    handleDiscount(e);
                  }}
                  min={0}
                  type="number"
                  name="discountPrice"
                  id="discountPrice"
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                  placeholder="discount price"
                />
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-5">
                <label
                  htmlFor="discountPrice"
                  className="mb-2 md:text-lg py-2 block text-gray-500"
                >
                  Update Price
                </label>
                <Icon
                  icon="tabler:currency-taka"
                  width={30}
                  className="text-red-600"
                />
                <input
                  autoComplete="off"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  type="number"
                  name="offerPrice"
                  disabled
                  value={offerPrice}
                  id="total"
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl bg-orange-400 text-white"
                  placeholder="new price"
                />
              </div>
            </div>
          </div>

          <div className="shadow pb-5 my-10">
            <div className="bg-gray-900 text-white py-2 my-10">
              <h3 className="font-bold text-xl tracking-wide pl-5">
                Product Images Upload
              </h3>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-20">
                <label className="mb-2 md:text-lg py-2 block text-gray-500">
                  Image
                </label>{" "}
                <input
                  autoComplete="off"
                  required
                  type="file"
                  name="images"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                  // onBlur={handleInputBlur}
                />
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              {error && <p className="text-red-700">{error}</p>}
              <div className="lg:flex items-center justify-between">
                <label className="mb-2 md:text-lg py-2 block text-gray-500">
                  Your Uploaded Images
                </label>
                <div className="lg:flex gap-5 border p-3 rounded bg-slate-100">
                  {selectedImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index}`}
                        style={{
                          maxWidth: "150px",
                          maxHeight: "150px",
                          margin: "10px",
                        }}
                      />
                      <p
                        className="text-xl bg-red-700 text-white absolute cursor-pointer top-1 right-1"
                        onClick={() => handleRemoveSelectedImage(index)}
                      >
                        <Icon icon="line-md:close-small" />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="shadow pb-5 my-10">
            <div className="bg-gray-900 text-white py-2 my-10">
              <h3 className="font-bold text-xl tracking-wide pl-5">
                Product Description & Features
              </h3>
            </div>
            <div className="form-control mb-3 px-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <div>
                    <label className="mb-2 md:text-lg py-2 block text-gray-500">
                      Description Title
                    </label>
                    <input
                      autoComplete="off"
                      onChange={(e) => setDescriptionTitle(e.target.value)}
                      className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                      type="text"
                      placeholder="title"
                      value={descriptionTitle}
                      name="descriptionTitle"
                    />
                  </div>
                  <div>
                    <label className="mb-2 md:text-lg py-2 block text-gray-500">
                      Description
                    </label>
                    <textarea
                      autoComplete="off"
                      onChange={(e) => setDescription(e.target.value)}
                      className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                      type="text"
                      name="description"
                      placeholder="product description"
                      rows="10"
                      value={description}
                    ></textarea>
                  </div>
                  <div className="flex gap-8 max-w-xs lg:max-w-lg">
                    <span
                      onClick={handleDesctiptionData}
                      className="bg-[#ea6b28] lg:text-xl cursor-pointer text-white p-1 my-2 block w-1/2 text-center "
                    >
                      add Description
                    </span>
                    <span
                      onClick={handleOpenModal}
                      className="bg-[#ea6b28] lg:text-xl cursor-pointer text-white p-1 my-2 block w-1/2 text-center "
                    >
                      view
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="form-control flex flex-col ">
                    <label
                      htmlFor="feature-name"
                      className="mb-2 md:text-lg py-2 block text-gray-500"
                    >
                      Feature Heading:
                    </label>
                    <input
                      type="text"
                      id=""
                      className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                      value={header}
                      onChange={(e) => setFeatureHeading(e.target.value)}
                    />
                  </div>
                  {/* feature key and value box */}
                  <div className="flex flex-col gap-3">
                    <div className="form-control flex flex-col">
                      <label
                        htmlFor="key "
                        className="mb-2 md:text-lg py-2 block text-gray-500"
                      >
                        Feature key:
                      </label>
                      <input
                        type="text"
                        id="key"
                        className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                      />
                    </div>
                    <div className="form-control  flex flex-col">
                      <label
                        htmlFor="value"
                        className="mb-2 md:text-lg py-2 block text-gray-500"
                      >
                        Value:
                      </label>
                      <textarea
                        type="text"
                        id="value"
                        className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={addsingleFeature}
                        className="text-white font-bold py-1 px-2  bg-[#ea6b28]"
                      >
                        add More
                      </button>
                    </div>
                  </div>
                  {/* ....................................... */}
                  <div className="mb-10">
                    <div className="bg-gray-500 text-white py-2 my-10">
                      <h3 className="font-bold  tracking-wide pl-5 flex gap-5 items-center justify-between">
                        <span className="flex">
                          Your Added Features
                          <Icon icon="line-md:arrow-down" width={20} />
                        </span>
                      </h3>
                    </div>
                    <div>{featureItems}</div>
                  </div>

                  {/* ............................................ */}
                  <div className="flex justify-between">
                    <span
                      onClick={handleFeatureModel}
                      className="mr-5 cursor-pointer p-1 rounded-md text-white bg-[#ea6b28]"
                    >
                      View
                    </span>
                    <button
                      onClick={addFeature}
                      className="text-white font-bold py-1 px-2  bg-[#ea6b28]"
                    >
                      Add Feature
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-10" />

          <div>
            <span className="text-sm text-gray-500">
              *** note: check again before ADD PRODUCT click the button
            </span>
            <button
              className="mt-10 flex w-full lg:w-1/2 mx-auto rounded-full justify-center
			   items-center bg-[#ea6b28] text-white py-2 lg:px-10 uppercase tracking-widest font-extrabold"
              type="submit"
            >
              {loading ? (
                "Product uploading ..."
              ) : (
                <>
                  Add Product
                  <Icon
                    icon="line-md:upload-loop"
                    width={25}
                    className="ml-5"
                  />
                </>
              )}
            </button>
          </div>
        </form>

        {/* {openModal ? (
          <DescriptionModal
            setOpenModal={setOpenModal}
            descriptionData={descriptionData}
            setDescriptionData={setDescriptionData}
          />
        ) : (
          <></>
        )}

        {openFeatureModel && (
          <FeatureModal
            setOpenModal={setFeatureModel}
            featureDatas={featureDatas}
            setFeatureDatas={setFeatureDatas}
          />
        )} */}
      </div>
    </div>
  );
};

export default AddProducts;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { SiMinutemailer } from "react-icons/si";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { Icon } from "@iconify/react";

import { AuthContext } from "../../../../Api/AuthProvider/AuthProvider";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const ERROR_MESSAGES = {
  IMAGE_REQUIRED: "Please provide product image",
  INVALID_REGULAR_PRICE: "Please provide a valid regular price",
  IMAGE_LIMIT_EXCEEDED: "Image cannot be more than 3",
};
const AdminUpdateProduct = () => {
  // | description
  const [openModal, setOpenModal] = useState();
  const [descriptionData, setDescriptionData] = useState([]);
  const [description, setDescription] = useState("");
  const [descriptionTitle, setDescriptionTitle] = useState("");

  //*comment as per requirements==>
  const [error, setError] = useState("");
  const { setReFetch } = useContext(AuthContext);
  const id = useParams();
  const [offerPrice, setOfferPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [offerPercentage, setOfferPercentage] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [newArrival, setNewArrival] = useState(false);

  const [selectedSubcategoryIndex, setSelectedSubcategoryIndex] = useState(0);

  const handleSubmit = async (e) => {
    // formData.offerPrice;
    setLoading(true);

    e.preventDefault();

    formData.offerPrice = offerPrice;
    formData.newArrival = newArrival;
    formData.descriptionData = descriptionData;

    // console.log({ formData });

    let formDataObj = new FormData();

    console.log(formData);

    if (selectedImages.length) {
      formDataObj.append("product", JSON.stringify(formData));
      selectedImages.forEach((image) => {
        formDataObj.append("images", image);
      });
    }

    try {
      let response;
      if (selectedImages.length) {
        response = await fetch(`${apiUrl}/products/${product._id}`, {
          method: "PUT",
          body: formDataObj,
          credentials: "include",
        });
      } else {
        response = await fetch(`${apiUrl}/products/${product._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        });
      }

      const data = await response.json();

      if (response.ok) {
        toast.success("successfully product updated");
        setReFetch((prev) => !prev);
        return;

        // Reset form and image state or perform other actions
      } else {
        alert("Update failed");
        console.error("Update failed");
      }
    } catch (error) {
      toast.error("update failed");
      console.error("Error uploading data and images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveSelectedImage = (index) => {
    const images = [...selectedImages];
    const deletedImage = images.splice(index, 1);
    setSelectedImages(images);
  };

  const handleImageChange = (e) => {
    let files = e.target.files;
    // console.log({ files });
    const imageList = [];
    const newLength = files.length + selectedImages.length;

    const isImageQuantityValid =
      files.length > 3 || selectedImages.length > 3 || newLength > 3;

    if (isImageQuantityValid) {
      setSelectedImages([]);
      e.target.value = "";
      return alert("image cannot be more than 3 ");
    }

    setSelectedImages([...selectedImages, ...files]);
  };

  //offer price calculation
  const getPrice = (e) => {
    e.preventDefault();
    var numVal1 = Number(document.getElementById("price").value);
    var numVal2 = Number(document.getElementById("discount").value) / 100;
    var totalValue = numVal1 - numVal1 * numVal2;
    document.getElementById("total").value = totalValue.toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await fetch(`${apiUrl}/products/${id?.id}`);
        const data = await res.json();
        // console.log(data);
        if (res.ok) {
          setNewArrival(data.newArrival);
          setDescriptionData(data.descriptionData);
          setProduct(data);
        }
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  }, [id?.id]);

  //offer price calculation
  const handleDiscount = (e) => {
    const { name, value } = e.target;

    // Get input elements by their IDs
    let discountPriceInput = document.getElementById("discountPrice");
    let offerPercentageInput = document.getElementById("discount");
    let regularPriceInput = document.getElementById("price");
    const offerPriceInput = document.getElementById("total");

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
      offerPriceInput.value = newOfferPrice;

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
      offerPriceInput.value = newOfferPrice;

      // Update state variables
      setOfferPrice(newOfferPrice);
    }
  };
  console.log(formData);

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

  return (
    <div className="md:p-20 p-10">
      <Link to="/admin/adminProducts" className="font-bold ">
        <button
          type=""
          className="text-xs md:text-lg mb-10 md:mb-0 flex gap-2 items-center border border-gray-900 rounded-full px-3 py-1 duration-300 hover:bg-[#4093CB]"
        >
          <Icon icon="ph:arrow-line-left-bold" />
          Go to Products
        </button>
      </Link>

      <div className="my-20 w-full xl:max-w-6xl mx-auto">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="shadow pb-5">
            <div className="bg-gray-900 text-white py-2 mb-10">
              <h3 className="font-bold text-xl tracking-wide pl-5">
                Product Information
              </h3>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex  items-center justify-between gap-20">
                <label className="mb-2 md:text-lg block text-gray-900">
                  Product Name
                </label>
                <input
                  defaultValue={product?.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  className="border py-2 px-5 rounded w-full max-w-xs lg:max-w-lg xl:max-w-xl bg-slate-100"
                />
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex  items-center justify-between gap-20">
                <label className="mb-2 md:text-lgl block text-gray-900">
                  Brand
                </label>
                <input
                  className="border py-2 px-5 rounded w-full max-w-xs lg:max-w-lg xl:max-w-xl bg-slate-100"
                  name="brand"
                  defaultValue={product?.brand}
                  onChange={handleInputChange}
                  type="text"
                ></input>
              </div>
            </div>

            <div className="form-group mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-20">
                <label className="mb-2 md:text-lgl py-2 block text-gray-900">
                  Category
                </label>
                <input
                  defaultValue={product?.category}
                  onChange={handleInputChange}
                  className="border py-2 px-5 rounded w-full max-w-xs lg:max-w-lg xl:max-w-xl bg-slate-100"
                  name="category"
                  type="text"
                ></input>
              </div>
            </div>

            <div className="form-group mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-20">
                <label
                  htmlFor="subcategory"
                  className="mb-2 md:text-lgl py-2 block text-gray-900"
                >
                  Sub-Category
                </label>
                <input
                  defaultValue={product?.subcategory}
                  onChange={handleInputChange}
                  className="border py-2 px-5 rounded w-full max-w-xs lg:max-w-lg xl:max-w-xl bg-slate-100"
                  name="category"
                  type="text"
                ></input>
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-20">
                <label className="mb-2 md:text-lgl py-2 block text-gray-900">
                  Stock Quantity
                </label>
                <input
                  defaultValue={product?.stock}
                  onChange={handleInputChange}
                  type="quantity"
                  name="stock"
                  className="border py-2 px-5 rounded w-full max-w-xs lg:max-w-lg xl:max-w-xl bg-slate-100"
                />
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-20">
                <label className="mb-2 md:text-lgl py-2 block text-gray-900">
                  Product Serial No.
                </label>
                <input
                  defaultValue={product?.productPin}
                  onChange={handleInputChange}
                  type="text"
                  name="productPin"
                  required
                  className="border py-2 px-5 rounded w-full max-w-xs lg:max-w-lg xl:max-w-xl bg-slate-100"
                />
              </div>
            </div>
          </div>

          <div className="shadow pb-5 my-10">
            <div className="bg-gray-900 text-white py-2 my-10">
              <h3 className="font-bold text-xl tracking-wide pl-5">
                New Product
              </h3>
            </div>
            <div className="p-5">
              <input
                onChange={(e) => setNewArrival(e.target.checked)}
                checked={newArrival}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded mt-5"
                type="checkbox"
                name="newArrival"
              ></input>

              <label
                htmlFor="default-checkbox"
                className="ml-2 inline-block  font-medium text-gray-900"
              >
                New product{" "}
                <span className="text-sm text-gray-500">
                  (If you product is new, then click here)
                </span>
              </label>
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
                  className="mb-2 md:text-lgl py-2 block text-gray-900"
                >
                  Regular Price
                </label>
                <input
                  autoComplete="off"
                  onChange={(e) => {
                    handleInputChange(e);
                    handleDiscount(e);
                  }}
                  defaultValue={product?.oldPrice}
                  type="number"
                  name="oldPrice"
                  id="price"
                  required
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                />
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-5">
                <label
                  htmlFor="discount"
                  className="mb-2 md:text-lgl py-2 block text-gray-900"
                >
                  Percentage
                </label>
                <input
                  autoComplete="off"
                  defaultValue={product?.offerPercentage}
                  onChange={(e) => {
                    handleDiscount(e);
                  }}
                  min={0}
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
                  className="mb-2 md:text-lgl py-2 block text-gray-900"
                >
                  Discount Price
                </label>
                <input
                  autoComplete="off"
                  defaultValue={product?.discountPrice}
                  onChange={(e) => {
                    // handleInputChange(e);
                    handleDiscount(e);
                  }}
                  min={0}
                  type="number"
                  name="discountPrice"
                  id="discountPrice"
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                />
              </div>
            </div>

            <div className="form-control mb-3 px-5">
              <div className="lg:flex items-center justify-between gap-5">
                <label
                  htmlFor="discountPrice"
                  className="mb-2 md:text-lg py-2 block text-gray-900"
                >
                  New Price
                </label>
                <Icon
                  icon="tabler:currency-taka"
                  width={30}
                  className="text-red-600"
                />
                <input
                  autoComplete="off"
                  type="number"
                  name="offerPrice"
                  disabled
                  defaultValue={product?.offerPrice}
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
                <label className="mb-2 md:text-lg py-2 block text-gray-900">
                  Image
                </label>{" "}
                <input
                  autoComplete="off"
                  type="file"
                  name="images"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                />
              </div>

              <div className="form-control mb-3">
                {error && <p className="text-red-700">{error}</p>}
                <div className="lg:flex items-center justify-between">
                  <label className="mb-2 md:text-lg py-2 block text-gray-900">
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
          </div>

          <div className="shadow pb-5 my-10">
            <div className="bg-gray-900 text-white py-2 my-10">
              <h3 className="font-bold text-xl tracking-wide pl-5">
                Product Description
              </h3>
            </div>

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
              <div className="flex gap-8 max-w-xl">
                <span
                  onClick={handleDesctiptionData}
                  className="bg-[#006fba] text-xl cursor-pointer text-white p-1 my-2 block w-1/2 text-center "
                >
                  add Description
                </span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm text-gray-500">
              *** note: check again before PRODUCT UPDATE click the button
            </span>
            <button
              className="mt-10 flex w-full lg:w-[30%] mx-auto rounded-full justify-center items-center bg-sky-600 text-white py-2 lg:px-10 uppercase tracking-widest font-extrabold"
              type="submit"
            >
              {loading ? (
                "Updating ..."
              ) : (
                <>
                  Update product
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
      </div>
    </div>
  );
};

export default AdminUpdateProduct;

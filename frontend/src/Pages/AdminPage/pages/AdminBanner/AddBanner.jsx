import React, { useState } from "react";
import { toast } from "react-hot-toast";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
import { Icon } from "@iconify/react";
import { category } from "../../../../Api/ApiServices/FakeApi";

const AddBanner = () => {
  // const { profile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [megaOffer, setMegaOffer] = useState(false);
  const [offerDate, setOfferDate] = useState("");
  const [image, setImage] = useState();
  const form = document.getElementById("banner");

  console.log(selectedCategory);
  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    let formDataObj = new FormData();
    formDataObj.append(
      "data",
      JSON.stringify({ category: selectedCategory, megaOffer, offerDate })
    );
    if (image) {
      formDataObj.append("image", image);
    }

    try {
      let response;
      if (image && image.name) {
        response = await fetch(`${apiUrl}/banner`, {
          method: "POST",
          body: formDataObj,
          credentials: "include",
        });
      } else {
        toast.error("please provide a banner");
      }

      const data = await response.json();

      if (response.ok) {
        setImage({});
        toast.success("banner added successfully");
        form.reset();
        // Reset form and image state or perform other actions
      } else {
        toast.error("upldoad faild");
        console.error("Update failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(megaOffer);

  return (
    <div className="p-2 md:p-20 w-full xl:max-w-6xl">
      <div className="shadow pb-5">
        <div className="bg-heading text-white py-2 mb-10">
          <h3 className="font-bold text-xl tracking-wide pl-5">
            Banner Image Upload
          </h3>
        </div>

        <form id="banner">
          <div className="form-control mb-3 px-5">
            <div className="lg:flex  items-center justify-between gap-20">
              <label className="mb-2 md:text-lgl block text-gray-500">
                Banner Image
              </label>
              <input
                autoComplete="off"
                required
                id="imagesId"
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={(e) => setImage(e.target.files[0])}
                className="border py-2 px-5 rounded w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                // onBlur={handleInputBlur}
              />
            </div>
          </div>

          <div className="form-control mb-3 px-5">
            <div className="lg:flex  items-center justify-between gap-20">
              <label className="mb-2 md:text-lgl block text-gray-500">
                Category
              </label>
              <select
                autoComplete="off"
                required
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                type="text"
                name="category"
              >
                <option value=""> Select Category</option>
                {category?.map((item, idx) => (
                  <option key={idx} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-control mb-3 px-5">
            <div className="lg:flex  items-center justify-between gap-20">
              <label className="mb-2 md:text-lgl block text-gray-500">
                Mega Offer
              </label>
              <div className="flex items-center justify-center gap-5">
                <input
                  type="checkbox"
                  id="mega"
                  className="w-5 h-5"
                  name="megaOffer"
                  onChange={(e) => {
                    setMegaOffer(e.target.checked);
                  }}
                />
                <p className="text-sm text-gray-500">
                  If you want to give mega offer then click this checkbox
                </p>
              </div>
            </div>
          </div>

          <div className="form-control mb-3 px-5">
            <div className="lg:flex  items-center justify-between gap-20">
              <label className="mb-2 md:text-lgl block text-gray-500">
                Offer Date
              </label>
              <input
                type="text"
                className="border rounded py-2 px-5 w-full max-w-xs lg:max-w-lg xl:max-w-xl"
                id="offer"
                name="OfferDate"
                onChange={(e) => {
                  setOfferDate(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="px-5 mt-10 ">
            <span className="text-sm text-gray-500">
              *** note: check again before ADD BANNER click the button
            </span>
            <button
              className="mt-5 flex w-full lg:w-1/2 mx-auto rounded-full justify-center items-center
               bg-[#40a787] text-white py-2 lg:px-10 uppercase tracking-widest font-extrabold"
              onClick={handleUpload}
            >
              {loading ? (
                "Product uploading ..."
              ) : (
                <>
                  Add Banner
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

export default AddBanner;

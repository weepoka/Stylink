import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
const FeedbackFrom = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReviewText] = useState("");
  console.log(review);
  const hanldeSubmitReview = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <form action=" ">
        <div>
          <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
            How would you rate the overall Experience?*
          </h3>
          <div>
            {[...Array(5).keys()].map((_, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={`${
                    index <= ((rating && hover) || hover)
                      ? "text-yellowColor"
                      : "text-gray-400"
                  } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                  onDoubleClick={() => {
                    setHover(0);
                    setHover(0);
                  }}
                >
                  <span>
                    <AiFillStar />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-[30px]">
          <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
            Share your feedback or suggestion?*
          </h3>
          <textarea
            className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="write your messages"
            onClick={(e) => setReviewText(e.target.value)}
          ></textarea>
          <button
            type="submit"
            onClick={hanldeSubmitReview}
            className="px-2 py-2 bg-blue-500 rounded text-white"
          >
            Submit your feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackFrom;

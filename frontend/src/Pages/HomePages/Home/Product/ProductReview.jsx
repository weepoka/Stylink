import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import FeedbackFrom from "./FeedbackForm";
import avatar from "../../../../assets/images/artist-white.jpg";
const ProductReview = () => {
  const [showFeedback, setFeedbackFrom] = useState(false);
  return (
    <div>
      {" "}
      <div>
        <div className="mb-[50px]">
          <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
            All reviews (272)
          </h4>
          <div className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img src={avatar} alt="" className="w-full" />
              </figure>
              <div>
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                  Ali Ahmed
                </h5>
                <p className="text-[14px] leading-6 text-textColor ">
                  ("12-4-2023")
                </p>
                <p className="text-para mt-3 font-medium text-[15px] ">
                  Good services, highly recommended
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(5).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067FF" />
              ))}
            </div>
          </div>
        </div>
        {!showFeedback && (
          <div className="text-center">
            <button
              onClick={() => setFeedbackFrom(true)}
              className="px-2 py-2 bg-[#0067ff] rounded text-white"
            >
              Give Feedback
            </button>
          </div>
        )}
        {showFeedback && <FeedbackFrom />}
      </div>
    </div>
  );
};

export default ProductReview;

import React, { useContext } from "react";
import ProductDetails from "../Product/ProductDetails";

import { AuthContext } from "../../../../Api/AuthProvider/AuthProvider";
import CustomSlider from "./../../../../Component/hompage/CustomSlider/Slider";

const FlashCard = () => {
  const { product } = useContext(AuthContext);
  // console.log(product);
  const filterFlashProduct = product.filter((item) => item.offerPercentage);
  // console.log(filterFlashProduct);
  const slice = filterFlashProduct?.slice(0, 8);
  return (
    <div className="py-10">
      <CustomSlider
        items={slice.map((product) => (
          <ProductDetails key={product._id} product={product} />
        ))}
      />
    </div>
  );
};

export default FlashCard;

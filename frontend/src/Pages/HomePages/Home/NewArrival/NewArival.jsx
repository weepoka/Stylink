import React, { useContext } from "react";
import newImg from "../../../../assets/icon/new.png";
import ProductDetails from "../Product/ProductDetails";
import { AuthContext } from "../../../../Api/AuthProvider/AuthProvider";
import Marquee from "react-fast-marquee";
const NewArival = () => {
  const { product } = useContext(AuthContext);
  // console.log(product);
  const filterNewArrivalProduct = product.filter((item) => item.newArrival);
  // console.log(filterNewArrivalProduct);
  const slice = filterNewArrivalProduct?.slice(0, 4);
  return (
    <div>
      <div className="bg-[#f6f9fc] relative py-10">
        <section className="container ">
          <div className="flexStart gap-2 ">
            <img src={newImg} alt="" />
            <h1 className="bold-32 text-primary">New Arrival</h1>
          </div>
          {/* <Marquee>
            <div className="px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10">
              {slice?.map((product) => (
                <ProductDetails
                  key={product._id}
                  product={product}
                ></ProductDetails>
              ))}
            </div>
          </Marquee> */}
          <Marquee pauseOnHover className="pt-10 mx-14">
            <div className="marquee-container ">
              {slice?.map((product) => (
                <div key={product._id} className="marquee-card ">
                  <ProductDetails product={product}></ProductDetails>
                </div>
              ))}
            </div>
          </Marquee>
        </section>
      </div>
    </div>
  );
};

export default NewArival;

import React from "react";
import SingleProductDetials from "../SingleProductDetials";

const ProductMoreInfo = ({ product }) => {
  const { descriptionData, featureDatas } = product;
  // const { MPN, Model, Quality, Zoom } = featureDatas[0]?.features;
  // const { header } = featureDatas[0];
  // console.log(featureDatas[0]);
  // console.log(featureDatas[0].features);
  // console.log(MPN, Model, Quality, Zoom);
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto ">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-5  ">
          <div className="col-span-2">
            <div className="overflow-x-auto mt-5 border p-5 bg-white pb-5">
              <h2 className="text-2xl font-bold rounded ">Specification</h2>
              {featureDatas?.map((item, idx) => (
                <div key={idx}>
                  <h3
                    className="my-3 text-xl bg-[#f1f5f9] capitalize  p-1
									 text-[#ea6b28]"
                  >
                    {item.header}
                  </h3>
                  {Object.entries(item.features).map(([key, value], idx) => (
                    <div
                      key={idx}
                      className="flex lg:gap-5 flex-col lg:flex-row capitalize border-b-2 py-2 pb-5"
                    >
                      <div className="lg:flex-1">
                        <span className="text-sm md:text-md opecity-80 ">
                          {key}
                        </span>
                      </div>
                      <div className="lg:flex-1">
                        <span className="font-bold">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="overflow-x-auto mt-5 border p-5 bg-white ">
              <div className="">
                <h1 className=" rounded-none tracking-widest">
                  <span className="font-bold text-2xl">Description </span>
                </h1>
                <div>
                  {descriptionData?.map((desc) => (
                    <div className=" my-5" key={desc._id}>
                      <h2 className="capitalize text-xl font-bold">
                        {desc.title}
                      </h2>
                      <p className="capitalize">{desc.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="...">{/* Adsence */}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductMoreInfo;

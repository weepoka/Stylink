import React, { useEffect, useState, useRef } from "react";
import stylink from "../../../assets/Logo/stylink.png";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaDownload } from "react-icons/fa";
import { Icon } from "@iconify/react";
const Invoice = ({ order }) => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const invoiceRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto  p-8 rounded-lg shadow-md border ">
        <div></div>
        <div className="" id="print-section" ref={invoiceRef}>
          <div className="py-5 flex justify-between gap-5">
            <div>
              <img src={stylink} alt="" className=" w-52" />
              <div className="pt-5 font-bold">
                {/* <p> Time : {date.toLocaleTimeString()}</p> */}
                <p> Date : {date.toLocaleDateString()}</p>
              </div>
            </div>
            <div className="text-right ">
              <button
                onClick={handlePrint}
                className="mt-4 ml-auto bg-button rounded-full text-white px-4 py-2 flex gap-2
           "
              >
                Print Invoice <Icon icon="line-md:download-loop" width={30} />
              </button>
            </div>
          </div>
          <hr />

          <div className="py-5 flex justify-between gap-5">
            <div>
              <h1 className="font-bold text-xl py-2">Bill From:</h1>
              <p className="font-bold text-xl py-2 text-Heading">
                Stylink Tech
              </p>
              <p>Road-11, Kallyanpur, Dhaka-1207, Bangladesh</p>
              <p>+88 013326-01555</p>
              <p>stylinkitsolution@gmail.com</p>
            </div>
            <div>
              <h1 className="font-bold text-xl py-2">Bill To:</h1>
              <p>{order?.user?.name}</p>
              <p>{order?.contactNumber}</p>
              <p>
                {order?.address}, {order?.area}, {order?.city}
              </p>
            </div>
          </div>
          <hr />
          <div className="mb-4 my-5">
            <p>
              <strong>
                {order?.transactionId ? "Transaction ID" : "Order ID"}:
              </strong>{" "}
              {order.transactionId ? order?.transactionId : order._id}
            </p>
            <p className="pt-2">
              <strong>Order Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#ea6b28] inline py-2">
              Products
            </h3>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left">Name</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-end">Price</th>
                </tr>
              </thead>
              <tbody>
                {order?.products?.map((product) => (
                  <tr key={product.id}>
                    <td className="text-left">{product.name}</td>
                    <td className="text-center">{product.quantity}</td>
                    <td className="text-end justify-end flex items-center">
                      {" "}
                      <TbCurrencyTaka />
                      {product.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-2 p-2">
            <p className="my-2 font-bold text-end">
              Delivery Fee : {order.deliveryFee}
            </p>
            <p className="my-2 font-bold text-end">Vat/Tax 10% : {order.vat}</p>
          </div>
          <div className="mt-6 ">
            <p className="text-lg w-full  items-center justify-end  bg-orange-500 inline-flex text-white px-3 py-2">
              Total:
              <TbCurrencyTaka />
              {order?.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

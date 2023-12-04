import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";

const AdminOrdersList = ({ order }) => {
  const {
    address,
    user,
    email,
    contactNumber,
    price,
    products,
    paidStatus,
    orderStatus,
    updatedAt,
  } = order;
  const [statusColor, setStatusColor] = useState("");
  const [statusTextColor, setTextStatusColor] = useState("");

  useEffect(() => {
    if (orderStatus === "Delivered") {
      setStatusColor("#dcfce7");
      setTextStatusColor("#22c55e");
    } else if (orderStatus === "pending") {
      setStatusColor("#fef9c3");
      setTextStatusColor("#ca8a04");
    } else if (orderStatus === "canceled") {
      setStatusColor("#fee2e2");
      setTextStatusColor("#dc2626");
    } else {
      setStatusColor("");
    }
  }, []);

  const date = new Date();
  return (
    <>
      {/* <tr className="py-10 text-center">
        <td className="py-6 text-center">
          {products?.map((item) => (
            <>
              <p>{item.productPin}</p>
            </>
          ))}
        </td>
        <td className="py-6 text-center">
          {products?.map((item) => (
            <>
              <p>{item.name}</p>
            </>
          ))}
        </td>
        <td scope="row">
          {products?.map((item) => (
            <>
              <p>{item.quantity}</p>
            </>
          ))}
        </td>

        <td>{user?.name}</td>
        <td>{contactNumber}</td>
        <td>{paidStatus.toString()}</td>
        <td>
          {orderStatus === "Delivered" ? (
            <span className="font-bold text-green-500">{orderStatus}</span>
          ) : (
            <span className="font-bold">{orderStatus}</span>
          )}
          <span
            className={`${statusColor && `text-${statusColor}-400`} font-bold`}
          >
            {orderStatus}
          </span>
        </td>
        <td>{date.toLocaleDateString("en-US", updatedAt)}</td>
        <td>{price}</td>
        <td>
          <Link to={`${order?._id}`} className="text-green-600 font-bold">
            <div className="flex items-center">
              <span>Update</span> <BiEdit className="text-2xl ml-4" />
            </div>
          </Link>
        </td>
      </tr> */}
      <tr className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-transparent">
        <td className="px-6 py-5 font-medium">
          {products?.map((item) => (
            <>
              <p>{item.name}</p>
            </>
          ))}
        </td>
        <td className="px-6 py-5 font-medium ">{user?.name}</td>
        <td className="px-6 py-5 font-medium ">{contactNumber}</td>

        <td className="px-6 py-5 font-medium ">
          {date.toLocaleDateString("en-US", updatedAt)}
        </td>
        <td>
          <span
            className={` text-[${statusTextColor}] bg-[${statusColor}]  
          inline-block px-2 py-1 text-center rounded-full `}
          >
            {orderStatus}
          </span>
        </td>
        <td className="px-6 py-5 font-medium ">
          {products?.map((item) => (
            <>
              <p>{item.quantity}</p>
            </>
          ))}
        </td>
        <td className="px-6 py-5 font-medium ">{price}</td>
        <td className="px-6 py-5 ">
          <Link
            to={`${order?._id}`}
            className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
          >
            Edit
          </Link>
        </td>
      </tr>
    </>
  );
};

export default AdminOrdersList;

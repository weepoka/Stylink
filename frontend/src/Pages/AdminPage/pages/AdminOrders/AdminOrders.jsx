import React, { useEffect, useState } from "react";
import AdminOrdersList from "./AdminOrdersList";
import "./Product.css";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <span
          key={number}
          onClick={() => onPageChange(number)}
          className={number === currentPage ? "active" : ""}
        >
          {number}
        </span>
      ))}
    </div>
  );
};
const AdminOrders = () => {
  const [orders, setorders] = useState([]);
  // const {Description,category,name,new-price,quantity}=product

  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(10);

  //data fecthing
  useEffect(() => {
    fetch(`${apiUrl}/order`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        // Sort orders by updatedAt in descending order
        const sortedOrders = data.data.sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        setorders(sortedOrders);
      });
  }, []);

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="bg-adminBg w-full  p-4 pt-10">
      <h1 className="mt-10 mb-14 text-3xl font-bold text-center">
        Orders Information
      </h1>
      {/* <div className="mask w-[90%] overflow-hidden">
        <div>
          <table
            className="
		 border border-gray-70"
          >
            <thead className="py-5 ">
              <tr className=" ">
                <th className="px-5 py-5  font-bold text-sm  md:text-xl">
                  Product Code
                </th>
                <th className="px-5 py-5  font-bold text-sm  md:text-xl">
                  Product Name
                </th>
                <th className="px-5 font-bold text-sm md:text-xl">Items</th>
                <th className="px-5 font-bold text-sm md:text-xl">
                  Customer Name
                </th>
                <th className="px-5 font-bold text-sm md:text-xl">Mobile</th>
                <th className="px-5 font-bold text-sm md:text-xl">paid</th>
                <th className="px-5 font-bold text-sm md:text-xl">Status</th>
                <th className="px-5 font-bold text-sm md:text-xl">Data</th>
                <th className="px-5 font-bold text-sm md:text-xl">Total</th>
                <th className="px-5 font-bold text-sm md:text-xl">Operation</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders?.map((order) => (
                <AdminOrdersList
                  key={order._id}
                  order={order}
                ></AdminOrdersList>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-container">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div> */}

      <div className="grid   grid-cols-1 gap-6 ">
        <div className="pt-4 bg-white rounded shadow dark:text-gray-100 dark:bg-gray-900">
          <div className="flex px-6 pb-4 border-b dark:border-gray-700">
            <h2 className="text-xl font-bold dark:text-gray-400">All Orders</h2>
          </div>
          <div className="p-4 overflow-x-auto overflow-y-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-xs text-left text-gray-500 dark:text-gray-400">
                  <th className="px-6 pb-3 font-medium">Product Name</th>
                  <th className="px-6 pb-3 font-medium ">Customer Name </th>
                  <th className="px-6 pb-3 font-medium ">Mobile </th>

                  <th className="px-6 pb-3 font-medium ">Date </th>
                  {/* <th className="px-6 pb-3 font-medium">Email </th> */}
                  <th className="px-6 pb-3 font-medium">Status </th>
                  <th className="px-6 pb-3 font-medium ">Quantity</th>
                  <th className="px-6 pb-3 font-medium ">Total </th>
                  <th className="px-6 pb-3 font-medium"> </th>
                </tr>
              </thead>
              <tbody>
                {currentOrders?.map((order) => (
                  <AdminOrdersList
                    key={order._id}
                    order={order}
                  ></AdminOrdersList>
                ))}
                <tr className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-transparent">
                  <td className="px-6 py-5 font-medium">Iphone x cover</td>
                  <td className="px-6 py-5 font-medium">Arif</td>
                  <td className="px-6 py-5 font-medium ">018542021</td>
                  <td className="px-6 py-5 font-medium ">1.10.23</td>

                  <td>
                    <span
                      className="inline-block px-2 py-1 text-center
                     text-green-600 bg-green-100 rounded-full
                      dark:text-green-700 dark:bg-green-200"
                    >
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-5 font-medium ">1</td>
                  <td className="px-6 py-5 font-medium ">Tk. 1000</td>
                  <td className="px-6 py-5 ">
                    <a
                      href="#"
                      className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-transparent">
                  <td className="px-6 py-5 font-medium">Iphone x cover</td>
                  <td className="px-6 py-5 font-medium">Arif</td>
                  <td className="px-6 py-5 font-medium ">018542021</td>
                  <td className="px-6 py-5 font-medium ">1.10.23</td>

                  <td>
                    <span
                      className="inline-block px-2 py-1 text-center
                     text-yellow-600 bg-yellow-100 rounded-full dark:text-yellow-700 dark:bg-yellow-200"
                    >
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-5 font-medium ">1</td>
                  <td className="px-6 py-5 font-medium ">Tk. 1000</td>
                  <td className="px-6 py-5 ">
                    <a
                      href="#"
                      className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-transparent">
                  <td className="px-6 py-5 font-medium">Iphone x cover</td>
                  <td className="px-6 py-5 font-medium">Arif</td>
                  <td className="px-6 py-5 font-medium ">018542021</td>
                  <td className="px-6 py-5 font-medium ">1.10.23</td>

                  <td>
                    <span className="inline-block px-2 py-1 text-center text-yellow-600 bg-yellow-100 rounded-full dark:text-yellow-700 dark:bg-yellow-200">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-5 font-medium ">1</td>
                  <td className="px-6 py-5 font-medium ">Tk. 1000</td>
                  <td className="px-6 py-5 ">
                    <a
                      href="#"
                      className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-transparent">
                  <td className="px-6 py-5 font-medium">Iphone x cover</td>
                  <td className="px-6 py-5 font-medium">Arif</td>
                  <td className="px-6 py-5 font-medium ">018542021</td>
                  <td className="px-6 py-5 font-medium ">1.10.23</td>

                  <td>
                    <span className="inline-block px-2 py-1 text-center text-red-600 bg-red-100 rounded-full dark:text-red-700 dark:bg-red-200">
                      Cancelled
                    </span>
                  </td>
                  <td className="px-6 py-5 font-medium ">1</td>
                  <td className="px-6 py-5 font-medium ">Tk. 1000</td>
                  <td className="px-6 py-5 ">
                    <a
                      href="#"
                      className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-gray-100 hover:bg-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import { toast } from "react-toastify";
const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-adminBg w-full">
      <div className="px-4 pt-10">
        <h1 className="text-center text-xl font-bold">Dashboard</h1>
      </div>
      <section className="px-4 pt-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl dark:bg-gray-900">
            <div className="flex flex-row md:flex-col-reverse items-center">
              <div className="flex-1 text-left md:text-center">
                <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase dark:text-gray-400">
                  Total orders
                </h2>
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
                  110{" "}
                </p>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400"></p>
              </div>
              <div className="flex-shrink">
                <Link
                  to="/admin/orders"
                  className="flex items-center px-8 py-4 text-gray-400 dark:text-gray-400 "
                >
                  <span className="inline-block mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-10 h-10 dark:group-hover:text-gray-300 bi bi-basket"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl dark:bg-gray-900">
            <div className="flex md:flex-col-reverse items-center">
              <div className="flex-1 text-left md:text-center">
                <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase dark:text-gray-400">
                  Total Products
                </h2>
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
                  569{" "}
                </p>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  {/* Lorem ipsum dor amet */}
                </p>
              </div>
              <div className="flex-shrink">
                <Link
                  to="/admin/products"
                  className="flex items-center px-8 py-4 text-gray-400 dark:text-gray-400 "
                >
                  <span className="inline-block mr-3 dark:group-hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl dark:bg-gray-900">
            <div className="flex md:flex-col-reverse items-center">
              <div className="flex-1 text-left md:text-center">
                <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase dark:text-gray-400">
                  Total Payment
                </h2>
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
                  4567{" "}
                </p>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  {/* Lorem ipsum dor amet */}
                </p>
              </div>
              <div className="flex-shrink">
                <a
                  href="#"
                  className="flex items-center px-8 py-4 text-gray-400 dark:text-gray-400 "
                >
                  <span className="inline-block mr-3 dark:group-hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-10 h-10 bi bi-cash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                      <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl dark:bg-gray-900">
            <div className="flex md:flex-col-reverse items-center">
              <div className="flex-1 text-left md:text-center">
                <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase dark:text-gray-400">
                  Total Customers
                </h2>
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
                  2310{" "}
                </p>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  {/* Lorem ipsum dor amet */}
                </p>
              </div>
              <div className="flex-shrink">
                <a
                  href="#"
                  className="flex items-center px-8 py-4 text-gray-400 dark:text-gray-400 "
                >
                  <span className="inline-block mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-10 h-10 bi bi-people"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="px-4 pt-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-3">
              <p className="text-4xl font-bold dark:text-gray-300">$1239</p>
              <button className="text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-medium text-gray-500 dark:text-gray-400">
                Campaign{" "}
              </h2>
              <span className="inline-block px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">
                58%
              </span>
            </div>
            <div className="relative w-full h-1 mb-2 bg-gray-200 rounded">
              <div className="absolute top-0 left-0 w-4/6 h-full bg-blue-500 rounded "></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              since last month
            </p>
          </div>
          <div className="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-3">
              <p className="text-4xl font-bold dark:text-gray-300">$1,00</p>
              <button className="text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-medium text-gray-500 dark:text-gray-400">
                Deals
              </h2>
              <span className="inline-block px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">
                80%
              </span>
            </div>
            <div className="relative w-full h-1 mb-2 bg-gray-200 rounded">
              <div className="absolute top-0 left-0 w-10/12 h-full bg-red-500 rounded "></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              since last month
            </p>
          </div>
          <div className="p-6 mb-8 bg-white rounded shadow lg:mb-0 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-3">
              <p className="text-4xl font-bold dark:text-gray-300">$289</p>
              <button className="text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-medium text-gray-500 dark:text-gray-400">
                Booked Revenue
              </h2>
              <span className="inline-block px-2 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">
                95%
              </span>
            </div>
            <div className="relative w-full h-1 mb-2 bg-gray-200 rounded">
              <div className="absolute top-0 left-0 w-11/12 h-full bg-green-500 rounded "></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              since last month
            </p>
          </div>
        </div>
      </section> */}
      <section className="px-4 py-6">
        <div className="grid grid-cols-1 gap-6 ">
          <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900 ">
            <div className="flex flex-wrap justify-between mb-6">
              <h2 className="py-1 text-xl font-semibold capitalize border-b border-blue-500 dark:text-gray-400">
                Recent Orders
              </h2>
              <Link
                to="/admin/orders"
                className="px-4 py-2 text-sm text-white capitalize bg-blue-500 rounded "
              >
                view all
              </Link>
            </div>
            <div>
              <div className="flex justify-between mb-4">
                <div className="flex gap-2">
                  <img
                    src="https://i.postimg.cc/x8LtrkfV/kenny-eliason-HIz-Gn9-FZDFU-unsplash.jpg"
                    alt=""
                    className="object-cover w-14 h-14"
                  />
                  <div className="">
                    <h2 className="my-1 text-lg font-medium dark:text-gray-400">
                      1800X Zoom Level Nikon Lense
                    </h2>
                    <div className="text-gray-400">Ordered</div>
                  </div>
                </div>
                <div className="">
                  <span className="font-medium text-blue-400">Qty:1</span>
                </div>
                <div className="">
                  <span className="font-medium text-blue-400">Qty:1</span>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div className="flex gap-2">
                  <img
                    src="https://i.postimg.cc/K8qmN64m/pexels-javon-swaby-2783873.jpg"
                    alt=""
                    className="object-cover w-14 h-14"
                  />
                  <div className="">
                    <h2 className="my-1 text-lg font-medium dark:text-gray-400">
                      Watches
                    </h2>
                    <div className="text-gray-400">Ordered</div>
                  </div>
                </div>
                <div className="">
                  <span className="font-medium text-blue-400">Qty:1</span>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div className="flex gap-2">
                  <img
                    src="https://i.postimg.cc/sgKB6VR6/ryan-plomp-a-Ctb-RTwu-M-unsplash-1.jpg"
                    alt=""
                    className="object-cover w-14 h-14"
                  />
                  <div className="">
                    <h2 className="my-1 text-lg font-medium dark:text-gray-400">
                      Shoes for men
                    </h2>
                    <div className="text-gray-400">Ordered</div>
                  </div>
                </div>
                <div className="">
                  <span className="font-medium text-blue-400">Qty:1</span>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="flex gap-2">
                  <img
                    src="https://i.postimg.cc/XqBnTJBL/pink-sweater-front.jpg"
                    alt=""
                    className="object-cover w-14 h-14"
                  />
                  <div className="">
                    <h2 className="my-1 text-lg font-medium dark:text-gray-400">
                      T-shirt for ladies
                    </h2>
                    <div className="text-gray-400">Ordered</div>
                  </div>
                </div>
                <div className="">
                  <span className="font-medium text-blue-400">Qty:1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

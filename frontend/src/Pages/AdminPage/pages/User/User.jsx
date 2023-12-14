import React from "react";

const User = () => {
  return (
    <div className="p-6 w-full">
      <h1 className="text-center font-bold text-md lg:text-xl xl:text-2xl">
        User Details
      </h1>
      <section className="py-3 grid  px-4   grid-cols-1 gap-6 pt-10">
        <div className="overflow-x-auto overflow-y-auto rounded shadow dark:bg-gray-900 bg-gray-50">
          <table className="w-full table-auto">
            <thead className="bg-lightGray-50">
              <tr className="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800">
                <th className="px-6 py-4 font-medium dark:text-gray-400">
                  #SI
                </th>
                <th className="flex items-center py-4 pl-6 font-medium dark:text-gray-400">
                  <span>Name</span>
                </th>

                <th className="px-6 py-4 font-medium dark:text-gray-400">
                  Address
                </th>
                <th className="px-6 py-4 font-medium dark:text-gray-400">
                  Email
                </th>
                <th className="px-6 py-4 font-medium dark:text-gray-400">
                  Mobile
                </th>

                <th className="px-6 py-4 font-medium dark:text-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        Rabbinur Muktar
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  Mirpur dhaka
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  Info@gmail.com
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  016852542358
                </td>

                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-6 py-5 text-right">
            <a
              className="inline-flex items-center text-xs font-medium text-blue-500 dark:hover:text-blue-400 dark:text-blue-300 hover:text-blue-700"
              href="#"
            >
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </span>
              <span>View all</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;

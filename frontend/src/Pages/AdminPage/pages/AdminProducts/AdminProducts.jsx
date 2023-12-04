import React, { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
import swal from "sweetalert";
import AdminProductsList from "./AdminProductsList";
const AdminProducts = () => {
  const [products, setProduct] = useState([]);
  // const {Description,category,name,new-price,quantity}=product
  const [reload, setReload] = useState(false);

  const fetchData = () => {
    fetch(`${apiUrl}/products/displayProducts`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setProduct(data.data);
      });
  };
  console.log(reload);
  //data fecthing
  useEffect(() => {
    fetchData();
  }, [reload]);
  // ! ====> Delet Product
  const handleDelete = (id) => {
    console.log("delet id", id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`${apiUrl}/products/${id}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              fetchData();
              setReload((prev) => !prev);
              console.log(reload);
            }
          });
        // ! ====> Aleart
        swal("Your product item has been deleted !", {
          icon: "success",
        });
      } else {
        swal("Your product item is safe!");
      }
    });
  };

  return (
    <div className="bg-adminBg w-full">
      <div className="px-4 pt-10">
        <h1 className="text-center text-xl font-bold">Product Lists</h1>
      </div>
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
                  New Price
                </th>
                <th className="px-6 py-4 font-medium dark:text-gray-400">
                  Old Price
                </th>
                <th className="px-6 py-4 font-medium dark:text-gray-400">
                  Offer Price
                </th>
                <th className="px-6 py-4 font-medium dark:text-gray-400">
                  Brand
                </th>
                <th className="px-6 py-4 font-medium dark:text-gray-400">
                  Category
                </th>
                <th className="px-6 py-4 font-medium dark:text-gray-400">
                  Quantity
                </th>
                <th className="px-6 py-4 font-medium dark:text-gray-400">
                  Action
                </th>
                <th className="px-6 py-4 font-medium dark:text-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <AdminProductsList
                  key={product._id}
                  product={product}
                  index={index + 1}
                  handleDelete={handleDelete}
                ></AdminProductsList>
              ))}
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6  py-3 font-medium">
                  <div className="flex ">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  1
                </td>
                <td className="flex items-center px-6 py-3 font-medium">
                  <div className="flex">
                    <img
                      className="object-cover w-10 h-10 mr-4 "
                      src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium dark:text-gray-400">
                        camera
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Pd Code:2001
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2800
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  3000
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  2500
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Canon
                  </span>
                </td>
                <td className="px-6 text-sm font-medium dark:text-gray-400">
                  <span className="inline-block px-2 py-1 text-blue-900 bg-blue-100  dark:bg-gray-800 dark:text-gray-400">
                    Camera
                  </span>
                </td>
                <td className="px-6 text-sm text-center font-medium dark:text-gray-400">
                  20
                </td>
                <td className="px-6">
                  <div className="flex ">
                    <a
                      href="#"
                      className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm text-gray-100 hover:text-red-500 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
                    >
                      Delete
                    </a>
                  </div>
                </td>
                <td className="px-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </a>
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

export default AdminProducts;

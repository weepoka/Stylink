import React from "react";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete, AiOutlineDelete } from "react-icons/ai";
const AdminProductsList = ({ product, handleDelete, index }) => {
  const {
    Description,
    category,
    name,
    stock,
    newPrice,
    oldPrice,
    offerPrice,
    quantity,
    brand,
    _id,
    image,
    price,
  } = product;
  return (
    <>
      {/* <tr className="py-10 text-center">
        <td className="py-6 text-center">{index}</td>
        <td className="py-6 text-center">{name}</td>
        <td>{price}</td>

        <td>{oldPrice}</td>
        <td>{offerPrice}</td>
        <td>{brand}</td>
        <td>{category}</td>
        <td>{stock}</td>

        <td>
          <Link to={`/adminUpdateProduct/${_id}`}>
            <p className="text-blue-800 text-2xl font-bold flexCenter">
              {" "}
              <span className="mr-2">
                <AiFillEdit></AiFillEdit>
              </span>
            </p>
          </Link>
        </td>

        <td>
          <Button
            type="submit"
            className="p-0 text-red-800 text-2xl fill-red-500 font-bold flex  items-center mx-auto"
            onClick={() => handleDelete(_id)}
          >
            <span className="text-red-500 mr-2">
              <AiFillDelete></AiFillDelete>
            </span>
          </Button>
        </td>
      </tr> */}
      <tr className="border-b border-gray-200 dark:border-gray-800">
        <td className="px-6 text-sm font-medium dark:text-gray-400">1</td>
        <td className="flex items-center px-6 py-3 font-medium">
          <div className="flex">
            <img
              className="object-cover w-10 h-10 mr-4 "
              src="https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg"
              alt=""
            />
            <div>
              <p className="text-sm font-medium dark:text-gray-400">camera</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                product Code:2001
              </p>
            </div>
          </div>
        </td>
        <td className="px-6 text-sm font-medium dark:text-gray-400">2800</td>
        <td className="px-6 text-sm font-medium dark:text-gray-400">3000</td>
        <td className="px-6 text-sm font-medium dark:text-gray-400">2500</td>
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
            <Link
              // to={`/adminUpdateProduct/${_id}`}
              className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
            >
              Edit
            </Link>
            <a
              onClick={() => handleDelete(_id)}
              className="px-4 py-2 text-sm text-gray-100 bg-red-400 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
            >
              <AiFillDelete></AiFillDelete>
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
    </>
  );
};

export default AdminProductsList;

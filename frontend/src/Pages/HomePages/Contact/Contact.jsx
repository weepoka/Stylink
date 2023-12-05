import React from "react";
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
// import { LuMessagesSquare } from "react-icons/lu";

import { MdOutlineHomeWork, MdMessage } from "react-icons/md";
const Contact = () => {
  return (
    <div className="px-5">
      <section className="py-16 bg-gray-100 font-poppins dark:bg-gray-900">
        <div className="justify-center flex-1 max-w-screen-2xl px-4 py-4 mx-auto lg:py-10 md:px-7">
          <div className="max-w-2xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                  Contact
                </div>
                <h1 className="text-5xl font-bold dark:text-white">
                  {" "}
                  Our <span className="text-[#589041]"> Contact</span>{" "}
                </h1>
                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-[#4b82c1]"></div>
                  <div className="flex-1 h-2 bg-[#50b0e0]"></div>
                  <div className="flex-1 h-2 bg-[#293972]"></div>
                </div>
              </div>
              <p className="mb-16 text-base text-center text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus magni eius eaque? Pariatur numquam, odio quod nobis
                ipsum ex cupiditate?
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mb-8 -mx-4">
            <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
              <div className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-6
                 text-gray-100 bg-secondary rounded-full dark:bg-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                  </svg>
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                  Email
                </h2>

                <a
                  href="mailto:stylinkitsolution@gmail.com"
                  className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
                >
                  stylinkitsolution@gmail.com
                </a>
              </div>
            </div>
            <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
              <div className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-6
                 text-gray-100 bg-secondary rounded-full dark:bg-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                  </svg>
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                  Phone
                </h2>
                <a
                  href="tel:+88 013326-01555"
                  className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
                >
                  013326-01555
                </a>
              </div>
            </div>
            <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
              <div className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-6
                 text-gray-100 bg-secondary rounded-full dark:bg-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-grid-3x3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z"></path>
                  </svg>
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                  Social
                </h2>
                <a
                  href="https://www.facebook.com/people/Stylink-Tech/61553197613641/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mr-4 text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-700"
                >
                  <BsFacebook size={23} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mr-4 text-red-700 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-600"
                >
                  <BsInstagram size={23} />
                </a>
              </div>
            </div>
          </div>
          <div
            className="px-8 grid grid-cols-1  gap-10 md:grid-cols-2  py-8 bg-white border rounded-md shadow-md
           dark:border-gray-800 dark:bg-gray-800"
          >
            <div className="md:border-r">
              <h1 className="md:text-5xl text-2xl  font-bold pb-5">
                Our Office
              </h1>
              <div className="lg:w-52 w-28 mb-6 border-b border-button dark:border-gray-400"></div>
              <p className="py-5 text-justify">
                You will get all types of Electronics products from Stylink
                Tech...
              </p>
              <div className="">
                <div>
                  <h1 className="lg:text-xl text-center md:text-start text-md font-bold pb-5">
                    Road-11, Kallyanpur, Dhaka-1207, Bangladesh.
                  </h1>
                  <div className="py-2">
                    <a
                      href="tel:+88 013326-01555"
                      className="flex items-center gap-2 hover:text-button"
                    >
                      <BsTelephone /> +88 013326-01555
                    </a>
                  </div>
                  <div className="py-2">
                    <a
                      href="mailto:info.rashidtelecom@gmail.com"
                      className="flex items-center gap-2 hover:text-button"
                    >
                      <MdMessage /> stylinkitsolution@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="flex items-center gap-2">
                      <MdOutlineHomeWork /> Kallyanpur, Dhaka-1207, Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form action="">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-00 dark:text-gray-400">
                  Please send message for futher information!{" "}
                </h2>
              </div>
              <div className="flex flex-wrap mb-4 -mx-2">
                <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                  <input
                    className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                    type="text"
                    placeholder="First Name.."
                    required=""
                  />
                </div>
                <div className="w-full px-2 lg:w-1/2">
                  <input
                    className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                    type="text"
                    placeholder="Last Name.."
                    required=""
                  />
                </div>
              </div>
              <input
                className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                type="email"
                placeholder="abc@gmail.com"
                required=""
              />
              <textarea
                rows="4"
                type="message"
                placeholder="Write a message..."
                required=""
                className="block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-400 py-7 dark:text-gray-400
                         dark:border-gray-800 dark:bg-gray-700 "
              ></textarea>
              <button
                className="w-full py-4 text-sm font-bold leading-normal
               text-white transition-all duration-300 bg-button rounded-md
                dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-secondary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

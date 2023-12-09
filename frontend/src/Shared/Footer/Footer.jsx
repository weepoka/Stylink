import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import weero from "../../assets/Logo/weero.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#e2e8f0]">
        <section className="flex flex-col lg:justify-end font-poppins ">
          <div className="   dark:border-gray-900 py-4 dark:bg-gray-900">
            <div className="max-w-screen-2xl mx-auto">
              <div className="justify-center flex-1  px-4 py-2 mx-auto lg:py-0">
                <div className="flex flex-wrap py-4 -mx-3">
                  <div className="w-full px-4 mb-2 lg:mb-0 md:w-1/3 lg:w-4/12">
                    <h2 className="pb-2 text-lg font-bold text-gray-800 dark:text-gray-400">
                      Contact Info
                    </h2>
                    <div className="w-16 mb-4 border-b-2 border-button dark:border-gray-600"></div>
                    <p className="flex items-center gap-1 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-5 h-7 mr-1 text-gray-800 dark:text-gray-400 bi bi-geo-alt "
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                      </svg>
                      <span className="text-gray-800 dark:text-gray-400">
                        Road-11, Kallyanpur, Dhaka-1207, Bangladesh.
                      </span>
                    </p>
                    <a
                      href="mailto:stylinkitsolution@gmail.com"
                      className="flex items-center mb-4 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4 mr-2 text-gray-800 dark:text-gray-400 bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                      </svg>
                      <span className="text-gray-800 dark:text-gray-400">
                        stylinkitsolution@gmail.com
                      </span>
                    </a>
                    <p className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4 mr-2 text-gray-800 dark:text-gray-400 bi bi-telephone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                      </svg>
                      <span className="text-gray-800 dark:text-gray-400">
                        <a href="tel:+88 01332601555">
                          <span className=" ">+88 013326-01555</span>
                        </a>
                      </span>
                    </p>
                    <div className=" flex  md:justify-start md:items-start mt-5">
                      <p className="footer-social-icon   mx-2  ">
                        {" "}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/profile.php?id=61553197613641"
                        >
                          <Icon
                            icon="ic:baseline-facebook"
                            width={35}
                            className="transition duration-100  hover:scale-105"
                          />
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-7 lg:mb-0">
                    <h2 className="pb-2 text-lg font-bold text-gray-800 dark:text-gray-400 ">
                      Quick Links
                    </h2>
                    <div className="w-16 mb-4 border-b-2 border-button dark:border-gray-600"></div>
                    <ul>
                      <li className="mb-4">
                        <Link
                          to="/"
                          className="inline-block hover:translate-x-1 transition ease-in-out duration-500 text-base font-normal dark:text-gray-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          to="/AboutUs"
                          className="inline-block hover:translate-x-1 transition ease-in-out duration-500 text-base font-normal dark:text-gray-400"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          to="/ContactUs"
                          className="inline-block hover:translate-x-1 transition ease-in-out duration-500 text-base font-normal dark:text-gray-400"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full px-4 mb-7 lg:mb-0 md:w-1/4 lg:w-2/12">
                    <h2 className="pb-2 text-lg font-bold text-gray-800 dark:text-gray-400">
                      Features{" "}
                    </h2>
                    <div className="w-16 mb-4 border-b-2 border-button dark:border-gray-600"></div>
                    <ul>
                      <li className="mb-4">
                        <Link
                          // to="/"
                          className="inline-block hover:translate-x-1 transition ease-in-out duration-500 text-base font-normal dark:text-gray-400"
                        >
                          Terms Of Use
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          // to="/AboutUs"
                          className="inline-block hover:translate-x-1 transition ease-in-out duration-500 text-base font-normal dark:text-gray-400"
                        >
                          Privacy and Policy
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          // to="/ContactUs"
                          className="inline-block hover:translate-x-1 transition ease-in-out duration-500 text-base font-normal dark:text-gray-400"
                        >
                          Delivery Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className=" w-full  px-4 mb-2 md:w-1/4 lg:w-1/3  lg:mb-0 ">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.1646984472634!2d90.36642771550204!3d23.796002326591672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c104ed7b6fc1%3A0xef7322c47afaf73b!2sAlliance%20Manik%20Manjil!5e0!3m2!1sen!2sbd!4v1700743408606!5m2!1sen!2sbd"
                      className="w-full h-[300px]"
                      allowFullScreen=""
                      loading="lazy"
                      title="Rashid Telecom"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="w-full mb-4 border-b-2 border-button dark:border-gray-600"></div>
            </div>
          </div>

          <div className=" max-w-screen-2xl mx-auto px-4 py-6  ">
            <div className="flex flex-wrap items-center justify-between  gap-4 ">
              <div className="flex justify-center md:justify-start">
                <div className="text-center md:text-start weero mx-auto">
                  <small className="flex items-center justify-center">
                    <span>© 2023.Rashid Telecom. All rights reserved.</span>
                    <span className="font-bold font-serif ml-3">
                      <a href="https://weerodigital.com">Developed by</a>
                    </span>
                    <a href="https://weerodigital.com">
                      <img src={weero} alt="" className="w-20 drop-shadow-xl" />
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div
    className="mt-10 bg-[#e2e8f0] text-black pt-10 px-10 md:px-5  lg:px-5
  max-w-screen-2xl mx-auto"
  >
    <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-5  ">
      <div className="support flex justify-center md:justify-start">
        <div>
          <span className="text-black tracking-widest font-bold">
            SUPPORT
          </span>
          <div className="my-5 w-[220px]">
            <div
              className=" rounded-full border border-black py-4 px-2 flex mb-5 justify-center
             items-center "
            >
              <p>
                <FaPhoneAlt className="text-2xl  mx-2 " />
              </p>
              <p>
                {" "}
                <small className="">10 AM - 8 PM</small> <br />
                <a href="tel:+88 013326-01555">
                  <span className="text-md font-bold ">
                    +88 013326-01555
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center md:justify-start items-center ">
        <span className="text-black tracking-widest font-bold">
          Information
        </span>
        <div className="flex flex-col">
          <Link to="/" className="link link-hover footer-text">
            Home
          </Link>
          <Link to="/ContactUs" className="link link-hover footer-text">
            Contact Us
          </Link>
          <Link className="link link-hover footer-text">Jobs</Link>
          <Link className="link link-hover footer-text">Press kit</Link>
        </div>
      </div>
      <div className="flex flex-col justify-center md:justify-start items-center py-5 md:py-0">
        <span className="text-black tracking-widest font-bold">LEGAL</span>
        <div className="flex flex-col">
          <Link className="link link-hover footer-text">Terms of use</Link>
          <Link className="link link-hover footer-text">
            Privacy policy
          </Link>
          <Link className="link link-hover footer-text">Cookie policy</Link>
        </div>
      </div>

      <div className="flex  flex-col justify-start">
        <div className=" ">
          <p className="text-black tracking-widest font-bold text-center md:text-start mb-2">
            STAY CONNECTED
          </p>
          <h2 className="font-bold  text-black text-center md:text-start mb-2">
            Rashid Telecom
          </h2>
          <p className="footer-text text-center md:text-start mb-2 text-black">
            H#393, 5/A, Alliance Manik Manjil, South Monipur, Mirpur,
            Dhaka-1216 Bangladesh.
          </p>
        </div>
        <p className="footer-text text-black text-center md:text-start">
          <span className="font-bold text-black">Email:</span>{" "}
          <a href="mailto:stylinkitsolution@gmail.com">
            {" "}
            <span className="text-black text-sm">
              stylinkitsolution@gmail.com
            </span>
          </a>
        </p>
        <div className=" flexCenter md:justify-start md:items-start mt-5">
          <p className="footer-social-icon   mx-2  ">
            {" "}
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100063669235276&sfnsn=wa&mibextid=MUfG1I"
            >
              <FaFacebook className="text-3xl  cursor-pointer transition duration-100 hover:scale-150" />
            </a>
          </p>
        </div>
      </div>

      <div className="footer flex justify-center md:justify-start  ">
        <div className="w-full hidden md:block ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.1646984472634!2d90.36642771550204!3d23.796002326591672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c104ed7b6fc1%3A0xef7322c47afaf73b!2sAlliance%20Manik%20Manjil!5e0!3m2!1sen!2sbd!4v1700743408606!5m2!1sen!2sbd"
            className="w-full h-[300px]"
            allowFullScreen=""
            loading="lazy"
            title="Rashid Telecom"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <div className=" bg-[#e2e8f0]  text-black pb-2  copyright  ">
      <div className="flex justify-center md:justify-start">
        <div className="text-center md:text-start weero mx-auto">
          <small className="flex items-center justify-center">
            <span>© 2023.Rashid Telecom. All rights reserved.</span>
            <span className="font-bold font-serif ml-3">
              <a href="https://weerodigital.com">Developed by</a>
            </span>
            <a href="https://weerodigital.com">
              <img src={weero} alt="" className="w-20 drop-shadow-xl" />
            </a>
          </small>
        </div>
      </div>
    </div>
  </div> */}
      </div>
    </div>
  );
};

export default Footer;

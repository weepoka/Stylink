import React, { useState, useEffect, useContext } from "react";
// import deleteIcon from '../../Assets/Images/delete.png';
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";
import { ImCross } from "react-icons/im";
// import './Cart.css';
import { useDispatch, useSelector } from "react-redux";

import swal from "sweetalert";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { AuthContext } from "../../../Api/AuthProvider/AuthProvider";
import { remove, updateCart } from "../../../Redux/Store/cartSlice";
import CheckOutpage from "./CheckOutpage";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItems);
  const { profile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [order, setOrder] = useState({});
  const [detailState, setDetailState] = useState(false);
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [delivery, setDelivery] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const calculateTotals = () => {
    const total = products.reduce((total, prd) => {
      if (prd?.item?.offerPrice) {
        return total + prd?.item?.offerPrice * prd.quantity;
      }
      return total + prd?.item?.oldPrice * prd.quantity;
    }, 0); // Move the initial value outside the parentheses

    // if (total > 10000) {
    //   delivery = 80;
    // } else if (total > 1000) {
    //   delivery = 9.99;
    // }

    const tax = Math.round(total / 10);
    const grandTotal = Math.round(total + Number(tax) + delivery);

    return { total, delivery, tax, grandTotal };
  };

  const [totals, setTotals] = useState(calculateTotals());

  console.log({ totals });

  useEffect(() => {
    setTotals(calculateTotals());
  }, [products, selectedOption]);

  //?update quantity
  const handleUpdateQuantity = (cartItem, newQuantity) => {
    if (newQuantity < 1) {
      // Don't allow quantity to go below 1
      newQuantity = 1;
    } else if (newQuantity > cartItem.item.stock) {
      // Don't allow quantity to exceed stock quantity
      newQuantity = cartItem.item.stock;
    }

    const updatedProducts = products.map((item) => {
      if (item.item._id === cartItem.item._id) {
        return { ...item, quantity: newQuantity, name: item.name };
      }

      return item;
    });

    dispatch(updateCart(updatedProducts));
  };

  const productsCategoris = products?.map((item) => item?.item?.category);
  let checkOuteProducts = [];

  if (products && products.length > 0) {
    checkOuteProducts = products.map((item) => {
      return {
        id: item?.item?._id,
        name: item?.item?.name,
        productPin: item?.item?.productPin,
        quantity: item?.quantity,
        image: item?.item?.image,
        price: item?.item?.offerPrice
          ? item?.item?.offerPrice
          : item?.item?.oldPrice,
      };
    });
  }

  const handleCashOnDelivery = (e) => {
    setCashOnDelivery(e.target.checked);
  };

  const orderNow = async (e) => {
    e.preventDefault();
    if (!selectedOption)
      return toast.error("please select the delivery option");
    setLoading(true);
    order.products = checkOuteProducts;
    order.userId = profile?._id;
    order.customer = profile?.name;
    order.email = profile?.email;
    order.price = totals.grandTotal;
    order.categories = productsCategoris;
    order.vat = Number(totals.tax);
    order.deliveryFee = Number(delivery);

    e.preventDefault();

    swal({
      title: "Are you sure?",
      text: "You want to buy this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`${apiUrl}/order`, {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(order),
          credentials: "include",
        })
          .then((res) => {
            if (res.ok) {
              localStorage.clear();
              window.open(`/profile`, "_self");
            }
          })

          .catch((err) => console.log(err))
          .finally(() => {
            setLoading(false);
          });

        swal("Your order has been placed!", {
          icon: "success",
        });
      } else {
        setLoading(false);
        swal("Your order has been canceled!");
      }
    });
  };

  const payOrder = async (e) => {
    setLoading(true);
    order.products = checkOuteProducts;
    order.userId = profile?._id;
    order.customer = profile?.name;
    order.email = profile?.email;
    order.price = totals.grandTotal;
    order.categories = productsCategoris;

    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/payment/process`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(order),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        window.open(data.gatewayURL, "_self");
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //! ======> Remove product SWAL
  const handleRemove = (pdId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(remove(pdId));
        swal("Now! Your Selected product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Selected Product is safe!");
      }
    });
  };
  //close modal
  const closeModal = () => {
    setDetailState(false);
  };

  const handleCheckboxChange = (event) => {
    const { id } = event.target;

    if (id === selectedOption) {
      // If the clicked checkbox is already selected, unselect it
      setSelectedOption(null);
    } else {
      // If a different checkbox is clicked, select it
      setSelectedOption(id);
    }
  };

  return (
    <div className="bg-gray-100 pb-5 ">
      <div className=" container  ">
        {/* //! ====>All Cart Element*/}
        <div className="pt-10 mx-5  ">
          <div
            className=" mb-2 p-6 bg-white font-semibold
           text-black text-sm md:text-lg rounded 
           overflow-hidden md:w-full "
          >
            <div className="grid grid-cols-6 md:gap-14 gap-5 ">
              <div>img</div>
              <div className="hidden sm:block">Name</div>
              <div>Qty</div>
              <div>Price</div>
              <div>SubTotal</div>
              <div className="pl-5 md:pl-0 ">Delete</div>
            </div>
          </div>
          <div className=" h-[400px] overflow-y-auto">
            {products?.map((cartItem, cartIndex) => (
              <div
                className="  mb-5 p-2 bg-white rounded overflow-hidden md:w-full"
                key={cartItem?.item?._id}
              >
                <div className="grid grid-cols-6">
                  <div className="md:shrink-0">
                    <img
                      className="object-cover h-[32px] w-[32px] sm:h-[50px] sm:w-[50px] md:w-[120px] md:h-[80px]"
                      src={cartItem?.item?.image}
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className=" col-span-5 flex items-center justify-center ">
                    <p
                      className="hidden sm:block pl-2 w-[13vh] uppercase tracking-wide text-sm
                   text-black font-semibold"
                    >
                      {cartItem?.item?.name}
                    </p>
                    {/* //!====> Counting qty btn */}
                    <div
                      className="w-[18vh] sm:mx-2 p-2 sm:p-3 flexBetween
                   bg-gray-100 rounded text-black "
                    >
                      <button
                        onClick={() =>
                          handleUpdateQuantity(cartItem, cartItem.quantity - 1)
                        }
                      >
                        {" "}
                        <HiOutlineMinus />{" "}
                      </button>

                      <span className="px-3 sm:px-3">{cartItem?.quantity}</span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(cartItem, cartItem.quantity + 1)
                        }
                      >
                        {" "}
                        <HiOutlinePlus />{" "}
                      </button>
                    </div>
                    {/* //!====> Counting Price*/}
                    <div className="col-span-2 mx-1 w-[18vh] text-slate-700">
                      {cartItem?.item?.offerPrice
                        ? cartItem?.item?.offerPrice
                        : cartItem?.item?.oldPrice}
                    </div>
                    {/* //!====> Counting SubTotal*/}
                    <div className="w-[18vh] mx-1 text-black font-semibold">
                      {(cartItem?.item?.offerPrice
                        ? cartItem?.item?.offerPrice * cartItem.quantity
                        : cartItem?.item?.oldPrice * cartItem.quantity
                      ).toFixed(1)}
                    </div>
                    {/* //!====> Remove btn*/}
                    <button
                      onClick={() => handleRemove(cartItem)}
                      className="p-3 w-[10vh] flex items-center font-semibold  "
                    >
                      <Icon
                        icon="line-md:close-small"
                        width={30}
                        className="font-bold text-red-500"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* //! ====> Order Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border p-2 ">
          <div className="">
            <div className=" rounded-md p-3">
              {" "}
              {/* <h2 className="p-2 text-lg lg:text-2xl font-bold text-center bg-gray-100 w-full">
                ADD Address
              </h2> */}
              <CheckOutpage
                user={profile}
                setOrder={setOrder}
                setDetailState={setDetailState}
              />
              {detailState ? (
                <>
                  {cashOnDelivery ? (
                    <div className="">
                      <button
                        onClick={orderNow}
                        className="mb-2 mt-3  py-3 px-3 w-full text-center   bg-[#ea6b28]
                       rounded text-white font-4xl transition duration-700"
                      >
                        {loading ? "order progress..." : "Order Now"}
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  <div className="p-5 text-center ">
                    <p className="text-red-500 p-3 mb-2">
                      *please add your delivery address to go farther step
                    </p>

                    <label
                      htmlFor="my-modal-5"
                      className="px-2 py-2 hover:bg-gray-900 
                      duration-300 bg-button cursor-pointer text-white"
                    >
                      Place Order
                    </label>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className=" mx-5  rounded overflow-hidden  ">
            <h2 className="p-2 text-lg lg:text-2xl font-bold text-center bg-gray-100 w-full">
              Order Summary
            </h2>

            <ul className="w-3/5 mx-auto mt-5 shadow">
              <li className="flex justify-between border p-1">
                Total Cost: <p className="">{totals?.total} TK.</p>
              </li>
              <li className="flex justify-between border p-1">
                Delivery fee: <p className="">{delivery} TK.</p>
              </li>
              <li className="flex justify-between border p-1">
                VAT/Tax 10%: <p className="">{totals.tax} TK.</p>
              </li>
              <li
                className="flex justify-between border p-1 text-base font-bold
               bg-button text-white"
              >
                Grand Total: <p>{totals.grandTotal} TK.</p>
              </li>
            </ul>
            <div className="w-3/5 mx-auto flex flex-col justify-center items-center mt-5 gap-2 ">
              <div className="relative">
                <label htmlFor="promo-code" className="text-[18px]">
                  Have A Promo Code?
                </label>
                <input
                  type="text"
                  className="appearance-none border
                   w-full border-gray-100 shadow-sm 
                   focus:shadow-md focus:placeholder-gray-600 
                    transition pl-5   py-2 text-gray-600 
                    leading-tight focus:outline-none
                     focus:ring-gray-600 focus:shadow-outline"
                />
              </div>
              <button
                type="button"
                className=" bg-red-500 w-20  px-1 py-2 text-white"
              >
                Apply
              </button>
            </div>

            {/* //! ===========>Checkout Page <========== */}

            <div className="flex flex-col justify-center items-center">
              <div className="my-3 text-xl font-bold mx-2">
                <div className="flex items-center gap-3 py-2">
                  <input
                    onChange={handleCashOnDelivery}
                    type="checkbox"
                    name="check"
                    id="check"
                  />
                  <label htmlFor="check" className=" ">
                    Cash On Delivery
                  </label>
                </div>
                <div className="flex justify-around gap-3 text-sm">
                  <p className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      id="in"
                      checked={selectedOption === "in"}
                      onChange={(e) => {
                        handleCheckboxChange(e);
                        setDelivery(80);
                      }}
                    />
                    <label htmlFor="in">In Dhaka</label>
                  </p>

                  <p className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      id="out"
                      checked={selectedOption === "out"}
                      onChange={(e) => {
                        handleCheckboxChange(e);
                        setDelivery(100);
                      }}
                    />
                    <label htmlFor="out">Out Of Dhaka</label>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

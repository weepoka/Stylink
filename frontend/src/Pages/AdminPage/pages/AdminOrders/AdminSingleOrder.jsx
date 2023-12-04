import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Invoice from "../../../HomePages/Invoice/Invoice";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const OrderStatus = [
  //   "Order Placed",
  "Processing",
  "Shipped",
  "Delivered",
  "canceled",
];
const AdminSingleOrder = () => {
  const [order, setOrderData] = useState({});
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOrder();
  }, [id]);
  console.log({ status });

  const getOrder = async () => {
    try {
      const res = await fetch(`${apiUrl}/order/single/${id}`, {
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        setOrderData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateStatus = async () => {
    if (!status) return alert("please select status");
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/order/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ orderStatus: status }),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        alert("status updated");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-3">
      {" "}
      <Invoice order={order} />
      <div className="my-10 border p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 ">
          <div className="border-r">
            {order?.products?.map((product) => (
              <>
                <img src={product.image} alt="" className="w-24 rounded-xl" />
              </>
            ))}
          </div>
          <div className="border-r p-2">
            <h1 className="font-bold pb-1">Product Name</h1>
            <p>
              {order?.products?.map((product) => (
                <>
                  <p>{product?.name}</p>
                </>
              ))}
            </p>
          </div>
          <div className="border-r p-2">
            <h1 className="font-bold pb-1">Quantity</h1>
            <p>
              {" "}
              {order?.products?.map((product) => (
                <>
                  <p>{product?.quantity}</p>
                </>
              ))}
            </p>
          </div>
          <div className="p-2">
            <h1 className="font-bold pb-1">Price</h1>
            <p>{order?.price} Taka</p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <h1 className="text-3xl my-3 bg-gray-900 px-5 text-white py-1 mb-5">
          Order Status
        </h1>
        <select
          className="font-bold outline-none border py-2 px-5"
          onChange={(e) => setStatus(e.target.value)}
          defaultValue="Select Status"
        >
          <option value="">updata status</option>
          {OrderStatus?.map((status, i) => (
            <option value={status} key={i}>
              {status}
            </option>
          ))}
        </select>

        <button
          disabled={loading}
          onClick={updateStatus}
          className="text-white bg-[#006FBA] mx-2 px-5 py-2"
        >
          {loading ? "Updating ..." : "Update"}
        </button>
      </div>
    </div>
  );
};

export default AdminSingleOrder;

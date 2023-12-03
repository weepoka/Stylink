import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Api/AuthProvider/AuthProvider";

import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import Order from "./Order";
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const Orders = ({ activePage }) => {
  const { profile } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  //   console.log(orders);

  useEffect(() => {
    fetch(`${apiUrl}/order/${profile?._id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setOrders(data.data));
  }, [profile?._id]);

  return (
    <div>
      {orders?.map((order, i) => (
        <Order order={order} key={i} />
      ))}
    </div>
  );
};

export default Orders;

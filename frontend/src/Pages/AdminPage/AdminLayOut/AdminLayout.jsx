import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
const AdminLayout = () => {
  return (
    <div>
      {" "}
      <div className="flex ">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;

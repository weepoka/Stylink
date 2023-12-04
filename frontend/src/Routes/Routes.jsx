import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/HomePages/Layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Cart from "../Pages/HomePages/Cart/Cart";
import Profile from "../Pages/HomePages/Profile/Profile";
import AdminLayout from "../Pages/AdminPage/AdminLayOut/AdminLayout";
import Dashboard from "../Pages/AdminPage/pages/Dashboard/Dashboard";
import AdminOrders from "../Pages/AdminPage/pages/AdminOrders/AdminOrders";
import AdminSingleOrder from "../Pages/AdminPage/pages/AdminOrders/AdminSingleOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/:activePage",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      // <AdminRoutes>
      //   <AdminLayout></AdminLayout>
      // </AdminRoutes>
      <AdminLayout></AdminLayout>
    ),
    children: [
      {
        path: "/admin",
        element: <Dashboard></Dashboard>,
      },

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      // {
      //   path: "adminAddBanner",
      //   element: <AddBanner></AddBanner>,
      // },
      // {
      //   path: "adminBanners",
      //   element: <AdminBanner />,
      // },
      {
        path: "orders",
        element: <AdminOrders></AdminOrders>,
      },
      {
        path: "adminOrders/:id",
        element: <AdminSingleOrder />,
      },
      // {
      //   path: "adminProducts",
      //   element: <AdminProducts></AdminProducts>,
      // },
      // {
      //   path: "adminAddProducts",
      //   element: <AdminAddProducts></AdminAddProducts>,
      // },
    ],
  },
  // {
  //   path: "adminUpdateProduct/:id",
  //   element: <AdminUpdateProduct></AdminUpdateProduct>,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);

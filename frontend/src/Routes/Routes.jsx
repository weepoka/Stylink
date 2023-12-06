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
import AdminProducts from "../Pages/AdminPage/pages/AdminProducts/AdminProducts";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import CategoryProducts from "../Pages/HomePages/CategoryProducts/CategoryProducts";
import Contact from "../Pages/HomePages/Contact/Contact";
import AboutUs from "../Pages/HomePages/AboutUs/AboutUs";
import ResetPassword from "../Login/ResetPassword";
import AdminUpdateProduct from "../Pages/AdminPage/pages/AdminProducts/AdminProductUpdate";

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
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/ContactUs",
        element: <Contact />,
      },
      {
        path: "/category/:id",
        element: <CategoryProducts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/signup",
        element: <SignUp />,
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
        path: "orders/:id",
        element: <AdminSingleOrder />,
      },
      {
        path: "products",
        element: <AdminProducts></AdminProducts>,
      },
      // {
      //   path: "adminAddProducts",
      //   element: <AdminAddProducts></AdminAddProducts>,
      // },
    ],
  },
  {
    path: "adminUpdateProduct/:id",
    element: <AdminUpdateProduct />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

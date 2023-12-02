import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/HomePages/Layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Cart from "../Pages/HomePages/Cart/Cart";

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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

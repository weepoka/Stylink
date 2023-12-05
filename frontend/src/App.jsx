import { RouterProvider } from "react-router-dom";
import "./App.css";
import Head from "./Shared/Header/Head";
import { router } from "./Routes/Routes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;

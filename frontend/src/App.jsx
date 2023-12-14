import { RouterProvider } from "react-router-dom";
import "./App.css";
import Head from "./Shared/Header/Head";
import { router } from "./Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "linear", once: false });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;

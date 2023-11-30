import Footer from "../../../Shared/Footer/Footer";
import Head from "../../../Shared/Header/Head";
import Navbar from "../../../Shared/Header/Navbar";
import SubNavbar from "../../../Shared/Header/SubNavbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <Head />
      <Navbar />
      <SubNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

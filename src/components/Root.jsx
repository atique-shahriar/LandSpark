import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet className="w-11/12 lg:w-3/4  mx-auto"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

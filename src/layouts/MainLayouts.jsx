import Navbar from "../Components/Navber";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <main className=" md:w-11/12 mx-auto ">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;

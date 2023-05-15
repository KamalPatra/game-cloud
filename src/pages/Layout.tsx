import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;

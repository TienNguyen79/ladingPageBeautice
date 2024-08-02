import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Banner from "../../module/HomePage/Banner";

const Layout = () => {
  return (
    <>
      <header className="bg-silder">
        <Header></Header>
        <Banner />
      </header>
      <div className=" mt-[166px] min-h-screen ">
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
      <footer className="mt-[300px]">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
// import Footer from "./footer";
import Header from "./header3";

const Main = () => {
  return (
    <div className="main-back">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Hero from "../Hero";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

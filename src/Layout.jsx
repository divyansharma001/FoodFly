import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";


function Layout() {
  const location = useLocation();
  return (
    <>
      {!(location.pathname === "/signup" || location.pathname === "/login") && <Header />}


      <Outlet />

      {!(location.pathname === "/signup" || location.pathname === "/login") && <Footer />}
    </>
  );
}

export default Layout;

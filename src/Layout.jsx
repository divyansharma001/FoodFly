import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { CartProvider } from "./components/ContextReducer";


function Layout() {
  const location = useLocation();
  return (
    <CartProvider>
    <>
      {!(location.pathname === "/signup" || location.pathname === "/login") && <Header />}


      <Outlet />

      {!(location.pathname === "/signup" || location.pathname === "/login") && <Footer />}
    </>
    </CartProvider>
  );
}

export default Layout;

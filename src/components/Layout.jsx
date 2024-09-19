import React from "react";
import { Outlet } from "react-router-dom";

import PriceTab from "./PriceTab";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="pt-[45px]">
      <PriceTab price="$3210" />
      <NavBar/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";

import PriceTab from "./PriceTab";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="pt-[45px]">
      <PriceTab price="$3210" />
      <NavBar/>
      <Outlet />
      <footer>Footer here</footer>
    </div>
  );
}

export default Layout;

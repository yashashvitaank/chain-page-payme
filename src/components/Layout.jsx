import React from "react";
import { Outlet } from "react-router-dom";

import PriceTab from "./PriceTab";

function Layout() {
  return (
    <div className="pt-[45px]">
      <PriceTab price="$3210" />
      <Outlet />
      <footer>Footer here</footer>
    </div>
  );
}

export default Layout;

import React from "react";
import NavigationActions from "./NavigationActions";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full flex justify-between items-center px-12 h-14 border-b-2 bg-white border-zinc-400">
      <p className="font-bold text-lg pl-2 text-primary-blue tracking-wider">
        PayME
      </p>
      <div className="flex items-center gap-4">
        <NavigationActions />
      </div>
    </div>
  );
}

export default NavBar;

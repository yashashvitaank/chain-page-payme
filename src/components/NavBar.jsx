import React from "react";
import NavigationActions from "./NavigationActions";

function NavBar() {
  return (
    <div className="w-full flex justify-between items-center px-12 h-14 border-b-2 bg-white border-zinc-400">
      <p className="font-extrabold text-primary-dark-gray tracking-wider">
        PayME
      </p>
      <div className="flex items-center gap-4">
        <NavigationActions />
        <button className="border-l-2 border-zinc-300 px-4 py-0">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default NavBar;

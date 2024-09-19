import React, { useState } from "react";
import Logo from "/logoblack.svg";
import NavigationActions from "./NavigationActions";
import { Link } from "react-router-dom";
import MenuIcon from "/public/menu.svg";


function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-full flex justify-between items-center md:px-12 h-14 border-b-2 bg-white border-zinc-400">
      <img src={Logo} alt="logo" width={120} height={80} className="pb-2" />
      <button onClick={toggleNav} className="md:hidden border-none px-4">
        <img src={MenuIcon} alt="" width={35} />
      </button>
      {isExpanded && (
        <div className="absolute w-[50%] h-[15%] bg-white top-[6.2rem] right-2 shadow-sm border border-zinc-400 rounded-md flex flex-col gap-3 p-4">
          <Link to='/' className="border-b border-zinc-200">Home</Link>
          <Link to='blocks' className="border-b border-zinc-200">Blocks</Link>
        </div>
      )}
      <div className="hidden md:block flex items-center gap-4">
        <NavigationActions />
      </div>
    </div>
  );
}

export default NavBar;

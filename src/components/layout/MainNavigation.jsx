import React from "react";
import { Link } from "react-router-dom";

import imgLogo from "../../assets/imgs/cryptocurrency.png";

import Navbar from "./Navbar";

const MainNavigation = () => {
  return (
    <div className="w-72  relative bg-secondary lg:hidden ">
      <nav className="fixed w-72">
        <div className="flex p-7 items-center gap-3 mb-5">
          <Link to="/" className="w-12 h-12 select-none ">
            <img src={imgLogo} alt="" className="w-full h-full object-cover" />
          </Link>
          <Link to="/" className="text-3xl font-black text-primary ">
            Cryptoverse
          </Link>
        </div>
        <Navbar />
      </nav>
    </div>
  );
};

export default MainNavigation;

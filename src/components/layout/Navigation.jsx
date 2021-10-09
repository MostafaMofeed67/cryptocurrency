import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/imgs/cryptocurrency.png";
import { iconNavClose, iconNavOpen } from "../../helpers/Icons";
import Navbar from "./Navbar";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavHandler = () => setShowNav((prevState) => !prevState);

  const closeNavHandler = () => setShowNav(false);

  return (
    <header className="z-50 w-full p-7 hidden lg:flex lg:fixed bg-secondary items-center  justify-between">
      <div className="flex  items-center gap-3 ">
        <Link to="/" className="w-12 h-12 md:w-10 md:h-10 select-none">
          <img src={imgLogo} alt="" className="w-full h-full object-cover" />
        </Link>
        <Link
          to="/"
          className="text-3xl font-black text-primary md:text-2xl sm:text-xl"
        >
          Cryptoverse
        </Link>
      </div>
      <p onClick={toggleNavHandler}>{showNav ? iconNavClose : iconNavOpen}</p>
      <div
        className={`w-9 h-9 rounded-full bg-secondary absolute right-7 ${
          showNav ? "scale-[100]" : "scale-0"
        } transition-all duration-1000 ease-in-out z-[100]  `}
      ></div>
      <nav
        className={`w-full min-h-screen fixed top-0 right-0 p-7 z-[150]  flex items-center justify-center ${
          showNav ? "w-full opacity-100" : "w-0 opacity-0"
        } transition-all  duration-500 ease-in-out `}
      >
        <Navbar
          onCloseNav={closeNavHandler}
          newClasses={` max-w-xs w-full ${
            showNav
              ? "translate-x-0 opacity-100 delay-500"
              : "translate-x-[500px] opacity-0"
          } transition-all  duration-500 ease-in-out`}
        />
      </nav>
    </header>
  );
};

export default Navigation;

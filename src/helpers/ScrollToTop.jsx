import React, { useEffect, useState } from "react";
import { iconScroll } from "./Icons";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <button
        onClick={scrollToTopHandler}
        className={`w-12 h-12 rounded-full bg-primary cursor-pointer flex justify-center items-center fixed bottom-7 right-7 ${
          showButton ? "opacity-1 scale-100 " : "opacity-0 scale-150 "
        } shadow-2xl z-10 transition-all duration-500 ease-in-out`}
      >
        {iconScroll}
      </button>
    </>
  );
};

export default ScrollToTop;

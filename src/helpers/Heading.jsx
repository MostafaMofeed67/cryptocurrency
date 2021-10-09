import React from "react";

const Heading = ({ heading, small, gap }) => {
  return (
    <h1
      className={`${small ? "text-xl" : "text-3xl"} ${
        gap ? "mb-5" : ""
      } font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark sm:text-xl `}
    >
      {heading}
    </h1>
  );
};

export default Heading;

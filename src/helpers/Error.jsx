import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";

const Error = ({ message, gap }) => {
  return (
    <div
      className={`max-w-lg w-full mx-auto px-7 py-10 shadow-md rounded bg-white ${
        gap ? "mt-5" : ""
      }`}
    >
      <Heading heading={message} />
      <Link
        to="/"
        className=" inline-block px-4 py-2 bg-primary mt-5  text-white rounded focus:ring-2 focus:ring-offset-1 focus:ring-primary/50  hover:bg-primary-light transition-all duration-500 ease-in-out"
      >
        Back to home
      </Link>
    </div>
  );
};

export default Error;

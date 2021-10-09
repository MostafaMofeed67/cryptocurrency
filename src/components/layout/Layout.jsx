import React from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <div className="flex">
        <MainNavigation />
        <div className="flex-1 p-9 overflow-hidden">
          <main className="min-h-screen lg:pt-32">{props.children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

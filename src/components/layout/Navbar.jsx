import React from "react";
import { NavLink } from "react-router-dom";
import { iconNav1, iconNav2, iconNav3, iconNav4 } from "../../helpers/Icons";

const Navbar = ({ newClasses, onCloseNav }) => {
  const classes = `space-y-5 ${newClasses} `;

  return (
    <ul className={classes}>
      <NavLink
        onClick={onCloseNav}
        exact
        activeClassName="bg-primary text-white"
        to="/"
        className="link item"
      >
        {iconNav1}
        <p className="relative z-10 flex-1">Home</p>
      </NavLink>
      <NavLink
        onClick={onCloseNav}
        exact
        activeClassName="bg-primary text-white"
        to="/cryptocurrencies"
        className="link item"
      >
        {iconNav2}
        <p className="relative z-10">Cryptocurrencies</p>
      </NavLink>
      <NavLink
        onClick={onCloseNav}
        exact
        activeClassName="bg-primary text-white"
        to="/exchanges"
        className="link item"
      >
        {iconNav3}
        <p className="relative z-10">Exchanges</p>
      </NavLink>
      <NavLink
        onClick={onCloseNav}
        exact
        activeClassName="bg-primary text-white"
        to="/news"
        className="link item "
      >
        {iconNav4}
        <p className="relative z-10">News</p>
      </NavLink>
    </ul>
  );
};

export default Navbar;

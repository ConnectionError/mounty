import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = () => {
  return (
    <div className="nav-links">
      <li>
        <NavLink to="/future">New Movies</NavLink>
      </li>
      <li>
        <NavLink to="/toprated">Top Movies</NavLink>
      </li>
    </div>
  );
};

export default NavLinks;

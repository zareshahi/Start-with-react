// stateless functional component
import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered!");
  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default NavBar;

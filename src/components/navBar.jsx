// stateless functional component
import { NavLink, withRouter } from "react-router-dom";
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

// add support router props for any function that didn't call as <route>
export default withRouter(NavBar);

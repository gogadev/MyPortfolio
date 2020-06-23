import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.style.css";

const Nav = () => {
  return (
    <nav>
      <h1 className="title">
        <span>My</span> Portfolio
      </h1>
      <ul className="list">
        <NavLink to="/">
          {" "}
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          {" "}
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          {" "}
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;

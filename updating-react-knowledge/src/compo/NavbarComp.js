import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "white" })}>
          Home
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "red" : "white" })}>
          Contact
        </NavLink>
        <NavLink to="/product" style={({ isActive }) => ({ color: isActive ? "red" : "white" })}>
          Product
        </NavLink>
      </nav>
    </div>
  );
};

export default NavbarComp;

import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../images/Logo.png";
import "../index.css";

function Layout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#FFC94A",
  };
  return (
    <>
      <header className="layout-container">
        <Link   to="/">
          <img className ="logo" src={Logo} alt="Company Logo" />
        </Link>
        <nav className="navbar-container">
          <div className="layout-links">
            <NavLink
              to="/orders"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Order
            </NavLink>
          </div>
          <div className="layout-links">
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              About
            </NavLink>
          </div>
          <div className="layout-links">
            <NavLink
              to="/login"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Login
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

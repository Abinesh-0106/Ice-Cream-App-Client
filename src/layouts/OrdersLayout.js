import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function OrdersLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color:"brown",
    backgroundColor:"silver"
  };
  return (
    <div className="order-page">
      <nav className="order-page-navbar">
        <NavLink
          className={()=>"order-page-navbar-links"}
          to="."
          style={({ isActive }) => (isActive ? activeStyles : null)}
          end
        >
        <div>DashBoard</div>
        </NavLink>
        <NavLink
          className={()=>"order-page-navbar-links"}
          to="create-order"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <div>Create Order</div>
        </NavLink>
        <NavLink
          className={()=>"order-page-navbar-links"}
          to="your-orders"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <div>Your Orders</div>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default OrdersLayout;

import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  const response = await fetch("http://localhost:2500/api/orders/headers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: 2 }),
  });
  const data = await response.json();
  return data;
}

function YourOrders() {
  const orders = useLoaderData();
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    backgroundColor: "#e1e6e6",
  };
  const orderElements = orders.map((order) => {
    return (
      <NavLink
        to={`${order.orderId}`}
        style={({ isActive }) => (isActive ? activeStyles : null)}
        className={(odj)=>'nav-order-list'}
      >
        <div className="order-list" key={order.orderId}>
          <h3>Order No: {order.orderNo}</h3>
          <p>Order date: {order.orderDate}</p>
          <p>Order value: {order.orderValue}</p>
          <p>Line items: {order.lineItems}</p>
        </div>
      </NavLink>
    );
  });
  return (
    <div className="order-container">
      <div className="order-header">{orderElements}</div>
      <div className="order-detail">
        <Outlet />
      </div>
    </div>
  );
}

export default YourOrders;

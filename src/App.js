import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login, { action as loginAction } from "./pages/Login";
import SignUp from "./pages/SignUp";
import OrdersLayout from "./layouts/OrdersLayout";
import OrderDashboard from "./orderpages/OrderDashboard";
import CreateOrder from "./orderpages/CreateOrder";
import YourOrders,{loader as orderLoader} from "./orderpages/YourOrders";

import About from "./pages/About";

import Layout from "./layouts/Layout";
import OrderDetails from "./orderpages/OrderDetails";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} action={loginAction} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="orders" element={<OrdersLayout />}>
          <Route index element={<OrderDashboard />} />
          <Route path="create-order" element={<CreateOrder />} />
          <Route path="your-orders" element={<YourOrders />} loader={orderLoader} >
            <Route path=":orderId" element={<OrderDetails/>}/>
          </Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

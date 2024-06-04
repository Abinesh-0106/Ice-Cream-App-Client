import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Login, { action as loginAction } from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import OrdersLayout from "./layouts/OrdersLayout.js";
import OrderDashboard from "./orderpages/OrderDashboard.js";
import CreateOrder from "./orderpages/CreateOrder.js";
import YourOrders,{loader as orderLoader} from "./orderpages/YourOrders.js";
import About from "./pages/About.js";
import Layout from "./layouts/Layout.js";
import OrderDetails from "./orderpages/OrderDetails.js";
import ErrorPage from "./pages/ErrorPage.js";
import CreateProduct,{action as createProductAction,loader as createProductLoader} from "./adminPages/CreateProduct.js";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage/>}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} action={loginAction} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route 
        path="create-product" 
        element={<CreateProduct />} 
        action={createProductAction} 
          loader={createProductLoader}
        />
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

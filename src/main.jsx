import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Body from "./components/Body/Body";
import Login from "./components/Login/Login";
import Layout from "./Layout";
import SignUp from "./components/SignUp/SignUp";
import MyOrders from "./components/Orders/MyOrders";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Body />} />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp/>} />
      <Route path="orders" element={<MyOrders/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

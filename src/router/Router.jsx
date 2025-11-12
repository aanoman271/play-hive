import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../assets/Root/Root";
import Home from "../pages/Home";
import Profile from "../pages/profile/Profile";
import ToyDeatail from "../pages/toyDeatail/ToyDeatail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("toy.json"),
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/toydeatail",
        element: <ToyDeatail></ToyDeatail>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;

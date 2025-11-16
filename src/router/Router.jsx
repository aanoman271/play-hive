import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Profile from "../pages/profile/Profile";
import ToyDeatail from "../pages/toyDeatail/ToyDeatail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivetRoutes from "../routes/PrivetRoutes";
import Root from "../Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("../toy.json"),
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/toydeatail/:id",
        element: (
          <PrivetRoutes>
            <ToyDeatail></ToyDeatail>
          </PrivetRoutes>
        ),
        loader: () => fetch("../toy.json"),
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

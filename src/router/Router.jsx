import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Profile from "../pages/profile/Profile";
import ToyDeatail from "../pages/toyDeatail/ToyDeatail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivetRoutes from "../routes/PrivetRoutes";
import Root from "../Root/Root";
import Errorpage from "../pages/errorPage/Errorpage";
import WishList from "../pages/wishList/WishList";
import ResetForm from "../pages/reset/ResetForm";

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
        path: "/wishlist",
        element: (
          <PrivetRoutes>
            <WishList></WishList>
          </PrivetRoutes>
        ),
        loader: () => fetch("../toy.json"),
      },
      {
        path: "/resetPassword",
        element: <ResetForm></ResetForm>,
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
  {
    path: "*",
    Component: Errorpage,
  },
]);

export default router;

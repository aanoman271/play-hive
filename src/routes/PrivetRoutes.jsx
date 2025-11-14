import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Lodder from "../components/navbar/loader/Lodder";

const PrivetRoutes = ({ children }) => {
  const { loding, user } = use(AuthContext);
  const location = useLocation();
  if (loding) {
    return <Lodder></Lodder>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
};

export default PrivetRoutes;

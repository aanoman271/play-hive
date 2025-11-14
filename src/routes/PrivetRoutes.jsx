import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user } = use(AuthContext);
  if (user) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivetRoutes;

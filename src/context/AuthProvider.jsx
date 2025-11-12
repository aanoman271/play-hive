import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [alert, setalert] = useState("");
  const [errr, setErr] = useState("");
  // createuser
  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin user
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authdata = {
    alert,
    setalert,
    errr,
    setErr,
    createuser,
    userLogin,
  };
  return (
    <AuthContext.Provider value={authdata}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

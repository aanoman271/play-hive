import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [alert, setalert] = useState("");
  const [errr, setErr] = useState("");
  const [user, setuser] = useState(null);
  // createuser
  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin user
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // manage user
  useEffect(() => {
    const users = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
    return () => {
      users();
    };
  }, []);
  // signOut
  const signOutUser = () => {
    return signOut(auth);
  };
  const authdata = {
    user,
    signOutUser,
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

import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [alert, setalert] = useState("");
  const [errr, setErr] = useState("");
  const [user, setuser] = useState(null);
  const [loding, setLoding] = useState(true);
  // createuser
  const createuser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin user
  const userLogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // manage user
  useEffect(() => {
    const users = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setLoding(false);
    });
    return () => {
      users();
    };
  }, []);
  // signOut
  const signOutUser = () => {
    setLoding(true);
    return signOut(auth);
  };
  // signIn google
  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const [allToy, setAllToy] = useState(false);
  const handleAllToy = () => {
    setAllToy(!allToy);
    console.log(allToy);
  };
  // Reset pass
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authdata = {
    user,
    resetPassword,
    handleAllToy,
    setAllToy,
    allToy,
    setuser,
    updateUser,
    signInGoogle,
    loding,
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

import React from "react";
import { Outlet } from "react-router";
import Slider from "../slider/Slider";
import Navbar from "../components/navbar/Navbar";
import Fotter from "../components/navbar/fotter/Fotter";
const Root = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Fotter></Fotter>
      </footer>
    </div>
  );
};

export default Root;

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router";
import Slider from "../../slider/Slider";

const Root = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default Root;

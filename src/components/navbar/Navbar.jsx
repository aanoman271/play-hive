import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between my-7">
      {" "}
      <div className="flex   items-center gap-3">
        {/* Hexagon Logo */}
        <div className="relative w-16 h-14">
          <div className="absolute inset-0 bg-yellow-400 clip-hex shadow-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">PH</span>
          </div>
        </div>

        {/* Brand Text */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-800">Play Hive</h1>
          <p className="text-sm text-gray-500 -mt-1">Toys • Fun • Learning</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
      <div className="flex items-center">
        <Link to="/profile">
          <button className="btn btn-warning">My Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

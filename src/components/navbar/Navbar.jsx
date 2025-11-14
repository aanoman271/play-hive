import React, { use } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("signOut succesfull"))
      .catch((err) => console.log(err.message));
  };
  const navLink = (
    <ul className="flex items-center gap-4">
      <li>
        {" "}
        <NavLink to="/">
          <button className="btn btn-dash btn-warning">Home</button>
        </NavLink>
      </li>
      <li>
        {" "}
        <Link to="/profile">
          <button className="btn btn-dash btn-warning">My Profile</button>
        </Link>
      </li>
    </ul>
  );
  return (
    <>
      <div className="flex justify-between my-7">
        {/* MOBILE DROPDOWN */}
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn  m-1">
            <RxDropdownMenu />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 text-black rounded-box w-52 p-2 shadow z-[999]"
          >
            <li>
              <NavLink className="text-black" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>

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
        <div className="hidden md:flex">{navLink}</div>
        <div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-dash btn-warning"
            >
              SignOut
            </button>
          ) : (
            <Link to="/register">
              <button className="btn btn-dash btn-warning">SignIn</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

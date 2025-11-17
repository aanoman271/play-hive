import React, { useContext } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { setalert, setErr, user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    setErr("");
    setalert("");
    signOutUser()
      .then(() => console.log("signOut succesfull"))
      .catch((err) => console.log(err.message));
    navigate("/");
  };
  const navLink = (
    <ul className=" flex items-center gap-4">
      <li>
        <NavLink className="btn btn-dash btn-warning" to="/">
          Home
        </NavLink>
      </li>
      <li>
        {user && (
          <NavLink className="btn btn-dash btn-warning" to="/profile">
            My Profile
          </NavLink>
        )}
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

        <div className="hidden md:flex">
          <div className="flex items-center gap-2">
            {navLink}
            {user && (
              <div className="relative group">
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full ring-2 ring-warning cursor-pointer transition-all group-hover:ring-accent"
                />

                <div className="absolute right-0 top-12 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border">
                  <div className="flex items-center gap-3 mb-3">
                    <p className="font-bold text-white text-sm">
                      {user?.displayName}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          {user ? (
            <button onClick={handleSignOut} className="btn btn-warning ">
              SignOut
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-warning">SignIn</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-20 bg-amber-100 py-5">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </div>
      <div className="flex gap-2 ">
        <div>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : ""
            }
          >
            Register
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : ""
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

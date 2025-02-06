import React from "react";
import { Link, NavLink, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const logoutHandler = () => {
    localStorage.setItem("token", "")
    navigate("/login")
  }
  return (
    <nav className="max-w-4xl m-auto text-xl flex justify-center items-center gap-20 bg-gray-400 py-5">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-gray-800 font-bold" : ""
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
              isActive ? "text-gray-800 font-bold" : ""
            }
          >
            Register
          </NavLink>
        </div>
        <div>
          { 
          token ?  <button onClick={logoutHandler}>Logout</button> : <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : ""
          }
        >
          Login
        </NavLink>
          }
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

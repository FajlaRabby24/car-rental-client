import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const links = (
    <div className="flex items-center gap-3">
      <li>
        <NavLink className={"font-semibold"} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"font-semibold"} to={"/available-cars"}>
          Available Cars
        </NavLink>
      </li>
    </div>
  );

  return (
    <nav className="max-w-7xl mx-auto ">
      <div className="navbar ">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="pr-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center">
            <img src={logo} alt="logos" className="w-[50px] md:w-[55px]" />
            <h4 className="text-lg font-bold hidden md:block">Car Rental</h4>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"}>
            <button className="btn ">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

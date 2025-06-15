import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import defaultUser from "../assets/images/defaultUser.png";
import logo from "../assets/images/logo.png";
import useAuth from "../hooks/useAuth";
import { getTheme, saveTheme } from "../utilities/handleTheme";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [isLightMood, setIsLightMood] = useState(false);

  // navigation links
  const links = (
    <>
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
      {user && (
        <>
          <li>
            <NavLink className={"font-semibold"} to={"/add-cars"}>
              Add cars
            </NavLink>
          </li>
          <li>
            <NavLink className={"font-semibold"} to={"/my-cars"}>
              My cars
            </NavLink>
          </li>
          <li>
            <NavLink className={"font-semibold"} to={"/my-bookings"}>
              My bookings
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  // sign out user
  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign out successfully!");
      })
      .catch(() => {
        toast.error("Something wrong! Please try again?");
      });
  };

  // theme
  const handleTheme = () => {
    const newTheme = isLightMood ? "dark" : "light";
    setIsLightMood(!isLightMood);
    document.documentElement.setAttribute("data-theme", newTheme);
    saveTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = getTheme() || "light";
    setIsLightMood(savedTheme === "light");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <nav className="max-w-7xl mx-auto z-20">
      <Tooltip id="my-tooltip" />
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
        <div className="navbar-end gap-4">
          <label
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Themes"
            className="swap swap-rotate z-50"
          >
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleTheme}
              checked={!isLightMood}
            />
            {/* sun icon */}
            <svg
              className={`swap-off h-8 w-8 fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className={`swap-on h-8 w-8 fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user ? (
            <div className="dropdown dropdown-end  ml-5 ">
              <div
                data-tooltip-id="my-tooltip"
                data-tooltip-content="profile"
                className="avatar avatar-online"
                tabIndex={0}
              >
                <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2">
                  <img
                    src={user.photoURL || defaultUser}
                    alt="user profile image"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 dark:bg-white rounded-box z-1  space-y-1 w-max p-2    shadow-sm"
              >
                <li>
                  <h3 className="text-xl dark:text-black font-semibold">
                    {user && user?.displayName}
                  </h3>
                </li>
                <li>
                  <button
                    onClick={handleSignOutUser}
                    className="btn btn-warning"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn ">Login</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn ">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

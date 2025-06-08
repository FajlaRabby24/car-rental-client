import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import defaultUser from "../assets/images/defaultUser.png";
import logo from "../assets/images/logo.png";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();

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
        <div className="navbar-end gap-4">
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

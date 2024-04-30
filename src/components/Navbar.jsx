import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);
  useEffect(() => {
    AOS.init();
  }, []);

  const handleSignOut = () => {
    signOutUser();
    toast.success("Signout Successfully");
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          style={({isActive}) => {
            return isActive
              ? {background: "#259162", color: "white", fontWeight: "600"}
              : {};
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          style={({isActive}) => {
            return isActive
              ? {background: "#259162", color: "white", fontWeight: "600"}
              : {};
          }}
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({isActive}) => {
            return isActive
              ? {background: "#259162", color: "white", fontWeight: "600"}
              : {};
          }}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          style={({isActive}) => {
            return isActive
              ? {background: "#259162", color: "white", fontWeight: "600"}
              : {};
          }}
        >
          Service
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/profile"
              style={({isActive}) => {
                return isActive
                  ? {background: "#259162", color: "white", fontWeight: "600"}
                  : {};
              }}
            >
              Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const navItemsSignIn = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/updateProfile">Update Profile</NavLink>
          </li>
        </>
      )}
      <li>
        <Link onClick={handleSignOut}>Logout</Link>
      </li>
    </>
  );

  return (
    <div className="bg-gray-200">
      <div className="navbar w-11/12 lg:w-3/4 mx-auto p-4">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="pr-2 text-[#007F5F] lg:hidden pt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-base mt-3 z-[10] p-2 shadow bg-base-100 w-52 rounded-md "
            >
              {navItems}
            </ul>
          </div>
          <div className="btn p-0 bg-transparent border-none shadow-none hover:bg-transparent">
            <Link
              to="/"
              className="text-3xl md:text-4xl font-bold lg:font-extrabold bg-gradient-to-l from-[#259162] via-[#70B668] to-[#007F5F] inline-block text-transparent bg-clip-text"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Land Spark
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-4 menu-horizontal px-1 text-base">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end ">
          {user ? (
            <div>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="pr-2 text-[#007F5F] pt-1"
                >
                  {user.photoURL ? (
                    <div>
                      <img
                        src={user.photoURL}
                        className="rounded-[100%] w-12"
                        alt="Photo"
                        title={user.displayName}
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                        className="rounded-[100%] w-12"
                        alt=""
                      />
                    </div>
                  )}
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content text-base mt-3 z-[10] p-2 shadow bg-base-100 w-fit rounded-md "
                >
                  {navItemsSignIn}
                </ul>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <Link
                className="text-xl flex items-center gap-2 hover:text-[#007F5F]"
                to="/login"
              >
                <FaSignInAlt></FaSignInAlt>
                <span className="font-medium">Login</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

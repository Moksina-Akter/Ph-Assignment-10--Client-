import { Link, NavLink } from "react-router";

import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => toast.error(err.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-700 font-semibold underline"
              : "text-white hover:text-purple-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-products"
          className={({ isActive }) =>
            isActive
              ? "text-purple-700 font-semibold underline"
              : "text-white hover:text-purple-500"
          }
        >
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-exports"
          className={({ isActive }) =>
            isActive
              ? "text-purple-700 font-semibold underline"
              : "text-white hover:text-purple-500"
          }
        >
          My Exports
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-imports"
          className={({ isActive }) =>
            isActive
              ? "text-purple-700 font-semibold underline"
              : "text-white hover:text-purple-500"
          }
        >
          My Imports
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-export"
          className={({ isActive }) =>
            isActive
              ? "text-purple-700 font-semibold underline"
              : "text-white hover:text-purple-500"
          }
        >
          Add Export
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#1E3A8A] shadow-md sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto flex justify-between items-center py-2">
        <div className="flex items-center gap-4">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-[#1E3A8A] rounded-box w-52 space-y-2"
            >
              {navLinks}
              <div className="divider bg-white h-[1px]"></div>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-purple-700 hover:bg-purple-500 text-white font-semibold"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="btn btn-sm bg-purple-700 hover:bg-purple-500 text-white font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-sm bg-purple-700 hover:bg-purple-500 text-white font-semibold"
                  >
                    Register
                  </Link>
                </>
              )}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-20 object-contain hover:scale-105 transition-transform"
            />
          </Link>

          <ul className="hidden lg:flex gap-8">{navLinks}</ul>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={profile}
                alt="User"
                className="h-10 w-10 rounded-full border-2 border-purple-800 hover:scale-105 transition-transform"
              />
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-purple-700 hover:bg-purple-500 text-white  font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex gap-2">
              <Link
                to="/login"
                className="btn btn-sm bg-purple-700 hover:bg-purple-500 text-white font-semibold"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-sm bg-purple-700 hover:bg-purple-500 text-white font-semibold"
              >
                Register
              </Link>
            </div>
          )}
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

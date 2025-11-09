import { Link, NavLink } from "react-router";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const links = (
//     <>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/all-products">All Products</NavLink>
//       </li>
//       <li>
//         <NavLink to="/my-exports">My Exports</NavLink>
//       </li>
//       <li>
//         <NavLink to="/my-imports">My Imports</NavLink>
//       </li>
//       <li>
//         <NavLink to="/add-export">Add Export</NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className=" bg-base-200 shadow-md">
//       <div className="navbar w-11/12 mx-auto">
//         {/* Left side */}
//         <div className="navbar-start">
//           {/* Dropdown for mobile */}
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             {/* Mobile menu */}
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
//             >
//               {links}
//               <li>
//                 <NavLink to="/login" className="btn btn-sm mt-2">
//                   Login
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//           <Link to="/" className="flex items-center w-20">
//             <img
//               src={logo}
//               alt="Logo"
//               className="h-full w-full object-contain  hover:scale-105 transition-transform"
//             />
//             <h1 className=" text-2xl font-bold">ImportExportHub</h1>{" "}
//           </Link>
//         </div>
//         {/* Center links for large screens */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{links}</ul>
//         </div>
//         {/* Right side button */}
//         <div className="navbar-end">
//           <NavLink to="/login" className="btn btn-sm">
//             Login
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import logo from "../assets/logo.png";
import { useState } from "react";
// import { auth } from "../firebase/firebase.config";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { toast } from "react-toastify";

const Navbar = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => toast.success("Logged out successfully!"))
  //     .catch((err) => toast.error(err.message));
  // };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#F59E0B] font-semibold underline"
              : "text-white hover:text-[#FBBF24]"
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
              ? "text-[#F59E0B] font-semibold underline"
              : "text-white hover:text-[#FBBF24]"
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
              ? "text-[#F59E0B] font-semibold underline"
              : "text-white hover:text-[#FBBF24]"
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
              ? "text-[#F59E0B] font-semibold underline"
              : "text-white hover:text-[#FBBF24]"
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
              ? "text-[#F59E0B] font-semibold underline"
              : "text-white hover:text-[#FBBF24]"
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
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Mobile Dropdown */}
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
                  // onClick={handleLogout}
                  className="btn btn-sm bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E3A8A] font-semibold"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="btn btn-sm bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E3A8A] font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-sm bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E3A8A] font-semibold"
                  >
                    Register
                  </Link>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-20 object-contain hover:scale-105 transition-transform"
            />
            {/* <h1 className="text-white text-xl md:text-2xl font-bold">
              ImportExportHub
            </h1> */}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8">{navLinks}</ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user?.photoURL || "https://via.placeholder.com/50"}
                alt="User"
                className="h-10 w-10 rounded-full border-2 border-[#F59E0B] hover:scale-105 transition-transform"
              />
              <button
                // onClick={handleLogout}
                className="btn btn-sm bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E3A8A] font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex gap-2">
              <Link
                to="/login"
                className="btn btn-sm bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E3A8A] font-semibold"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-sm bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E3A8A] font-semibold"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

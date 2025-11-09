import React, { useState, useEffect, useRef } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { auth } from "../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const emailRef = useRef();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Email/Password login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success("Logged in successfully!", res);
        e.target.reset();
        navigate("/"); // Navigate to Home after login
      })
      .catch((err) => toast.error(err.message));
  };

  // Google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Google login successful!");
        navigate("/"); // Navigate to Home
      })
      .catch((err) => toast.error(err.message));
  };

  // Logout
  const handleSignout = () => {
    signOut(auth)
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="card bg-base-100 mx-auto my-8 w-full max-w-sm shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-purple-900 text-center mb-4">
          {user ? "Welcome Back!" : "Login Now!"}
        </h1>

        {user ? (
          <div className="text-center space-y-3">
            <img
              className="h-20 w-20 rounded-full mx-auto"
              src={user?.photoURL || "https://via.placeholder.com/88"}
              alt={user?.displayName}
            />
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <p className="text-gray-700">{user?.email}</p>
            <button
              onClick={handleSignout}
              className="btn bg-[#693382] w-full text-[#efd8ed] mt-3"
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <fieldset>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                required
                className="input border-[#693382]"
                placeholder="Email"
              />

              <div className="relative mt-2">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  required
                  className="input border-[#693382]"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-6 top-9 cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button type="button" className="link mt-1 link-hover text-sm">
                Forgot password?
              </button>

              <button
                type="submit"
                className="btn bg-[#693382] text-[#efd8ed] w-full mt-4"
              >
                Login
              </button>
            </fieldset>

            <div className="flex items-center justify-center gap-2 my-3">
              <div className="h-px w-16 bg-gray-400"></div>
              <span className="text-gray-700">or</span>
              <div className="h-px w-16 bg-gray-400"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="py-2 text-center text-gray-700">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-700 hover:text-blue-900 font-bold underline"
              >
                Register
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

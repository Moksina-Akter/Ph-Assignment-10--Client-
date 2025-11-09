import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // Google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/"); // navigate to Home page
      })
      .catch((err) => toast.error(err.message));
  };

  // Email registration
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name?.value;
    const email = e.target.email?.value;
    const photo = e.target.photo?.value;
    const password = e.target.password?.value;

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must have at least one uppercase, one lowercase, and minimum 6 characters"
      );
      return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success(`Registration successful! Welcome, ${name}`);
            navigate("/"); // navigate to Home page after registration
          })
          .catch((err) => console.error("Profile update error:", err));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="card bg-base-100 mx-auto my-8 w-full max-w-sm shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-purple-900 text-center mb-4">
          Register Now!
        </h1>

        <form onSubmit={handleRegister}>
          <fieldset className="space-y-3">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input border-purple-900 w-full"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input border-purple-900 w-full"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input border-purple-900 w-full"
              required
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input border-purple-900 w-full"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button
              type="submit"
              className="btn w-full bg-[#693382] text-[#efd8ed] mt-4"
            >
              Register
            </button>
          </fieldset>
        </form>

        <div className="flex items-center justify-center gap-2 my-4">
          <div className="h-px w-16 bg-gray-400"></div>
          <span className="text-gray-700">or</span>
          <div className="h-px w-16 bg-gray-400"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="btn w-full flex items-center justify-center gap-3 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-700 hover:text-blue-900 font-bold underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
